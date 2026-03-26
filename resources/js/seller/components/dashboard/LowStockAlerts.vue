<template>
  <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-lg font-bold text-white">⚠️ Low Stock Alerts</h2>
      <router-link :to="{ name: 'seller-products' }" class="text-orange-400 hover:text-orange-300 text-sm font-semibold">Manage →</router-link>
    </div>

    <div v-if="loading" class="text-center py-8 text-slate-400">
      Loading...
    </div>

    <div v-else-if="alerts.length === 0" class="text-center py-8">
      <p class="text-green-400 font-semibold">✓ All products well stocked!</p>
    </div>

    <div v-else class="space-y-2">
      <div v-for="alert in alerts" :key="alert.id" class="flex items-center gap-3 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
        <div class="w-10 h-10 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
          <img v-if="alert.image" :src="alert.image" :alt="alert.name" class="w-full h-full object-cover" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-white truncate">{{ alert.name }}</p>
          <p class="text-xs text-red-400">Only {{ alert.stock }} left in stock</p>
        </div>
        <button @click="quickRestock(alert.id)" class="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-lg transition-colors flex-shrink-0">
          + Restock
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LowStockAlerts',
  props: {
    alerts: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['restock'],
  methods: {
    quickRestock(productId) {
      this.$emit('restock', productId);
    }
  }
};
</script>
