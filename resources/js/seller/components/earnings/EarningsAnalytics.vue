<template>
  <div class="space-y-6">

    <!-- Summary cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
      <div v-for="card in summaryCards" :key="card.label"
           class="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <p class="text-slate-400 text-sm mb-1">{{ card.label }}</p>
        <p class="text-2xl font-bold" :class="card.color || 'text-white'">{{ card.value }}</p>
      </div>
    </div>

    <!-- Earnings chart -->
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-white font-semibold">Earnings Over Time</h3>
        <div class="flex gap-1">
          <button v-for="p in periods" :key="p" @click="selectPeriod(p)"
            :class="['px-2.5 py-1 text-xs rounded-lg transition-colors font-medium',
              period === p ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white']">
            {{ p }}
          </button>
        </div>
      </div>
      <canvas ref="chart" height="90"></canvas>
    </div>

    <!-- Top products by earnings -->
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <h3 class="text-white font-semibold mb-4">Earnings by Product</h3>

      <div v-if="byProductLoading" class="text-slate-500 text-sm">Loading…</div>
      <div v-else-if="!byProduct.length" class="text-slate-500 text-sm">No data yet.</div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="border-b border-slate-800">
            <tr class="text-slate-400">
              <th class="text-left pb-3 font-medium">Product</th>
              <th class="text-right pb-3 font-medium">Units Sold</th>
              <th class="text-right pb-3 font-medium">Earnings</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr v-for="row in byProduct" :key="row.product_id" class="hover:bg-slate-800/50 transition-colors">
              <td class="py-3">
                <div class="flex items-center gap-3">
                  <img v-if="row.product && row.product.images && row.product.images[0]"
                       :src="row.product.images[0]"
                       class="w-9 h-9 rounded-lg object-cover bg-slate-800" alt="" />
                  <div v-else class="w-9 h-9 rounded-lg bg-slate-800"></div>
                  <div>
                    <p class="text-white font-medium">{{ row.product ? row.product.name : '' }}</p>
                    <p class="text-slate-500 text-xs">SKU: {{ row.product && row.product.sku ? row.product.sku : '—' }}</p>
                  </div>
                </div>
              </td>
              <td class="py-3 text-right text-slate-300">{{ row.units_sold }}</td>
              <td class="py-3 text-right text-orange-400 font-semibold">${{ parseFloat(row.earnings).toFixed(2) }}</td>
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
  name: 'EarningsAnalytics',
  data() {
    return {
      summary:         null,
      chartData:       [],
      byProduct:       [],
      period:          '30d',
      periods:         ['7d', '30d', '90d', '1y'],
      chartInstance:   null,
      byProductLoading: false,
    };
  },
  computed: {
    summaryCards() {
      if (!this.summary) return [];
      return [
        { label: 'All-Time Earnings', value: '$' + (this.summary.total?.toFixed(2) || '0.00'), color: 'text-orange-400' },
        { label: 'This Month',  value: '$' + (this.summary.this_month?.toFixed(2) || '0.00') },
        { label: 'Last Month',  value: '$' + (this.summary.last_month?.toFixed(2) || '0.00') },
        { label: 'This Week',   value: '$' + (this.summary.this_week?.toFixed(2) || '0.00') },
        { label: 'Units Sold',  value: this.summary.units_sold || 0 },
      ];
    },
  },
  watch: {
    chartData(data) { this.renderChart(data); },
  },
  async created() {
    await Promise.all([
      this.fetchSummary(),
      this.fetchChart(),
      this.fetchByProduct(),
    ]);
  },
  mounted() {
    if (this.chartData.length) this.renderChart(this.chartData);
  },
  beforeDestroy() {
    if (this.chartInstance) this.chartInstance.destroy();
  },
  methods: {
    async fetchSummary() {
      const { data } = await this.$http.get('/seller/earnings/summary');
      this.summary = data;
    },
    async fetchChart() {
      const { data } = await this.$http.get('/seller/earnings/chart', { params: { period: this.period } });
      this.chartData = data;
    },
    async fetchByProduct() {
      this.byProductLoading = true;
      try {
        const { data } = await this.$http.get('/seller/earnings/by-product');
        this.byProduct = data.data || data;
      } finally {
        this.byProductLoading = false;
      }
    },
    async selectPeriod(p) {
      this.period = p;
      await this.fetchChart();
    },
    renderChart(data) {
      if (this.chartInstance) this.chartInstance.destroy();
      const ctx = this.$refs.chart;
      if (!ctx) return;
      this.chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(d => d.date),
          datasets: [
            {
              label: 'Earnings ($)',
              data: data.map(d => parseFloat(d.earnings)),
              backgroundColor: 'rgba(249,115,22,0.7)',
              borderColor:     '#f97316',
              borderWidth: 1,
              yAxisID: 'y',
            },
            {
              label: 'Units Sold',
              data: data.map(d => d.units),
              type: 'line',
              borderColor: '#818cf8',
              backgroundColor: 'rgba(129,140,248,0.1)',
              fill: false,
              tension: 0.4,
              yAxisID: 'y1',
              pointRadius: 2,
            },
          ],
        },
        options: {
          responsive: true,
          interaction: { mode: 'index' },
          plugins: {
            legend: { labels: { color: '#94a3b8' } },
          },
          scales: {
            x:  { ticks: { color: '#64748b' }, grid: { color: '#1e293b' } },
            y:  { ticks: { color: '#64748b' }, grid: { color: '#1e293b' }, position: 'left' },
            y1: { ticks: { color: '#6366f1' }, grid: { display: false },    position: 'right' },
          },
        },
      });
    },
  },
};
</script>
