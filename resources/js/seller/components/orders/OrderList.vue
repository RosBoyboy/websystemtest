<template>
  <div class="space-y-4">

    <!-- Filters -->
    <div class="flex items-center gap-3 flex-wrap">
      <input
        v-model="search"
        @input="debouncedFetch"
        type="text"
        placeholder="Search by order #…"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500 w-56"
      />
      <select v-model="statusFilter" @change="fetchOrders"
        class="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-300 text-sm focus:outline-none focus:border-orange-500">
        <option value="">All Statuses</option>
        <option v-for="s in orderStatuses" :key="s" :value="s" class="capitalize">{{ s }}</option>
      </select>
    </div>

    <!-- Table -->
    <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div v-if="loading" class="p-10 text-center text-slate-500">Loading…</div>
      <div v-else-if="!orders.length" class="p-10 text-center text-slate-500">No orders found.</div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="border-b border-slate-800">
            <tr class="text-slate-400">
              <th class="text-left px-5 py-4 font-medium">Order #</th>
              <th class="text-left px-4 py-4 font-medium">Customer</th>
              <th class="text-left px-4 py-4 font-medium">Items</th>
              <th class="text-center px-4 py-4 font-medium">Status</th>
              <th class="text-right px-4 py-4 font-medium">Date</th>
              <th class="px-5 py-4"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr v-for="order in orders" :key="order.id" class="hover:bg-slate-800/50 transition-colors">
              <td class="px-5 py-4 text-orange-400 font-medium">{{ order.order_number }}</td>
              <td class="px-4 py-4">
                <p class="text-white">{{ order.user ? order.user.name : '' }}</p>
                <p class="text-slate-500 text-xs">{{ order.user ? order.user.email : '' }}</p>
              </td>
              <td class="px-4 py-4 text-slate-400">{{ order.items ? order.items.length : 0 }} item(s)</td>
              <td class="px-4 py-4 text-center">
                <span :class="statusClass(order.status)" class="px-2 py-0.5 rounded-full text-xs font-medium">
                  {{ order.status }}
                </span>
              </td>
              <td class="px-4 py-4 text-right text-slate-500 text-xs">{{ formatDate(order.created_at) }}</td>
              <td class="px-5 py-4">
                <router-link :to="`/orders/${order.id}`"
                  class="text-slate-400 hover:text-orange-400 transition-colors text-xs font-medium">
                  View →
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div v-if="meta && meta.last_page > 1"
           class="flex items-center justify-between px-5 py-4 border-t border-slate-800">
        <p class="text-slate-500 text-sm">
          Showing {{ meta.from }}–{{ meta.to }} of {{ meta.total }}
        </p>
        <div class="flex gap-1">
          <button v-for="page in meta.last_page" :key="page"
            @click="goToPage(page)"
            :class="['px-3 py-1 rounded-lg text-sm transition-colors',
              page === meta.current_page ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white']">
            {{ page }}
          </button>
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
      orders:       [],
      meta:         null,
      loading:      false,
      search:       '',
      statusFilter: '',
      page:         1,
      debounceTimer: null,
      orderStatuses: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'completed', 'cancelled'],
    };
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      this.loading = true;
      try {
        const params = { page: this.page };
        if (this.search)       params.search = this.search;
        if (this.statusFilter) params.status = this.statusFilter;
        const { data } = await this.$http.get('/seller/orders', { params });
        this.orders = data.data;
        this.meta   = data.meta;
      } catch (e) { console.error(e); }
      finally { this.loading = false; }
    },
    debouncedFetch() {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => { this.page = 1; this.fetchOrders(); }, 350);
    },
    goToPage(page) { this.page = page; this.fetchOrders(); },
    formatDate(d) {
      return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
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
