<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <!-- Total Revenue -->
    <div class="bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-500/30 rounded-xl p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-slate-400 text-sm font-medium">💰 Total Revenue</p>
          <p class="text-3xl font-black text-green-400 mt-2">${{ totalRevenue.toFixed(2) }}</p>
          <p class="text-xs text-slate-500 mt-1">+{{ revenueGrowth }}% this month</p>
        </div>
        <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-xl">📊</div>
      </div>
    </div>

    <!-- Total Orders -->
    <div class="bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-500/30 rounded-xl p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-slate-400 text-sm font-medium">📦 Total Orders</p>
          <p class="text-3xl font-black text-blue-400 mt-2">{{ totalOrders }}</p>
          <p class="text-xs text-slate-500 mt-1">{{ pendingOrders }} pending approval</p>
        </div>
        <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl">📋</div>
      </div>
    </div>

    <!-- Active Sellers -->
    <div class="bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/30 rounded-xl p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-slate-400 text-sm font-medium">🏪 Active Sellers</p>
          <p class="text-3xl font-black text-purple-400 mt-2">{{ activeSellers }}</p>
          <p class="text-xs text-slate-500 mt-1">
            <span v-if="pendingSellersCount > 0" class="text-yellow-400 font-semibold">{{ pendingSellersCount }} awaiting approval</span>
            <span v-else class="text-green-400">All approved</span>
          </p>
        </div>
        <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-xl">👥</div>
      </div>
    </div>

    <!-- Customers -->
    <div class="bg-gradient-to-br from-orange-900/30 to-orange-900/10 border border-orange-500/30 rounded-xl p-6">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-slate-400 text-sm font-medium">👨‍💼 Total Customers</p>
          <p class="text-3xl font-black text-orange-400 mt-2">{{ totalCustomers }}</p>
          <p class="text-xs text-slate-500 mt-1">{{ newCustomers }} new this month</p>
        </div>
        <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-xl">📈</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnalyticsCards',
  props: {
    stats: {
      type: Object,
      default: () => ({
        totalRevenue: 0,
        revenueGrowth: 0,
        totalOrders: 0,
        pendingOrders: 0,
        activeSellers: 0,
        pendingSellersCount: 0,
        totalCustomers: 0,
        newCustomers: 0
      })
    }
  },
  computed: {
    totalRevenue() { return this.stats.totalRevenue || 0; },
    revenueGrowth() { return this.stats.revenueGrowth || 0; },
    totalOrders() { return this.stats.totalOrders || 0; },
    pendingOrders() { return this.stats.pendingOrders || 0; },
    activeSellers() { return this.stats.activeSellers || 0; },
    pendingSellersCount() { return this.stats.pendingSellersCount || 0; },
    totalCustomers() { return this.stats.totalCustomers || 0; },
    newCustomers() { return this.stats.newCustomers || 0; }
  }
};
</script>
