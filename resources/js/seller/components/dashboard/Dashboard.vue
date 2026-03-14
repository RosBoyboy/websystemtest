<template>
  <div class="space-y-6">

    <!-- Stats cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <div v-for="card in statCards" :key="card.label"
           class="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <p class="text-slate-400 text-sm mb-1">{{ card.label }}</p>
        <p class="text-2xl font-bold text-white">{{ card.value }}</p>
        <p v-if="card.sub" class="text-xs text-slate-500 mt-1">{{ card.sub }}</p>
      </div>
    </div>

    <!-- Earnings chart + low stock alert -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">

      <!-- Earnings chart -->
      <div class="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-white font-semibold">Earnings Overview</h3>
          <div class="flex gap-1">
            <button v-for="p in periods" :key="p"
              @click="selectPeriod(p)"
              :class="['px-2.5 py-1 text-xs rounded-lg transition-colors font-medium',
                period === p ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white']"
            >{{ p }}</button>
          </div>
        </div>
        <canvas ref="chart" height="100"></canvas>
      </div>

      <!-- Low Stock Alerts -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <h3 class="text-white font-semibold mb-4">
          Low Stock Alerts
          <span v-if="stats" class="ml-2 text-xs bg-red-900/40 text-red-400 px-1.5 py-0.5 rounded-full">
            {{ stats.low_stock_count }}
          </span>
        </h3>
        <div v-if="stats && stats.low_stock_count === 0" class="text-slate-500 text-sm">
          All products are well-stocked.
        </div>
        <div v-else class="text-slate-400 text-sm">
          <router-link to="/inventory" class="text-orange-500 hover:text-orange-400 transition-colors">
            View inventory →
          </router-link>
        </div>
      </div>
    </div>

    <!-- Recent orders -->
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-white font-semibold">Recent Orders</h3>
        <router-link to="/orders" class="text-orange-500 text-sm hover:text-orange-400 transition-colors">
          View all →
        </router-link>
      </div>

      <div v-if="!recentOrders.length" class="text-slate-500 text-sm">No orders yet.</div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="text-slate-400 border-b border-slate-800">
              <th class="text-left pb-3 font-medium">Order #</th>
              <th class="text-left pb-3 font-medium">Customer</th>
              <th class="text-left pb-3 font-medium">Status</th>
              <th class="text-right pb-3 font-medium">Total</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr v-for="order in recentOrders" :key="order.id" class="hover:bg-slate-800/50 transition-colors">
              <td class="py-3 text-orange-400 font-medium">
                <router-link :to="`/orders/${order.id}`">{{ order.order_number }}</router-link>
              </td>
              <td class="py-3 text-slate-300">{{ order.user ? order.user.name : '' }}</td>
              <td class="py-3">
                <span :class="statusClass(order.status)" class="px-2 py-0.5 rounded-full text-xs font-medium">
                  {{ order.status }}
                </span>
              </td>
              <td class="py-3 text-right text-slate-300">{{ formatCurrency(order.total) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'SellerDashboard',
  data() {
    return {
      period: '30d',
      periods: ['7d', '30d', '90d', '1y'],
      chartInstance: null,
    };
  },
  computed: {
    stats()        { return this.$store.state.dashboard.stats; },
    chartData()    { return this.$store.state.dashboard.chart; },
    recentOrders() { return this.$store.state.dashboard.recentOrders; },
    statCards() {
      if (!this.stats) return [];
      return [
        { label: 'Total Earnings',    value: this.formatCurrency(this.stats.earnings_total),      sub: 'all time' },
        { label: 'This Month',        value: this.formatCurrency(this.stats.earnings_this_month), sub: 'paid orders' },
        { label: 'Active Products',   value: this.stats.active_products,  sub: `${this.stats.total_products} total` },
        { label: 'Pending Fulfillment', value: this.stats.pending_fulfillment, sub: 'orders awaiting action' },
      ];
    },
  },
  watch: {
    chartData(data) {
      this.renderChart(data);
    },
  },
  async created() {
    await Promise.all([
      this.$store.dispatch('dashboard/fetchStats'),
      this.$store.dispatch('dashboard/fetchChart', this.period),
      this.$store.dispatch('dashboard/fetchRecentOrders'),
    ]);
  },
  mounted() {
    if (this.chartData.length) this.renderChart(this.chartData);
  },
  beforeDestroy() {
    if (this.chartInstance) this.chartInstance.destroy();
  },
  methods: {
    async selectPeriod(p) {
      this.period = p;
      await this.$store.dispatch('dashboard/fetchChart', p);
    },
    renderChart(data) {
      if (this.chartInstance) this.chartInstance.destroy();
      const ctx = this.$refs.chart;
      if (!ctx) return;
      this.chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(d => d.date),
          datasets: [{
            label: 'Earnings ($)',
            data:  data.map(d => parseFloat(d.earnings)),
            borderColor: '#f97316',
            backgroundColor: 'rgba(249,115,22,0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 3,
          }],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: '#64748b' }, grid: { color: '#1e293b' } },
            y: { ticks: { color: '#64748b' }, grid: { color: '#1e293b' } },
          },
        },
      });
    },
    formatCurrency(v) {
      return '$' + parseFloat(v || 0).toFixed(2);
    },
    statusClass(status) {
      const map = {
        pending:    'bg-yellow-900/40 text-yellow-400',
        confirmed:  'bg-blue-900/40 text-blue-400',
        processing: 'bg-purple-900/40 text-purple-400',
        shipped:    'bg-indigo-900/40 text-indigo-400',
        delivered:  'bg-green-900/40 text-green-400',
        completed:  'bg-green-900/60 text-green-300',
        cancelled:  'bg-red-900/40 text-red-400',
      };
      return map[status] || 'bg-slate-800 text-slate-400';
    },
  },
};
</script>
