<template>
  <CustomerLayout>
    <div class="w-full px-4 sm:px-6 lg:px-8 py-10" style="max-width:100%">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <router-link :to="{ name: 'orders' }" class="text-orange-400 hover:text-orange-300 text-sm font-semibold mb-2 inline-block">← Back to Orders</router-link>
          <h1 class="text-4xl font-black text-white">{{ `Order #${order.order_number}` }}</h1>
          <p class="text-slate-400 mt-1">Placed {{ formatDate(order.created_at) }}</p>
        </div>
        <span :class="['px-4 py-2 rounded-lg font-bold text-white',
          order.status === 'pending' ? 'bg-yellow-500' :
          order.status === 'confirmed' ? 'bg-blue-500' :
          order.status === 'shipped' ? 'bg-purple-500' :
          order.status === 'out_for_delivery' ? 'bg-indigo-500' :
          order.status === 'delivered' ? 'bg-green-500' :
          'bg-red-500']">
          {{ formatStatus(order.status) }}
        </span>
      </div>

      <!-- Main grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left: Delivery Tracker + Items -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Delivery Tracking (Read-only) -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-5">🚚 Delivery Tracking</h2>

            <!-- Tracking visual -->
            <div class="mb-6 p-6 bg-slate-800/50 rounded-lg">
              <div class="flex items-center justify-between mb-8">
                <div v-for="(step, idx) in trackingSteps" :key="idx" class="flex flex-col items-center flex-1">
                  <!-- Step circle -->
                  <div :class="['w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-2 transition-all', 
                    idx < currentStepIndex
                      ? 'bg-green-500 text-white'
                      : idx === currentStepIndex
                      ? 'bg-orange-500 text-white ring-2 ring-orange-400'
                      : 'bg-slate-700 text-slate-400']">
                    {{ idx < currentStepIndex ? '✓' : idx + 1 }}
                  </div>
                  <!-- Step label -->
                  <p :class="['text-xs font-semibold text-center',
                    idx <= currentStepIndex ? 'text-white' : 'text-slate-500']">
                    {{ step.label }}
                  </p>
                  <!-- Step date -->
                  <p v-if="step.completedAt" class="text-9px text-slate-500 mt-1">
                    {{ formatDate(step.completedAt) }}
                  </p>
                </div>
              </div>

              <!-- Progress bar -->
              <div class="h-1 bg-slate-700 rounded-full overflow-hidden">
                <div :style="{ width: `${(currentStepIndex + 1) / trackingSteps.length * 100}%` }" class="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500"></div>
              </div>
            </div>

            <!-- Tracking number -->
            <div v-if="order.tracking_number" class="pt-4 border-t border-slate-800">
              <p class="text-xs text-slate-400 font-semibold uppercase mb-1">Tracking Number</p>
              <p class="text-sm font-mono text-slate-200">{{ order.tracking_number }}</p>
            </div>
          </div>

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
        </div>

        <!-- Right: Seller Info + Summary + Shipping -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Seller Info -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-5">🏪 Seller</h2>
            <div class="space-y-3">
              <div>
                <p class="text-xs text-slate-400 font-semibold uppercase mb-1">Shop Name</p>
                <p class="text-white font-semibold">{{ order.seller_name }}</p>
              </div>
              <router-link :to="{ name: 'account', query: { tab: 'messages', seller: order.seller_id } }" class="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-center block">
                💬 Message Seller
              </router-link>
            </div>
          </div>

          <!-- Shipping Address -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-5">📍 Shipping To</h2>
            <div class="space-y-2 text-sm text-slate-200">
              <p class="font-semibold">{{ order.shipping_address.name }}</p>
              <p>{{ order.shipping_address.address }}</p>
              <p>{{ order.shipping_address.city }}, {{ order.shipping_address.state }} {{ order.shipping_address.postal_code }}</p>
              <p>{{ order.shipping_address.country }}</p>
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

          <!-- Notes -->
          <div v-if="order.notes" class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-3">📝 Your Notes</h2>
            <p class="text-sm text-slate-200">{{ order.notes }}</p>
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
  name: 'CustomerOrderDetail',
  components: { CustomerLayout },
  data() {
    return {
      order: {
        order_number: '',
        status: '',
        seller_name: '',
        seller_id: '',
        items: [],
        shipping_address: {},
        subtotal: 0,
        shipping_cost: 0,
        total: 0,
        notes: '',
        created_at: '',
        tracking_number: ''
      },
      trackingSteps: [
        { status: 'pending', label: 'Ordered', icon: '📦', completedAt: null },
        { status: 'picked_up', label: 'Picked Up', icon: '🎁', completedAt: null },
        { status: 'in_transit', label: 'In Transit', icon: '🚚', completedAt: null },
        { status: 'out_for_delivery', label: 'Out for Delivery', icon: '📍', completedAt: null },
        { status: 'delivered', label: 'Delivered', icon: '✅', completedAt: null }
      ],
      loading: false
    };
  },
  computed: {
    currentStepIndex() {
      const statusOrder = ['pending', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered'];
      return Math.max(0, statusOrder.indexOf(this.order.status));
    }
  },
  created() {
    this.fetchOrder();
    // Poll for updates every 30 seconds
    this.pollingInterval = setInterval(() => {
      this.fetchOrder();
    }, 30000);
  },
  beforeDestroy() {
    if (this.pollingInterval) clearInterval(this.pollingInterval);
  },
  methods: {
    async fetchOrder() {
      try {
        const { data } = await axios.get(`/account/orders/${this.$route.params.id}`);
        this.order = data;
      } catch (e) {
        console.error('Error fetching order:', e);
      }
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
    }
  }
};
</script>
