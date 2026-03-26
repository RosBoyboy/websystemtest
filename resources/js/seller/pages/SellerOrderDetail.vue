<template>
  <SellerLayout>
    <div class="w-full px-4 sm:px-6 lg:px-8 py-10" style="max-width:100%">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <router-link :to="{ name: 'seller-orders' }" class="text-orange-400 hover:text-orange-300 text-sm font-semibold mb-2 inline-block">← Back to Orders</router-link>
          <h1 class="text-4xl font-black text-white">{{ `Order #${order.order_number}` }}</h1>
          <p class="text-slate-400 mt-1">Placed {{ formatDate(order.created_at) }}</p>
        </div>
        <span :class="['px-4 py-2 rounded-lg font-bold text-white',
          order.status === 'pending' ? 'bg-yellow-500' :
          order.status === 'picked_up' ? 'bg-blue-500' :
          order.status === 'in_transit' ? 'bg-purple-500' :
          order.status === 'out_for_delivery' ? 'bg-indigo-500' :
          'bg-green-500']">
          {{ formatStatus(order.status) }}
        </span>
      </div>

      <!-- Error -->
      <div v-if="error" class="mb-6 p-4 bg-red-900/50 border border-red-800 rounded-xl text-red-200 text-sm flex items-center gap-2">
        <span>⚠️</span>
        {{ error }}
      </div>

      <!-- Main grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left: Items + Delivery Tracker -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Items -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-5">📦 Items</h2>
            <div class="space-y-4">
              <div v-for="item in order.items" :key="item.id" class="flex items-start gap-4 pb-4 border-b border-slate-800 last:border-b-0 last:pb-0">
                <div class="w-16 h-16 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                  <img v-if="item.product_image" :src="item.product_image" :alt="item.product_name" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <p class="font-semibold text-white">{{ item.product_name }}</p>
                  <p class="text-xs text-slate-400">
                    <span v-if="item.size">{{ item.size }}</span>
                    <span v-if="item.size && item.color"> · </span>
                    <span v-if="item.color">{{ item.color }}</span>
                    <span> · Qty: {{ item.quantity }}</span>
                  </p>
                  <p class="text-orange-400 font-bold mt-2">${{ (item.unit_price * item.quantity).toFixed(2) }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Delivery Tracker -->
          <DeliveryTracker :key="`tracker-${order.id}`" :order="order" @update="refreshOrder" />
        </div>

        <!-- Right: Order Details + Customer Info -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Customer Info -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-5">👤 Customer</h2>
            <div class="space-y-3">
              <div>
                <p class="text-xs text-slate-400 font-semibold uppercase mb-1">Name</p>
                <p class="text-white font-semibold">{{ order.customer_name }}</p>
              </div>
              <div>
                <p class="text-xs text-slate-400 font-semibold uppercase mb-1">Email</p>
                <p class="text-slate-200 text-sm break-all">{{ order.customer_email }}</p>
              </div>
              <div v-if="order.customer_phone">
                <p class="text-xs text-slate-400 font-semibold uppercase mb-1">Phone</p>
                <p class="text-slate-200 text-sm">{{ order.customer_phone }}</p>
              </div>
              <router-link :to="{ name: 'seller-messages' }" class="mt-3 w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-center block">
                💬 Message Customer
              </router-link>
            </div>
          </div>

          <!-- Shipping Address -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-5">📍 Shipping Address</h2>
            <div class="space-y-2 text-sm text-slate-200">
              <p class="font-semibold">{{ order.shipping_address.name }}</p>
              <p>{{ order.shipping_address.address }}</p>
              <p>{{ order.shipping_address.city }}, {{ order.shipping_address.state }} {{ order.shipping_address.postal_code }}</p>
              <p>{{ order.shipping_address.country }}</p>
              <p class="text-slate-400">{{ order.shipping_address.phone }}</p>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-5">💵 Summary</h2>
            <div class="space-y-3">
              <div class="flex justify-between text-sm">
                <span class="text-slate-400">Subtotal</span>
                <span class="text-white font-semibold">${{ order.subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-slate-400">Shipping</span>
                <span class="text-white font-semibold">${{ order.shipping_cost.toFixed(2) }}</span>
              </div>
              <div class="border-t border-slate-800 pt-3 flex justify-between text-base font-bold">
                <span class="text-white">Total</span>
                <span class="text-orange-400">${{ order.total.toFixed(2) }}</span>
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-5">💳 Payment</h2>
            <p class="text-sm">
              <span class="text-slate-400">Method:</span>
              <span class="text-white font-semibold ml-2">{{ formatPaymentMethod(order.payment_method) }}</span>
            </p>
          </div>

          <!-- Notes -->
          <div v-if="order.notes" class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-3">📝 Customer Notes</h2>
            <p class="text-sm text-slate-200">{{ order.notes }}</p>
          </div>
        </div>
      </div>
    </div>
  </SellerLayout>
</template>

<script>
import axios from 'axios';
import SellerLayout from '../layout/SellerLayout.vue';
import DeliveryTracker from '../components/orders/DeliveryTracker.vue';

export default {
  name: 'SellerOrderDetail',
  components: { SellerLayout, DeliveryTracker },
  data() {
    return {
      order: {
        order_number: '',
        status: '',
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        customer_id: '',
        items: [],
        shipping_address: {},
        payment_method: '',
        subtotal: 0,
        shipping_cost: 0,
        total: 0,
        notes: '',
        created_at: '',
        tracking_number: ''
      },
      loading: false,
      error: null
    };
  },
  created() {
    this.fetchOrder();
  },
  methods: {
    async fetchOrder() {
      this.loading = true;
      this.error = null;
      try {
        const { data } = await axios.get(`/seller/orders/${this.$route.params.id}`);
        this.order = data;
        console.log('✓ Order fetched:', data.order_number, '| Status:', data.status);
      } catch (e) {
        this.error = 'Failed to load order. Please try again.';
        console.error('Error fetching order:', e);
      } finally {
        this.loading = false;
      }
    },

    async refreshOrder() {
      console.log('Refreshing order...');
      await this.fetchOrder();
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },

    formatStatus(status) {
      const statusMap = {
        pending: 'Ordered',
        picked_up: 'Picked Up',
        in_transit: 'In Transit',
        out_for_delivery: 'Out for Delivery',
        delivered: 'Delivered',
        cancelled: 'Cancelled'
      };
      return statusMap[status] || status;
    },

    formatPaymentMethod(method) {
      const methods = {
        cod: 'Cash on Delivery',
        bank_transfer: 'Bank Transfer',
        card: 'Credit Card'
      };
      return methods[method] || method;
    }
  }
};
</script>
