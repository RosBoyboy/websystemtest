<template>
  <div class="space-y-4">
    <h1 class="text-2xl font-bold text-white">Delivery Tracking</h1>

    <!-- Filters -->
    <div class="flex flex-wrap gap-3 bg-slate-900 rounded-xl border border-slate-800 p-4">
      <input v-model="search" @input="debouncedFetch" type="text" placeholder="Search tracking number…"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 w-64"/>
      <select v-model="filterStatus" @change="fetchDeliveries"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500">
        <option value="">All Status</option>
        <option v-for="s in statuses" :key="s" :value="s">{{ s.replace('_', ' ').replace(/^\w/, c => c.toUpperCase()) }}</option>
      </select>
    </div>

    <!-- Table -->
    <div class="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <div v-if="loading" class="p-8 text-center text-slate-500">Loading…</div>
      <table v-else class="w-full text-sm text-left text-slate-400">
        <thead class="text-xs text-slate-500 uppercase border-b border-slate-800">
          <tr>
            <th class="py-3 px-4">Tracking #</th>
            <th class="py-3 px-4">Order</th>
            <th class="py-3 px-4">Carrier</th>
            <th class="py-3 px-4">Status</th>
            <th class="py-3 px-4">Est. Delivery</th>
            <th class="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in deliveries" :key="d.id" class="border-b border-slate-800/60 hover:bg-slate-800/40 transition-colors">
            <td class="py-3 px-4 font-mono text-xs text-white">{{ d.tracking_number }}</td>
            <td class="py-3 px-4 text-xs">{{ d.order ? d.order.order_number : '—' }}</td>
            <td class="py-3 px-4">{{ d.carrier || '—' }}</td>
            <td class="py-3 px-4">
              <span class="px-2 py-0.5 rounded text-xs" :class="statusClass(d.status)">{{ d.status.replace('_', ' ') }}</span>
            </td>
            <td class="py-3 px-4 text-xs">{{ d.estimated_delivery || '—' }}</td>
            <td class="py-3 px-4">
              <button @click="openEdit(d)" class="text-orange-500 hover:text-orange-400 text-xs">Update</button>
            </td>
          </tr>
          <tr v-if="deliveries.length === 0">
            <td colspan="6" class="py-8 text-center text-slate-600">No deliveries found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit modal -->
    <div v-if="editDelivery" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 w-full max-w-md space-y-4">
        <h3 class="text-white font-semibold">Update Delivery Status</h3>
        <div>
          <label class="text-slate-400 text-xs mb-1 block">Status</label>
          <select v-model="editForm.status"
            class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500">
            <option v-for="s in statuses" :key="s" :value="s">{{ s.replace('_', ' ') }}</option>
          </select>
        </div>
        <div>
          <label class="text-slate-400 text-xs mb-1 block">Carrier</label>
          <input v-model="editForm.carrier" type="text"
            class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"/>
        </div>
        <div>
          <label class="text-slate-400 text-xs mb-1 block">Estimated Delivery</label>
          <input v-model="editForm.estimated_delivery" type="date"
            class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"/>
        </div>
        <div class="flex gap-3 pt-2">
          <button @click="saveDelivery" class="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm">Save</button>
          <button @click="editDelivery = null" class="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-400 py-2 rounded-lg text-sm">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryTracker',
  data() {
    return {
      deliveries: [], loading: false, search: '', filterStatus: '', _debounce: null,
      editDelivery: null, editForm: {},
      statuses: ['pending','picked_up','in_transit','out_for_delivery','delivered','failed'],
    };
  },
  methods: {
    async fetchDeliveries() {
      this.loading = true;
      try {
        const { data } = await this.$http.get('/admin/deliveries', { params: { search: this.search, status: this.filterStatus } });
        this.deliveries = data.data;
      } finally { this.loading = false; }
    },
    debouncedFetch() { clearTimeout(this._debounce); this._debounce = setTimeout(this.fetchDeliveries, 300); },
    openEdit(d) { this.editDelivery = d; this.editForm = { status: d.status, carrier: d.carrier, estimated_delivery: d.estimated_delivery }; },
    async saveDelivery() {
      await this.$http.put(`/admin/deliveries/${this.editDelivery.id}`, this.editForm);
      Object.assign(this.editDelivery, this.editForm);
      this.editDelivery = null;
    },
    statusClass(s) {
      const map = { pending: 'bg-yellow-900/50 text-yellow-400', picked_up: 'bg-blue-900/50 text-blue-400', in_transit: 'bg-indigo-900/50 text-indigo-400', out_for_delivery: 'bg-cyan-900/50 text-cyan-400', delivered: 'bg-green-900/50 text-green-400', failed: 'bg-red-900/50 text-red-400' };
      return map[s] || 'bg-slate-700/50 text-slate-400';
    },
  },
  created() { this.fetchDeliveries(); },
};
</script>
