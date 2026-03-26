<template>
  <CustomerLayout>
    <!-- Success state -->
    <div v-if="placedOrder" class="w-full px-4 py-20 text-center" style="max-width:100%">
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
        <router-link :to="{ name: 'products' }" class="btn-outline bg-transparent border-slate-500 text-slate-300 hover:text-white">Continue Shopping</router-link>
      </div>
    </div>

    <!-- Redirect if cart empty -->
    <div v-else-if="isEmpty" class="w-full px-4 py-24 text-center" style="max-width:100%">
      <h2 class="text-xl font-bold text-white mb-4">Your cart is empty.</h2>
      <router-link :to="{ name: 'products' }" class="btn-orange">Go Shopping</router-link>
    </div>

    <!-- Checkout with progress -->
    <div v-else class="w-full px-4 sm:px-6 lg:px-8 py-10" style="max-width:100%">
      <h1 class="text-3xl font-black text-white mb-8">Checkout</h1>

      <!-- Progress indicator -->
      <CheckoutProgress :current-step="currentStep" class="mb-8" />

      <!-- Error -->
      <div v-if="error" class="mb-6 p-4 bg-red-900/50 border border-red-800 rounded-xl text-red-200 text-sm flex items-center gap-2">
        <span>⚠️</span>
        {{ error }}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Main content area -->
        <div class="lg:col-span-2">
          <!-- Step 1: Cart Review -->
          <div v-if="currentStep === 0" class="space-y-6">
            <div class="bg-slate-900 rounded-2xl border border-slate-800 p-6">
              <h2 class="text-lg font-bold text-white mb-5">📦 Review Your Cart</h2>
              <div class="space-y-3">
                <div v-for="(item, i) in cartItems" :key="i" class="flex items-start gap-4 pb-4 border-b border-slate-800 last:border-b-0 last:pb-0">
                  <div class="w-16 h-16 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                    <img v-if="item.image" :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                  </div>
                  <div class="flex-1">
                    <p class="font-semibold text-white">{{ item.name }}</p>
                    <p class="text-xs text-slate-400">
                      <span v-if="item.size">{{ item.size }}</span>
                      <span v-if="item.size && item.color"> · </span>
                      <span v-if="item.color">{{ item.color }}</span>
                    </p>
                    <div class="flex items-center gap-3 mt-2">
                      <span class="text-sm text-slate-300">Qty: {{ item.quantity }}</span>
                      <span class="text-orange-400 font-bold">${{ (item.price * item.quantity).toFixed(2) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button @click="nextStep" class="btn-primary w-full py-3">Continue to Shipping</button>
          </div>

          <!-- Step 2: Shipping Address -->
          <form v-else-if="currentStep === 1" @submit.prevent="nextStep" class="space-y-6">
            <div class="bg-slate-900 rounded-2xl border border-slate-800 p-6">
              <h2 class="text-lg font-bold text-white mb-5">📍 Shipping Address</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="sm:col-span-2">
                  <FormField
                    label="Full Name"
                    v-model="form.shipping_address.name"
                    :error="errors.shippingName"
                    @blur="validateField('shippingName')"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <FormField
                  label="Phone Number"
                  v-model="form.shipping_address.phone"
                  :error="errors.shippingPhone"
                  @blur="validateField('shippingPhone')"
                  placeholder="+1 234 567 8900"
                  required
                />
                <FormField
                  label="Country"
                  v-model="form.shipping_address.country"
                  :error="errors.shippingCountry"
                  @blur="validateField('shippingCountry')"
                  placeholder="United States"
                  required
                />
                <div class="sm:col-span-2">
                  <FormField
                    label="Street Address"
                    v-model="form.shipping_address.address"
                    :error="errors.shippingAddress"
                    @blur="validateField('shippingAddress')"
                    placeholder="123 Main St, Apt 4B"
                    required
                  />
                </div>
                <FormField
                  label="City"
                  v-model="form.shipping_address.city"
                  :error="errors.shippingCity"
                  @blur="validateField('shippingCity')"
                  placeholder="New York"
                  required
                />
                <FormField
                  label="State / Province"
                  v-model="form.shipping_address.state"
                  :error="errors.shippingState"
                  @blur="validateField('shippingState')"
                  placeholder="NY"
                  required
                />
                <FormField
                  label="ZIP / Postal Code"
                  v-model="form.shipping_address.postal_code"
                  :error="errors.shippingZip"
                  @blur="validateField('shippingZip')"
                  placeholder="10001"
                  required
                />
              </div>
            </div>
            <div class="flex gap-3">
              <button type="button" @click="previousStep" class="flex-1 btn-outline">← Back</button>
              <button type="submit" class="flex-1 btn-primary">Continue to Payment →</button>
            </div>
          </form>

          <!-- Step 3: Payment & Notes -->
          <form v-else-if="currentStep === 2" @submit.prevent="nextStep" class="space-y-6">
            <!-- Payment method -->
            <div class="bg-slate-900 rounded-2xl border border-slate-800 p-6">
              <h2 class="text-lg font-bold text-white mb-5">💳 Payment Method</h2>
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
              <h2 class="text-lg font-bold text-white mb-3">📝 Order Notes <span class="text-slate-500 font-normal text-sm">(optional)</span></h2>
              <textarea v-model="form.notes" rows="3" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Any special instructions…"></textarea>
            </div>

            <div class="flex gap-3">
              <button type="button" @click="previousStep" class="flex-1 btn-outline">← Back</button>
              <button type="submit" class="flex-1 btn-primary">Review Order →</button>
            </div>
          </form>

          <!-- Step 4: Order Review -->
          <div v-else-if="currentStep === 3" class="space-y-6">
            <div class="bg-slate-900 rounded-2xl border border-slate-800 p-6">
              <h2 class="text-lg font-bold text-white mb-5">✅ Review Your Order</h2>
              
              <!-- Shipping address -->
              <div class="mb-6 pb-6 border-b border-slate-800">
                <h3 class="text-sm font-bold text-slate-300 uppercase mb-3">Shipping Address</h3>
                <p class="text-white font-medium">{{ form.shipping_address.name }}</p>
                <p class="text-slate-400 text-sm">{{ form.shipping_address.address }}</p>
                <p class="text-slate-400 text-sm">{{ form.shipping_address.city }}, {{ form.shipping_address.state }} {{ form.shipping_address.postal_code }}</p>
                <p class="text-slate-400 text-sm">{{ form.shipping_address.country }} · {{ form.shipping_address.phone }}</p>
              </div>

              <!-- Payment method -->
              <div class="mb-6 pb-6 border-b border-slate-800">
                <h3 class="text-sm font-bold text-slate-300 uppercase mb-3">Payment Method</h3>
                <p class="text-white font-medium">{{ paymentMethods.find(m => m.value === form.payment_method).label }}</p>
              </div>

              <!-- Notes if any -->
              <div v-if="form.notes" class="pb-6 border-b border-slate-800">
                <h3 class="text-sm font-bold text-slate-300 uppercase mb-3">Order Notes</h3>
                <p class="text-slate-300 text-sm">{{ form.notes }}</p>
              </div>
            </div>

            <div class="flex gap-3">
              <button type="button" @click="previousStep" class="flex-1 btn-outline">← Back</button>
              <button
                @click="placeOrder"
                :disabled="submitting"
                class="flex-1 btn-primary py-3 font-bold disabled:opacity-50"
              >
                <span v-if="submitting">🔄 Placing Order…</span>
                <span v-else>✓ Place Order — ${{ total.toFixed(2) }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Order summary (sticky) -->
        <div class="lg:col-span-1">
          <div class="bg-slate-900 rounded-2xl border border-slate-800 p-6 sticky top-24">
            <h2 class="text-lg font-bold text-white mb-5">📋 Order Summary</h2>
            <div class="space-y-2 mb-5 max-h-48 overflow-y-auto">
              <div v-for="(item, i) in cartItems" :key="i" class="flex items-center gap-2 text-sm">
                <span class="text-slate-400">{{ item.quantity }}×</span>
                <span class="text-white flex-1 truncate">{{ item.name }}</span>
                <span class="text-orange-400 font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</span>
              </div>
            </div>
            <div class="border-t border-slate-800 pt-4 space-y-2 text-sm">
              <div class="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-slate-400">
                <span>🚚 Shipping</span>
                <span v-if="shippingFee > 0">${{ shippingFee.toFixed(2) }}</span>
                <span v-else class="text-green-500 font-medium">Free</span>
              </div>
              <div class="flex justify-between font-bold text-white text-base pt-2 border-t border-slate-800">
                <span>Total</span>
                <span class="text-orange-400">${{ total.toFixed(2) }}</span>
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
import CheckoutProgress from './CheckoutProgress.vue';
import FormField from './FormField.vue';
import { useFormValidator } from '../../composables/useFormValidator';

export default {
  name: 'CheckoutPage',
  components: { CustomerLayout, CheckoutProgress, FormField },
  setup() {
    const { validateField: validateSingleField } = useFormValidator();
    return { validateSingleField };
  },
  data() {
    return {
      currentStep:  0,
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
      errors: {
        shippingName: '',
        shippingPhone: '',
        shippingAddress: '',
        shippingCity: '',
        shippingState: '',
        shippingZip: '',
        shippingCountry: '',
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
    isEmpty()    { return this.cartItems.length === 0; },
    total()      { return this.subtotal + this.shippingFee; },
    currentUser(){ return this.$store.getters['auth/currentUser']; },
  },
  created() {
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

    validateField(fieldKey) {
      const fieldMap = {
        shippingName: ['required', 'Full Name'],
        shippingPhone: ['phone'],
        shippingAddress: [['street'], 'Street Address'],
        shippingCity: ['required', 'City'],
        shippingState: ['required', 'State'],
        shippingZip: ['required', 'ZIP Code'],
        shippingCountry: ['required', 'Country'],
      };

      const [rules, label] = fieldMap[fieldKey];
      const fieldValueMap = {
        shippingName: this.form.shipping_address.name,
        shippingPhone: this.form.shipping_address.phone,
        shippingAddress: this.form.shipping_address.address,
        shippingCity: this.form.shipping_address.city,
        shippingState: this.form.shipping_address.state,
        shippingZip: this.form.shipping_address.postal_code,
        shippingCountry: this.form.shipping_address.country,
      };

      const value = fieldValueMap[fieldKey];
      const ruleArray = Array.isArray(rules) ? [rules] : (Array.isArray(rules[0]) ? [rules] : [[rules, label]]);
      
      // Simple validation
      if (rules === 'required' || (Array.isArray(rules) && rules[0] === 'required')) {
        this.errors[fieldKey] = (value && value.trim()) ? '' : `${label || 'This field'} is required`;
      } else if (rules === 'phone') {
        this.errors[fieldKey] = /^\+?[\d\s\-()]{10,}$/.test(value || '') ? '' : 'Please enter a valid phone number';
      }
    },

    validateShippingForm() {
      const required = ['name', 'phone', 'address', 'city', 'state', 'postal_code', 'country'];
      let isValid = true;

      required.forEach(field => {
        if (!this.form.shipping_address[field] || !this.form.shipping_address[field].trim()) {
          const fieldKey = 'shipping' + field.charAt(0).toUpperCase() + field.slice(1).replace('_', '');
          this.errors[fieldKey] = `${field.replace('_', ' ')} is required`;
          isValid = false;
        }
      });

      // Validate phone format
      if (this.form.shipping_address.phone && !/^\+?[\d\s\-()]{10,}$/.test(this.form.shipping_address.phone)) {
        this.errors.shippingPhone = 'Please enter a valid phone number';
        isValid = false;
      }

      return isValid;
    },

    nextStep() {
      if (this.currentStep === 1) {
        if (!this.validateShippingForm()) {
          this.error = 'Please fix the errors in the shipping address';
          return;
        }
      }
      this.error = null;
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },

    previousStep() {
      this.error = null;
      if (this.currentStep > 0) {
        this.currentStep--;
      }
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
