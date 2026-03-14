<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <div
      v-for="card in cards"
      :key="card.label"
      class="bg-slate-900 rounded-xl border p-5 flex flex-col gap-2"
      :class="card.borderClass"
    >
      <span class="text-slate-400 text-xs font-medium uppercase tracking-wide">{{ card.label }}</span>
      <div v-if="loading" class="h-8 w-24 bg-slate-800 animate-pulse rounded"></div>
      <span v-else class="text-2xl font-bold text-white">{{ card.value }}</span>
      <span class="text-slate-500 text-xs">{{ card.sub }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsCards',
  props: {
    stats:   { type: Object, default: null },
    loading: { type: Boolean, default: false },
  },
  computed: {
    cards() {
      const s = this.stats || {};
      return [
        {
          label: 'Total Users',
          value: (s.total_users || 0).toLocaleString(),
          sub: 'Registered customers',
          borderClass: 'border-blue-500/30',
        },
        {
          label: 'Total Orders',
          value: (s.total_orders || 0).toLocaleString(),
          sub: 'All time orders',
          borderClass: 'border-orange-500/30',
        },
        {
          label: 'Revenue (Month)',
          value: '$' + parseFloat(s.revenue_this_month || 0).toFixed(2),
          sub: 'This calendar month',
          borderClass: 'border-green-500/30',
        },
        {
          label: 'Total Revenue',
          value: '$' + parseFloat(s.revenue_total || 0).toFixed(2),
          sub: 'All time revenue',
          borderClass: 'border-purple-500/30',
        },
        {
          label: 'Sellers',
          value: (s.total_sellers || 0).toLocaleString(),
          sub: 'Active seller stores',
          borderClass: 'border-yellow-500/30',
        },
        {
          label: 'Products',
          value: (s.total_products || 0).toLocaleString(),
          sub: 'Listed products',
          borderClass: 'border-pink-500/30',
        },
        {
          label: 'Revenue Today',
          value: '$' + parseFloat(s.revenue_today || 0).toFixed(2),
          sub: 'Today\'s earnings',
          borderClass: 'border-teal-500/30',
        },
        {
          label: 'Low Stock Alerts',
          value: (s.low_stock_alerts || 0).toLocaleString(),
          sub: 'Products need restocking',
          borderClass: 'border-red-500/30',
        },
      ];
    },
  },
};
</script>
