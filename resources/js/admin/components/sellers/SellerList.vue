<template>
  <div class="space-y-4">
    <h1 class="text-2xl font-bold text-white">Sellers</h1>

    <!-- Filters -->
    <div class="flex flex-wrap gap-3 bg-slate-900 rounded-xl border border-slate-800 p-4">
      <input v-model="search" @input="debouncedFetch" type="text" placeholder="Search store name…"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 w-64"/>
      <select v-model="filterStatus" @change="fetchSellers"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500">
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>

    <!-- Table -->
    <div class="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <div v-if="loading" class="p-8 text-center text-slate-500">Loading…</div>
      <table v-else class="w-full text-sm text-left text-slate-400">
        <thead class="text-xs text-slate-500 uppercase border-b border-slate-800">
          <tr>
            <th class="py-3 px-4">Store</th>
            <th class="py-3 px-4">Owner</th>
            <th class="py-3 px-4">Status</th>
            <th class="py-3 px-4">Applied</th>
            <th class="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="seller in sellers" :key="seller.id"
            class="border-b border-slate-800/60 hover:bg-slate-800/40 transition-colors">
            <td class="py-3 px-4 text-white font-medium">{{ seller.store_name }}</td>
            <td class="py-3 px-4">{{ seller.user ? seller.user.name : '—' }}</td>
            <td class="py-3 px-4">
              <span class="px-2 py-0.5 rounded text-xs" :class="statusClass(seller.status)">{{ seller.status }}</span>
            </td>
            <td class="py-3 px-4 text-xs">{{ formatDate(seller.created_at) }}</td>
            <td class="py-3 px-4 flex gap-2">
              <router-link :to="`/sellers/${seller.id}`" class="text-orange-500 hover:text-orange-400 text-xs">View</router-link>
              <button v-if="seller.status === 'pending'" @click="approve(seller)"
                class="text-green-400 hover:text-green-300 text-xs">Approve</button>
              <button v-if="seller.status === 'pending'" @click="reject(seller)"
                class="text-red-400 hover:text-red-300 text-xs">Reject</button>
            </td>
          </tr>
          <tr v-if="sellers.length === 0">
            <td colspan="5" class="py-8 text-center text-slate-600">No sellers found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellerList',
  data() { return { sellers: [], loading: false, search: '', filterStatus: '', _debounce: null }; },
  methods: {
    async fetchSellers() {
      this.loading = true;
      try {
        const { data } = await this.$http.get('/admin/sellers', {
          params: { search: this.search, status: this.filterStatus },
        });
        this.sellers = data.data;
      } finally { this.loading = false; }
    },
    debouncedFetch() {
      clearTimeout(this._debounce);
      this._debounce = setTimeout(this.fetchSellers, 300);
    },
    async approve(seller) {
      await this.$http.put(`/admin/sellers/${seller.id}/approve`);
      seller.status = 'approved';
    },
    async reject(seller) {
      await this.$http.put(`/admin/sellers/${seller.id}/reject`);
      seller.status = 'rejected';
    },
    statusClass(s) {
      return { pending: 'bg-yellow-900/50 text-yellow-400', approved: 'bg-green-900/50 text-green-400', rejected: 'bg-red-900/50 text-red-400' }[s];
    },
    formatDate(d) { return d ? new Date(d).toLocaleDateString() : '—'; },
  },
  created() { this.fetchSellers(); },
};
</script>
