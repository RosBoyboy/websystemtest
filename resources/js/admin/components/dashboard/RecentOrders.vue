<template>
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left text-slate-400">
      <thead class="text-xs text-slate-500 uppercase border-b border-slate-800">
        <tr>
          <th class="py-3 px-4">Order #</th>
          <th class="py-3 px-4">Customer</th>
          <th class="py-3 px-4">Total</th>
          <th class="py-3 px-4">Status</th>
          <th class="py-3 px-4">Date</th>
          <th class="py-3 px-4"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="order in orders"
          :key="order.id"
          class="border-b border-slate-800/60 hover:bg-slate-800/40 transition-colors"
        >
          <td class="py-3 px-4 font-mono text-white text-xs">{{ order.order_number }}</td>
          <td class="py-3 px-4">{{ order.user ? order.user.name : '—' }}</td>
          <td class="py-3 px-4 text-white">${{ parseFloat(order.total).toFixed(2) }}</td>
          <td class="py-3 px-4">
            <span class="px-2 py-1 rounded-full text-xs font-medium" :class="statusClass(order.status)">
              {{ order.status }}
            </span>
          </td>
          <td class="py-3 px-4 text-xs">{{ formatDate(order.created_at) }}</td>
          <td class="py-3 px-4">
            <router-link :to="`/orders/${order.id}`" class="text-orange-500 hover:text-orange-400 text-xs">
              View →
            </router-link>
          </td>
        </tr>
        <tr v-if="!orders || orders.length === 0">
          <td colspan="6" class="py-8 text-center text-slate-600">No recent orders</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RecentOrders',
  props: {
    orders: { type: Array, default: () => [] },
  },
  methods: {
    statusClass(status) {
      const map = {
        pending:    'bg-yellow-900/50 text-yellow-400',
        confirmed:  'bg-blue-900/50 text-blue-400',
        processing: 'bg-indigo-900/50 text-indigo-400',
        shipped:    'bg-cyan-900/50 text-cyan-400',
        delivered:  'bg-green-900/50 text-green-400',
        cancelled:  'bg-red-900/50 text-red-400',
        refunded:   'bg-slate-700/50 text-slate-400',
      };
      return map[status] || 'bg-slate-700/50 text-slate-400';
    },
    formatDate(d) {
      if (!d) return '—';
      return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    },
  },
};
</script>
