<template>
  <CustomerLayout>
    <!-- Redirect if cart empty -->
    <div v-if="isEmpty" class="max-w-2xl mx-auto px-4 py-24 text-center">
      <h2 class="text-xl font-bold text-white mb-4">Your cart is empty.</h2>
      <router-link :to="{ name: 'products' }" class="btn-orange">Go Shopping</router-link>
    </div>

    <!-- Success state -->
    <div v-else-if="placedOrder" class="max-w-2xl mx-auto px-4 py-20 text-center">
      <div class="w-20 h-20 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg class="w-10 h-10 text-green-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h1 class="text-3xl font-black text-white mb-2">Order Placed!</h1>
      <p class="text-slate-400 mb-1">Thank you for your purchase.</p>
      <p class="text-slate-300 font-semibold text-lg mb-8">Order #{{ placedOrder.order_number }}</p>
      <div class="flex justify-center gap-3">
        <router-link :to="{ name: 'orders' }" class="btn-primary">View My Orders</router-link>
        <router-link :to="{ name: 'products' }" class="btn-outline">Continue Shopping</router-link>
      </div>
    </div>

    <!-- Checkout form -->
    <div v-else class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 class="text-3xl font-black text-white mb-8">Checkout</h1>

      <!-- Error -->
      <div v-if="error" class="mb-6 p-4 bg-red-900/50 border border-red-800 rounded-xl text-red-200 text-sm">
        {{ error }}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Form -->
        <form @submit.prevent="placeOrder" class="lg:col-span-2 space-y-8">
          <!-- Shipping address -->
          <div class="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <h2 class="text-lg font-bold text-white mb-5">Shipping Address</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Full Name</label>
                <input v-model="form.shipping_address.name" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Jane Doe" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Phone</label>
                <input v-model="form.shipping_address.phone" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="+1 234 567 8900" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Country</label>
                <input v-model="form.shipping_address.country" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="United States" />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Street Address</label>
                <input v-model="form.shipping_address.address" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="123 Main St, Apt 4B" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">City</label>
                <input v-model="form.shipping_address.city" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="New York" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">State / Province</label>
                <input v-model="form.shipping_address.state" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="NY" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">ZIP / Postal Code</label>
                <input v-model="form.shipping_address.postal_code" required class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="10001" />
              </div>
            </div>
          </div>

          <!-- Payment method -->
          <div class="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <h2 class="text-lg font-bold text-white mb-5">Payment Method</h2>
            <div class="space-y-3">
              <label
                v-for="method in paymentMethods"
                :key="method.value"
                :class="['flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors',
                  form.payment_method === method.value ? 'border-orange-500 bg-slate-800/50' : 'border-slate-800 hover:border-slate-700']"
              >
                <input type="radio" v-model="form.payment_method" :value="method.value" class="accent-orange-500" />
                <div>
                  <p class="font-semibold text-white text-sm">{{ method.label }}</p>
                  <p class="text-xs text-slate-400">{{ method.desc }}</p>
                </div>
              </label>
            </div>
          </div>

          <!-- Notes -->
          <div class="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <h2 class="text-lg font-bold text-white mb-3">Order Notes <span class="text-slate-500 font-normal text-sm">(optional)</span></h2>
            <textarea v-model="form.notes" rows="3" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Any special instructions…"></textarea>
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="btn-primary w-full py-4 text-base font-bold disabled:opacity-50"
            style="background:#f97316;color:white;border-radius:0.5rem;"
          >
            <span v-if="submitting">Placing Order…</span>
            <span v-else>Place Order — ${{ total.toFixed(2) }}</span>
          </button>
        </form>

        <!-- Order summary -->
        <div class="lg:col-span-1">
          <div class="bg-slate-900 rounded-2xl border border-slate-800 p-6 sticky top-24">
            <h2 class="text-lg font-bold text-white mb-5">Your Items</h2>
            <div class="space-y-3 mb-5">
              <div v-for="(item, i) in cartItems" :key="i" class="flex items-start gap-3">
                <div class="w-14 h-14 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                  <img v-if="item.image" :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-white truncate">{{ item.name }}</p>
                  <p class="text-xs text-slate-400">
                    <span v-if="item.size">{{ item.size }}</span>
                    <span v-if="item.size && item.color"> · </span>
                    <span v-if="item.color">{{ item.color }}</span>
                    <span> × {{ item.quantity }}</span>
                  </p>
                </div>
                <p class="text-sm font-semibold text-white flex-shrink-0">${{ (item.price * item.quantity).toFixed(2) }}</p>
              </div>
            </div>
            <div class="border-t border-slate-800 pt-4 space-y-2 text-sm">
              <div class="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span v-if="shippingFee > 0">${{ shippingFee.toFixed(2) }}</span>
                <span v-else class="text-green-500 font-medium">Free</span>
              </div>
              <div class="flex justify-between font-bold text-white text-base pt-1 border-t border-slate-800">
                <span>Total</span>
                <span>${{ total.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CustomerLayout>
</template>

<script>
import axios from 'axios';
import CustomerLayout from '../layout/CustomerLayout.vue';

export default {
  name: 'CheckoutPage',
  components: { CustomerLayout },
  data() {
    return {
      submitting:   false,
      error:        null,
      placedOrder:  null,
      shippingFee:  0,
      form: {
        shipping_address: {
          name: '', phone: '', address: '', city: '', state: '', postal_code: '', country: '',
        },
        payment_method: 'cod',
        notes:          '',
      },
      paymentMethods: [
        { value: 'cod',           label: 'Cash on Delivery', desc: 'Pay when your order arrives.' },
        { value: 'bank_transfer', label: 'Bank Transfer',    desc: 'We will send payment details after order confirmation.' },
        { value: 'card',          label: 'Credit / Debit Card', desc: 'Processed securely at delivery confirmation.' },
      ],
    };
  },
  computed: {
    cartItems()  { return this.$store.getters['cart/selectedItems']; },
    subtotal()   { return this.$store.getters['cart/subtotal']; },
    isEmpty()    { return this.$store.getters['cart/isEmpty']; },
    total()      { return this.subtotal + this.shippingFee; },
    currentUser(){ return this.$store.getters['auth/currentUser']; },
  },
  created() {
    // Pre-fill name from account
    if (this.currentUser) {
      this.form.shipping_address.name = this.currentUser.name;
    }
    this.fetchShippingFee();
  },
  methods: {
    async fetchShippingFee() {
      try {
        const { data } = await axios.get('/shop/settings/shipping-fee').catch(() => ({ data: null }));
        this.shippingFee = data ? parseFloat(data.value || 0) : 0;
      } catch (_) { this.shippingFee = 0; }
    },

    async placeOrder() {
      this.submitting = true;
      this.error = null;
      try {
        const payload = {
          items:            this.cartItems.map(i => ({
            product_id: i.product_id,
            quantity:   i.quantity,
            size:       i.size || null,
            color:      i.color || null,
          })),
          shipping_address: this.form.shipping_address,
          payment_method:   this.form.payment_method,
          notes:            this.form.notes,
        };

        const { data } = await axios.post('/account/checkout', payload);
        this.placedOrder = data.order;
        this.$store.dispatch('cart/clearSelected');
      } catch (e) {
        const resp = e.response && e.response.data;
        if (resp && resp.errors) {
          this.error = Object.values(resp.errors).map(m => m[0]).join(' ');
        } else {
          this.error = (resp && resp.message) ? resp.message : 'Failed to place order. Please try again.';
        }
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>
