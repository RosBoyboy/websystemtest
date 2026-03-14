<template>
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <router-link to="/orders" class="text-slate-400 hover:text-white">← Orders</router-link>
      <h1 class="text-2xl font-bold text-white">Order Detail</h1>
    </div>

    <div v-if="loading" class="text-slate-500">Loading…</div>

    <div v-else-if="order" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Order info -->
      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-3 text-sm">
        <div class="flex justify-between items-start">
          <div>
            <p class="font-mono text-xs text-slate-400">{{ order.order_number }}</p>
            <span class="px-2 py-0.5 rounded text-xs mt-1 inline-block" :class="statusClass(order.status)">{{ order.status }}</span>
          </div>
          <select v-model="newStatus" @change="updateStatus"
            class="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-orange-500">
            <option v-for="s in statuses" :key="s" :value="s">{{ s }}</option>
          </select>
        </div>
        <div class="space-y-1 pt-2">
          <div class="flex justify-between"><span class="text-slate-500">Customer</span><span class="text-white">{{ order.user ? order.user.name : '—' }}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Subtotal</span><span class="text-white">${{ parseFloat(order.subtotal).toFixed(2) }}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Shipping</span><span class="text-white">${{ parseFloat(order.shipping_fee).toFixed(2) }}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Discount</span><span class="text-white">-${{ parseFloat(order.discount).toFixed(2) }}</span></div>
          <div class="flex justify-between font-semibold border-t border-slate-800 pt-1 mt-1"><span class="text-slate-300">Total</span><span class="text-white">${{ parseFloat(order.total).toFixed(2) }}</span></div>
        </div>
      </div>

      <!-- Items -->
      <div class="lg:col-span-2 bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h3 class="text-white font-semibold mb-4">Order Items</h3>
        <div class="space-y-3" v-if="order.items && order.items.length">
          <div v-for="item in order.items" :key="item.id"
            class="flex items-center gap-4 p-3 bg-slate-800 rounded-lg text-sm">
            <div class="flex-1">
              <p class="text-white font-medium">{{ item.product ? item.product.name : '—' }}</p>
              <p class="text-slate-400 text-xs">Size: {{ item.size || '—' }} | Color: {{ item.color || '—' }}</p>
            </div>
            <div class="text-right">
              <p class="text-white">x{{ item.quantity }}</p>
              <p class="text-slate-400 text-xs">${{ parseFloat(item.total_price).toFixed(2) }}</p>
            </div>
          </div>
        </div>
        <p v-else class="text-slate-600 text-sm">No items.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail',
  data() {
    return { order: null, loading: false, newStatus: '', statuses: ['pending','confirmed','processing','shipped','delivered','cancelled','refunded'] };
  },
  methods: {
    async fetchOrder() {
      this.loading = true;
      try {
        const { data } = await this.$http.get(`/admin/orders/${this.$route.params.id}`);
        this.order     = data;
        this.newStatus = data.status;
      } finally { this.loading = false; }
    },
    async updateStatus() {
      await this.$http.put(`/admin/orders/${this.order.id}/status`, { status: this.newStatus });
      this.order.status = this.newStatus;
    },
    statusClass(status) {
      const map = { pending: 'bg-yellow-900/50 text-yellow-400', confirmed: 'bg-blue-900/50 text-blue-400', processing: 'bg-indigo-900/50 text-indigo-400', shipped: 'bg-cyan-900/50 text-cyan-400', delivered: 'bg-green-900/50 text-green-400', cancelled: 'bg-red-900/50 text-red-400', refunded: 'bg-slate-700/50 text-slate-400' };
      return map[status] || '';
    },
  },
  created() { this.fetchOrder(); },
};
</script>
