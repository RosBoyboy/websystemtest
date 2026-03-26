<template>
  <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-lg font-bold text-white">📋 Recent Orders</h2>
      <router-link :to="{ name: 'seller-orders' }" class="text-orange-400 hover:text-orange-300 text-sm font-semibold">View All →</router-link>
    </div>

    <div v-if="loading" class="text-center py-8 text-slate-400">
      Loading orders...
    </div>

    <div v-else-if="orders.length === 0" class="text-center py-8 text-slate-400">
      No orders yet
    </div>

    <div v-else class="space-y-3">
      <div v-for="order in orders" :key="order.id" class="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors border-l-4" :style="{ borderLeftColor: statusColor(order.status) }">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-1">
            <span class="text-white font-semibold">Order #{{ order.order_number }}</span>
            <span :class="['text-xs px-2 py-1 rounded-full font-semibold',
              order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
              order.status === 'confirmed' ? 'bg-blue-500/20 text-blue-400' :
              order.status === 'shipped' ? 'bg-purple-500/20 text-purple-400' :
              'bg-green-500/20 text-green-400']">
              {{ formatStatus(order.status) }}
            </span>
          </div>
          <p class="text-xs text-slate-400">
            {{ order.customer_name }} · {{ order.items_count }} item{{ order.items_count !== 1 ? 's' : '' }} · {{ formatDate(order.created_at) }}
          </p>
        </div>
        <p class="text-orange-400 font-bold text-lg ml-4">${{ order.total.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentOrdersList',
  props: {
    orders: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatStatus(status) {
      return status.charAt(0).toUpperCase() + status.slice(1);
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    },
    statusColor(status) {
      const colors = {
        pending: '#EAB308',
        confirmed: '#3B82F6',
        shipped: '#A855F7',
        delivered: '#10B981'
      };
      return colors[status] || '#6B7280';
    }
  }
};
</script>
