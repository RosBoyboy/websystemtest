<template>
  <div>
    <canvas ref="chart" height="300"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'SalesChart',
  props: {
    chartData: { type: Array, default: () => [] },
  },
  data() {
    return { chart: null };
  },
  watch: {
    chartData(newData) {
      this.updateChart(newData);
    },
  },
  methods: {
    buildChart(data) {
      const ctx = this.$refs.chart.getContext('2d');
      const labels  = data.map(d => d.date);
      const revenue = data.map(d => parseFloat(d.total_revenue));

      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, 'rgba(249, 115, 22, 0.3)');
      gradient.addColorStop(1, 'rgba(249, 115, 22, 0)');

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Revenue ($)',
            data: revenue,
            borderColor: '#f97316',
            backgroundColor: gradient,
            borderWidth: 2,
            pointBackgroundColor: '#f97316',
            pointRadius: 3,
            tension: 0.4,
            fill: true,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#1e293b',
              titleColor: '#94a3b8',
              bodyColor: '#f8fafc',
              borderColor: '#334155',
              borderWidth: 1,
              callbacks: {
                label: ctx => ' $' + ctx.parsed.y.toFixed(2),
              },
            },
          },
          scales: {
            x: {
              grid:  { color: '#1e293b' },
              ticks: { color: '#64748b', maxTicksLimit: 10 },
            },
            y: {
              grid:  { color: '#1e293b' },
              ticks: {
                color: '#64748b',
                callback: v => '$' + v.toFixed(0),
              },
            },
          },
        },
      });
    },
    updateChart(data) {
      if (!this.chart) {
        this.buildChart(data);
        return;
      }
      this.chart.data.labels   = data.map(d => d.date);
      this.chart.data.datasets[0].data = data.map(d => parseFloat(d.total_revenue));
      this.chart.update();
    },
  },
  mounted() {
    if (this.chartData.length) this.buildChart(this.chartData);
  },
  beforeDestroy() {
    if (this.chart) this.chart.destroy();
  },
};
</script>
