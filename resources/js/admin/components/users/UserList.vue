<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-white">Users</h1>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap gap-3 bg-slate-900 rounded-xl border border-slate-800 p-4">
      <input
        v-model="search"
        @input="debouncedFetch"
        type="text"
        placeholder="Search name or email…"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 w-64"
      />
      <select v-model="filterRole" @change="fetchUsers"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500">
        <option value="">All Roles</option>
        <option value="admin">Admin</option>
        <option value="seller">Seller</option>
        <option value="customer">Customer</option>
      </select>
      <select v-model="filterStatus" @change="fetchUsers"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500">
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="banned">Banned</option>
      </select>
    </div>

    <!-- Table -->
    <div class="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <div v-if="loading" class="p-8 text-center text-slate-500">Loading…</div>
      <div v-else>
        <table class="w-full text-sm text-left text-slate-400">
          <thead class="text-xs text-slate-500 uppercase border-b border-slate-800">
            <tr>
              <th class="py-3 px-4">Name</th>
              <th class="py-3 px-4">Email</th>
              <th class="py-3 px-4">Role</th>
              <th class="py-3 px-4">Status</th>
              <th class="py-3 px-4">Joined</th>
              <th class="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id"
              class="border-b border-slate-800/60 hover:bg-slate-800/40 transition-colors">
              <td class="py-3 px-4 text-white font-medium">{{ user.name }}</td>
              <td class="py-3 px-4">{{ user.email }}</td>
              <td class="py-3 px-4">
                <span class="px-2 py-0.5 rounded text-xs" :class="roleClass(user.role)">{{ user.role }}</span>
              </td>
              <td class="py-3 px-4">
                <span class="px-2 py-0.5 rounded text-xs"
                  :class="user.status === 'active' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'">
                  {{ user.status }}
                </span>
              </td>
              <td class="py-3 px-4 text-xs">{{ formatDate(user.created_at) }}</td>
              <td class="py-3 px-4 flex items-center gap-2">
                <router-link :to="`/users/${user.id}`" class="text-orange-500 hover:text-orange-400 text-xs">View</router-link>
                <button
                  v-if="user.role !== 'admin'"
                  @click="toggleStatus(user)"
                  class="text-xs text-slate-500 hover:text-red-400 transition-colors">
                  {{ user.status === 'active' ? 'Ban' : 'Unban' }}
                </button>
              </td>
            </tr>
            <tr v-if="users.length === 0">
              <td colspan="6" class="py-8 text-center text-slate-600">No users found</td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
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
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [], meta: { current_page: 1, last_page: 1 },
      loading: false, search: '', filterRole: '', filterStatus: '', page: 1,
      _debounce: null,
    };
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      try {
        const { data } = await this.$http.get('/admin/users', {
          params: { search: this.search, role: this.filterRole, status: this.filterStatus, page: this.page },
        });
        this.users = data.data;
        this.meta  = { current_page: data.current_page, last_page: data.last_page };
      } finally { this.loading = false; }
    },
    debouncedFetch() {
      clearTimeout(this._debounce);
      this._debounce = setTimeout(this.fetchUsers, 300);
    },
    changePage(p) { this.page = p; this.fetchUsers(); },
    async toggleStatus(user) {
      const newStatus = user.status === 'active' ? 'banned' : 'active';
      await this.$http.put(`/admin/users/${user.id}/status`, { status: newStatus });
      user.status = newStatus;
    },
    roleClass(role) {
      return { admin: 'bg-orange-900/50 text-orange-400', seller: 'bg-blue-900/50 text-blue-400', customer: 'bg-slate-700/50 text-slate-400' }[role];
    },
    formatDate(d) { return d ? new Date(d).toLocaleDateString() : '—'; },
  },
  created() { this.fetchUsers(); },
};
</script>
