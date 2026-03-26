<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <!-- Sales Widget -->
    <div class="bg-gradient-to-br from-orange-900/30 to-orange-900/10 border border-orange-500/30 rounded-xl p-6 hover:border-orange-500/60 transition-all">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-slate-400 text-sm font-medium">💰 Total Sales</p>
          <p class="text-3xl font-black text-orange-400 mt-2">${{ totalSales.toFixed(2) }}</p>
          <p class="text-xs text-slate-500 mt-1">{{ orderCount }} orders</p>
        </div>
        <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-xl">📊</div>
      </div>
    </div>

    <!-- Orders Widget -->
    <div class="bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/60 transition-all">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-slate-400 text-sm font-medium">📦 Pending Orders</p>
          <p class="text-3xl font-black text-blue-400 mt-2">{{ pendingOrders }}</p>
          <p class="text-xs text-slate-500 mt-1">Need attention</p>
        </div>
        <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl">📋</div>
      </div>
    </div>

    <!-- Products Widget -->
    <div class="bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-500/30 rounded-xl p-6 hover:border-green-500/60 transition-all">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-slate-400 text-sm font-medium">🏪 Products</p>
          <p class="text-3xl font-black text-green-400 mt-2">{{ productCount }}</p>
          <p class="text-xs text-slate-500 mt-1">
            <span v-if="lowStockCount > 0" class="text-red-400 font-semibold">{{ lowStockCount }} low stock</span>
            <span v-else class="text-green-400">All stocked</span>
          </p>
        </div>
        <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-xl">📦</div>
      </div>
    </div>

    <!-- Messages Widget -->
    <div class="bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-all">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-slate-400 text-sm font-medium">💬 Messages</p>
          <p class="text-3xl font-black text-purple-400 mt-2">{{ unreadMessages }}</p>
          <p class="text-xs text-slate-500 mt-1">Unread conversations</p>
        </div>
        <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-xl">💬</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardWidgets',
  props: {
    stats: {
      type: Object,
      default: () => ({
        totalSales: 0,
        orderCount: 0,
        pendingOrders: 0,
        productCount: 0,
        lowStockCount: 0,
        unreadMessages: 0
      })
    }
  },
  computed: {
    totalSales() { return this.stats.totalSales || 0; },
    orderCount() { return this.stats.orderCount || 0; },
    pendingOrders() { return this.stats.pendingOrders || 0; },
    productCount() { return this.stats.productCount || 0; },
    lowStockCount() { return this.stats.lowStockCount || 0; },
    unreadMessages() { return this.stats.unreadMessages || 0; }
  }
};
</script>
