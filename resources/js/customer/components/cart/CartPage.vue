<template>
  <CustomerLayout>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 class="text-3xl font-black text-white mb-8">Your Cart
        <span v-if="itemCount" class="text-slate-400 font-normal text-lg ml-2">({{ itemCount }} {{ itemCount === 1 ? 'item' : 'items' }})</span>
      </h1>

      <!-- Empty state -->
      <div v-if="isEmpty" class="text-center py-24">
        <svg class="w-16 h-16 mx-auto text-slate-600 mb-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <h2 class="text-xl font-bold text-slate-300 mb-3">Your cart is empty</h2>
        <p class="text-slate-400 mb-6">Add some pieces to get started.</p>
        <router-link :to="{ name: 'products' }" class="btn-orange">Shop Now</router-link>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Cart items -->
        <div class="lg:col-span-2 space-y-4">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="bg-slate-800 rounded-2xl border border-slate-700 p-4 flex items-start gap-4 items-center"
          >
            <!-- Checkbox -->
            <div class="flex-shrink-0 flex items-center justify-center pt-2">
              <input 
                type="checkbox" 
                :checked="item.selected !== false" 
                @change="toggleSelect(index)" 
                class="w-5 h-5 accent-orange-500 rounded border-slate-600 bg-slate-700 focus:ring-orange-500 focus:ring-offset-slate-800 cursor-pointer"
              >
            </div>

            <!-- Image -->
            <router-link :to="{ name: 'product', params: { slug: item.slug } }" class="flex-shrink-0">
              <div class="w-20 h-20 bg-slate-700 rounded-xl overflow-hidden">
                <img v-if="item.image" :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                <div v-else class="w-full h-full flex items-center justify-center text-slate-500">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                  </svg>
                </div>
              </div>
            </router-link>

            <!-- Details -->
            <div class="flex-1 min-w-0">
              <router-link :to="{ name: 'product', params: { slug: item.slug } }">
                <h3 class="font-semibold text-white truncate hover:text-orange-600 transition-colors">{{ item.name }}</h3>
              </router-link>
              <div class="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                <span v-if="item.size"  class="text-xs text-slate-300">Size: {{ item.size }}</span>
                <span v-if="item.color" class="text-xs text-slate-300">Color: {{ item.color }}</span>
              </div>
              <p class="text-orange-600 font-bold mt-1">${{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>

            <!-- Quantity & remove -->
            <div class="flex flex-col items-end gap-2 flex-shrink-0">
              <div class="flex items-center border border-slate-700 rounded-lg overflow-hidden">
                <button @click="updateQty(index, item.quantity - 1)" class="px-3 py-1.5 text-slate-300 hover:bg-slate-700 transition-colors font-bold text-sm">−</button>
                <span class="px-3 py-1.5 text-sm font-bold min-w-[32px] text-center">{{ item.quantity }}</span>
                <button @click="updateQty(index, item.quantity + 1)" class="px-3 py-1.5 text-slate-300 hover:bg-slate-700 transition-colors font-bold text-sm">+</button>
              </div>
              <button @click="removeItem(index)" class="text-xs text-red-500 hover:text-red-700 transition-colors">Remove</button>
            </div>
          </div>

          <!-- Clear cart -->
          <div class="text-right">
            <button @click="clearCart" class="text-sm text-slate-400 hover:text-red-600 transition-colors">Clear cart</button>
          </div>
        </div>

        <!-- Summary -->
        <div class="lg:col-span-1">
          <div class="bg-slate-800 rounded-2xl border border-slate-700 p-6 sticky top-24">
            <h2 class="text-lg font-bold text-white mb-6">Order Summary</h2>

            <div class="space-y-3 text-sm mb-6">
              <div class="flex justify-between text-slate-300">
                <span>Subtotal ({{ itemCount }} items)</span>
                <span class="font-medium">${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-slate-300">
                <span>Shipping</span>
                <span class="text-slate-400">Calculated at checkout</span>
              </div>
              <div class="border-t border-slate-700 pt-3 flex justify-between text-white font-bold text-base">
                <span>Estimated Total</span>
                <span>${{ subtotal.toFixed(2) }}</span>
              </div>
            </div>

            <router-link
              v-if="isAuthenticated"
              :to="{ name: 'checkout' }"
              class="btn-orange w-full text-center text-sm"
              :class="{'opacity-50 pointer-events-none cursor-not-allowed': itemCount === 0}"
            >Proceed to Checkout â†’</router-link>

            <div v-else class="space-y-2">
              <router-link :to="{ name: 'login', query: { redirect: '/checkout' } }" class="btn-primary w-full text-center text-sm" :class="{'opacity-50 pointer-events-none cursor-not-allowed': itemCount === 0}">Sign in to Checkout</router-link>
              <router-link :to="{ name: 'register' }" class="btn-outline bg-transparent border-slate-500 text-slate-300 hover:text-white w-full text-center text-sm">Create Account</router-link>
            </div>

            <router-link :to="{ name: 'products' }" class="block text-center text-sm text-slate-400 hover:text-stone-700 transition-colors mt-4">
              ← Continue Shopping
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </CustomerLayout>
</template>

<script>
import CustomerLayout from '../layout/CustomerLayout.vue';

export default {
  name: 'CartPage',
  components: { CustomerLayout },
  computed: {
    items()          { return this.$store.getters['cart/items']; },
    itemCount()      { return this.$store.getters['cart/itemCount']; },
    subtotal()       { return this.$store.getters['cart/subtotal']; },
    isEmpty()        { return this.$store.getters['cart/isEmpty']; },
    isAuthenticated(){ return this.$store.getters['auth/isAuthenticated']; },
  },
  methods: {
    toggleSelect(index) {
      this.$store.dispatch('cart/toggleSelect', index);
    },
    updateQty(index, qty) {
      this.$store.dispatch('cart/updateQuantity', { index, quantity: qty });
    },
    removeItem(index) {
      this.$store.dispatch('cart/removeItem', index);
    },
    clearCart() {
      if (confirm('Clear your entire cart?')) {
        this.$store.dispatch('cart/clearCart');
      }
    },
  },
};
</script>
