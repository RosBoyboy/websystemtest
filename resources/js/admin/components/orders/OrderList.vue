<template>
  <div class="space-y-4">
    <h1 class="text-2xl font-bold text-white">Orders</h1>

    <!-- Filters -->
    <div class="flex flex-wrap gap-3 bg-slate-900 rounded-xl border border-slate-800 p-4">
      <input v-model="search" @input="debouncedFetch" type="text" placeholder="Search order number…"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 w-64"/>
      <select v-model="filterStatus" @change="fetchOrders"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500">
        <option value="">All Status</option>
        <option v-for="s in statuses" :key="s" :value="s">{{ s.charAt(0).toUpperCase() + s.slice(1) }}</option>
      </select>
    </div>

    <!-- Table -->
    <div class="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <div v-if="loading" class="p-8 text-center text-slate-500">Loading…</div>
      <table v-else class="w-full text-sm text-left text-slate-400">
        <thead class="text-xs text-slate-500 uppercase border-b border-slate-800">
          <tr>
            <th class="py-3 px-4">Order #</th>
            <th class="py-3 px-4">Customer</th>
            <th class="py-3 px-4">Total</th>
            <th class="py-3 px-4">Payment</th>
            <th class="py-3 px-4">Status</th>
            <th class="py-3 px-4">Date</th>
            <th class="py-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id"
            class="border-b border-slate-800/60 hover:bg-slate-800/40 transition-colors">
            <td class="py-3 px-4 font-mono text-xs text-white">{{ order.order_number }}</td>
            <td class="py-3 px-4">{{ order.user ? order.user.name : '—' }}</td>
            <td class="py-3 px-4 text-white">${{ parseFloat(order.total).toFixed(2) }}</td>
            <td class="py-3 px-4">
              <span class="px-2 py-0.5 rounded text-xs"
                :class="order.payment_status === 'paid' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'">
                {{ order.payment_status }}
              </span>
            </td>
            <td class="py-3 px-4">
              <span class="px-2 py-0.5 rounded text-xs" :class="statusClass(order.status)">{{ order.status }}</span>
            </td>
            <td class="py-3 px-4 text-xs">{{ formatDate(order.created_at) }}</td>
            <td class="py-3 px-4">
              <router-link :to="`/orders/${order.id}`" class="text-orange-500 hover:text-orange-400 text-xs">View</router-link>
            </td>
          </tr>
          <tr v-if="orders.length === 0">
            <td colspan="7" class="py-8 text-center text-slate-600">No orders found</td>
          </tr>
        </tbody>
      </table>
      <div class="flex items-center justify-between px-4 py-3 border-t border-slate-800">
        <span class="text-xs text-slate-500">Page {{ meta.current_page }} of {{ meta.last_page }}</span>
        <div class="flex gap-2">
          <button @click="changePage(meta.current_page - 1)" :disabled="meta.current_page <= 1"
            class="px-3 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700 disabled:opacity-40">Prev</button>
          <button @click="changePage(meta.current_page + 1)" :disabled="meta.current_page >= meta.last_page"
            class="px-3 py-1 text-xs bg-slate-800 rounded hover:bg-slate-700 disabled:opacity-40">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data() {
    return {
      orders: [], meta: { current_page: 1, last_page: 1 },
      loading: false, search: '', filterStatus: '', page: 1, _debounce: null,
      statuses: ['pending','confirmed','processing','shipped','delivered','cancelled','refunded'],
    };
  },
  methods: {
    async fetchOrders() {
      this.loading = true;
      try {
        const { data } = await this.$http.get('/admin/orders', {
          params: { search: this.search, status: this.filterStatus, page: this.page },
        });
        this.orders = data.data;
        this.meta = { current_page: data.current_page, last_page: data.last_page };
      } finally { this.loading = false; }
    },
    debouncedFetch() { clearTimeout(this._debounce); this._debounce = setTimeout(this.fetchOrders, 300); },
    changePage(p) { this.page = p; this.fetchOrders(); },
    statusClass(status) {
      const map = { pending: 'bg-yellow-900/50 text-yellow-400', confirmed: 'bg-blue-900/50 text-blue-400', processing: 'bg-indigo-900/50 text-indigo-400', shipped: 'bg-cyan-900/50 text-cyan-400', delivered: 'bg-green-900/50 text-green-400', cancelled: 'bg-red-900/50 text-red-400', refunded: 'bg-slate-700/50 text-slate-400' };
      return map[status] || 'bg-slate-700/50 text-slate-400';
    },
    formatDate(d) { return d ? new Date(d).toLocaleDateString() : '—'; },
  },
  created() { this.fetchOrders(); },
};
</script>
