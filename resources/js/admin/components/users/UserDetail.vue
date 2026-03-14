<template>
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <router-link to="/users" class="text-slate-400 hover:text-white">← Users</router-link>
      <h1 class="text-2xl font-bold text-white">User Detail</h1>
    </div>

    <div v-if="loading" class="text-slate-500">Loading…</div>

    <div v-else-if="user" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Profile card -->
      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-4">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-bold">
            {{ user.name[0].toUpperCase() }}
          </div>
          <div>
            <p class="text-white font-semibold">{{ user.name }}</p>
            <p class="text-slate-400 text-sm">{{ user.email }}</p>
          </div>
        </div>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between"><span class="text-slate-500">Role</span>
            <span class="text-white capitalize">{{ user.role }}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Status</span>
            <span :class="user.status === 'active' ? 'text-green-400' : 'text-red-400'">{{ user.status }}</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Joined</span>
            <span class="text-white">{{ formatDate(user.created_at) }}</span></div>
        </div>
      </div>

      <!-- Orders -->
      <div class="lg:col-span-2 bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h3 class="text-white font-semibold mb-4">Order History ({{ user.orders ? user.orders.length : 0 }})</h3>
        <div v-if="user.orders && user.orders.length" class="space-y-2">
          <div v-for="order in user.orders" :key="order.id"
            class="flex items-center justify-between py-2 border-b border-slate-800 text-sm">
            <span class="font-mono text-slate-400 text-xs">{{ order.order_number }}</span>
            <span class="text-white">${{ parseFloat(order.total).toFixed(2) }}</span>
            <span class="px-2 py-0.5 rounded text-xs bg-slate-700/50 text-slate-400">{{ order.status }}</span>
          </div>
        </div>
        <p v-else class="text-slate-600 text-sm">No orders yet.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  data() { return { user: null, loading: false }; },
  methods: {
    async fetchUser() {
      this.loading = true;
      try {
        const { data } = await this.$http.get(`/admin/users/${this.$route.params.id}`);
        this.user = data;
      } finally { this.loading = false; }
    },
    formatDate(d) { return d ? new Date(d).toLocaleDateString() : '—'; },
  },
  created() { this.fetchUser(); },
};
</script>
