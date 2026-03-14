<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold text-white">Dashboard</h1>

    <!-- Stats Cards -->
    <StatsCards :stats="stats" :loading="loading" />

    <!-- Sales Chart + Period Selector -->
    <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold text-white">Sales Overview</h2>
        <div class="flex gap-2">
          <button
            v-for="p in periods"
            :key="p.value"
            @click="changePeriod(p.value)"
            class="px-3 py-1 text-xs rounded-lg border transition-colors"
            :class="period === p.value
              ? 'bg-orange-500 border-orange-500 text-white'
              : 'border-slate-700 text-slate-400 hover:border-slate-500'"
          >{{ p.label }}</button>
        </div>
      </div>
      <SalesChart :chart-data="salesChart" />
    </div>

    <!-- Recent Orders -->
    <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">
      <h2 class="text-lg font-semibold text-white mb-4">Recent Orders</h2>
      <RecentOrders :orders="recentOrders" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import StatsCards   from './StatsCards.vue';
import SalesChart   from './SalesChart.vue';
import RecentOrders from './RecentOrders.vue';

export default {
  name: 'Dashboard',
  components: { StatsCards, SalesChart, RecentOrders },
  data() {
    return {
      period:  '30d',
      periods: [
        { label: '7D',  value: '7d'  },
        { label: '30D', value: '30d' },
        { label: '90D', value: '90d' },
        { label: '1Y',  value: '1y'  },
      ],
    };
  },
  computed: {
    ...mapState('dashboard', ['stats', 'salesChart', 'recentOrders', 'loading']),
  },
  methods: {
    changePeriod(p) {
      this.period = p;
      this.$store.dispatch('dashboard/fetchSalesChart', p);
    },
  },
  created() {
    this.$store.dispatch('dashboard/fetchStats');
    this.$store.dispatch('dashboard/fetchSalesChart', this.period);
    this.$store.dispatch('dashboard/fetchRecentOrders');
  },
};
</script>
