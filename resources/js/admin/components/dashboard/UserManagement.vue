<template>
  <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-lg font-bold text-white">👥 User Management</h2>
      <select v-model="filterRole" class="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded text-sm text-slate-200 focus:outline-none focus:border-orange-500">
        <option value="">All Users</option>
        <option value="seller">Sellers</option>
        <option value="customer">Customers</option>
        <option value="pending">Pending Approval</option>
      </select>
    </div>

    <div v-if="loading" class="text-center py-8 text-slate-400">
      Loading users...
    </div>

    <div v-else-if="filteredUsers.length === 0" class="text-center py-8 text-slate-400">
      No users found
    </div>

    <div v-else class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-slate-800">
            <th class="text-left py-3 px-4 font-semibold text-slate-300">User</th>
            <th class="text-left py-3 px-4 font-semibold text-slate-300">Type</th>
            <th class="text-left py-3 px-4 font-semibold text-slate-300">Status</th>
            <th class="text-left py-3 px-4 font-semibold text-slate-300">Joined</th>
            <th class="text-right py-3 px-4 font-semibold text-slate-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id" class="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
            <td class="py-3 px-4">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">
                  {{ user.initials }}
                </div>
                <div>
                  <p class="font-semibold text-white">{{ user.name }}</p>
                  <p class="text-xs text-slate-400">{{ user.email }}</p>
                </div>
              </div>
            </td>
            <td class="py-3 px-4">
              <span :class="['text-xs font-bold px-2 py-1 rounded',
                user.role === 'seller' ? 'bg-purple-500/20 text-purple-400' :
                user.role === 'customer' ? 'bg-blue-500/20 text-blue-400' :
                'bg-slate-700 text-slate-300']">
                {{ user.role.charAt(0).toUpperCase() + user.role.slice(1) }}
              </span>
            </td>
            <td class="py-3 px-4">
              <span v-if="user.status === 'approved'" class="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 font-semibold">✓ Approved</span>
              <span v-else-if="user.status === 'pending'" class="text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 font-semibold">⏳ Pending</span>
              <span v-else class="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400 font-semibold">✕ Banned</span>
            </td>
            <td class="py-3 px-4 text-slate-400">{{ formatDate(user.created_at) }}</td>
            <td class="py-3 px-4 text-right">
              <button v-if="user.status === 'pending'" @click="approveSeller(user)" class="text-xs px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded mr-2">Approve</button>
              <button @click="openBanModal(user)" class="text-xs px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded">Ban</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Ban confirmation Modal -->
    <ConfirmModal
      :visible="showBanModal"
      title="Ban User"
      :message="`Are you sure you want to ban ${selectedUser?.name}?`"
      :details="`Email: ${selectedUser?.email}`"
      :destructive="true"
      confirm-text="Ban User"
      icon="🚫"
      @confirm="confirmBan"
      @cancel="showBanModal = false"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ConfirmModal from '../common/ConfirmModal.vue';

export default {
  name: 'UserManagement',
  components: { ConfirmModal },
  data() {
    return {
      users: [],
      loading: false,
      filterRole: '',
      showBanModal: false,
      selectedUser: null
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(u => {
        if (!this.filterRole) return true;
        if (this.filterRole === 'pending') return u.status === 'pending';
        return u.role === this.filterRole;
      });
    }
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      try {
        const { data } = await axios.get('/admin/users');
        this.users = data.map(u => ({
          ...u,
          initials: u.name.split(' ').map(n => n[0]).join('').toUpperCase()
        }));
      } catch (e) {
        console.error('Error fetching users:', e);
      } finally {
        this.loading = false;
      }
    },

    async approveSeller(user) {
      try {
        await axios.patch(`/admin/users/${user.id}`, { status: 'approved' });
        user.status = 'approved';
      } catch (e) {
        console.error('Error approving seller:', e);
      }
    },

    openBanModal(user) {
      this.selectedUser = user;
      this.showBanModal = true;
    },

    async confirmBan() {
      try {
        await axios.patch(`/admin/users/${this.selectedUser.id}`, { status: 'banned' });
        this.selectedUser.status = 'banned';
        this.showBanModal = false;
      } catch (e) {
        console.error('Error banning user:', e);
      }
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  }
};
</script>
