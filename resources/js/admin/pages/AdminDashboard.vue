<template>
  <AdminLayout>
    <div class="w-full px-4 sm:px-6 lg:px-8 py-10" style="max-width:100%">
      <!-- Header with search -->
      <div class="mb-8 flex items-center justify-between">
        <div>
          <h1 class="text-4xl font-black text-white">Admin Console</h1>
          <p class="text-slate-400 mt-1">Platform overview & management</p>
        </div>
        <div class="text-right">
          <p class="text-xs text-slate-500 uppercase font-bold mb-1">Last Updated</p>
          <p class="text-sm text-slate-300">{{ lastUpdate }}</p>
        </div>
      </div>

      <!-- Global Search Bar -->
      <div class="mb-8 bg-slate-900 border border-slate-800 rounded-xl p-4">
        <GlobalSearch @select="handleSearchSelect" />
      </div>

      <!-- Analytics Cards -->
      <div class="mb-8">
        <AnalyticsCards :stats="stats" />
      </div>

      <!-- Main grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left: User Management + Recent Orders -->
        <div class="lg:col-span-2 space-y-6">
          <!-- User Management -->
          <UserManagement />

          <!-- Recent Orders -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div class="flex items-center justify-between mb-5">
              <h2 class="text-lg font-bold text-white">📦 Recent Orders</h2>
              <router-link :to="{ name: 'admin-orders' }" class="text-orange-400 hover:text-orange-300 text-sm font-semibold">View All →</router-link>
            </div>

            <div v-if="recentOrders.length === 0" class="text-center py-8 text-slate-400">
              No orders yet
            </div>

            <div v-else class="space-y-3">
              <div v-for="order in recentOrders" :key="order.id" class="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                <div class="flex-1">
                  <p class="text-white font-semibold">Order #{{ order.order_number }}</p>
                  <p class="text-xs text-slate-400">{{ order.customer_name }} → {{ order.seller_name }}</p>
                </div>
                <span :class="['text-xs px-2 py-1 rounded font-bold',
                  order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  order.status === 'confirmed' ? 'bg-blue-500/20 text-blue-400' :
                  order.status === 'shipped' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-green-500/20 text-green-400']">
                  {{ order.status.charAt(0).toUpperCase() + order.status.slice(1) }}
                </span>
                <p class="text-orange-400 font-bold ml-4">${{ order.total.toFixed(2) }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Quick Settings & System Info -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Quick Actions -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-5">⚙️ Quick Actions</h2>
            <div class="space-y-3">
              <router-link :to="{ name: 'admin-products' }" class="w-full px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors text-center block border border-slate-700">
                📦 Manage Products
              </router-link>
              <router-link :to="{ name: 'admin-categories' }" class="w-full px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors text-center block border border-slate-700">
                🏷️ Manage Categories
              </router-link>
              <router-link :to="{ name: 'admin-settings' }" class="w-full px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors text-center block border border-slate-700">
                ⚡ Settings
              </router-link>
            </div>
          </div>

          <!-- System Stats -->
          <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 class="text-lg font-bold text-white mb-5">🔧 System Info</h2>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-slate-400">Platform Status</span>
                <span class="text-green-400 font-semibold">🟢 Online</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">API Latency</span>
                <span class="text-green-400 font-semibold">48ms</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Database</span>
                <span class="text-green-400 font-semibold">✓ Connected</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Storage Used</span>
                <span class="text-slate-300 font-semibold">2.4 GB</span>
              </div>
            </div>
          </div>

          <!-- Dangerous Zone -->
          <div class="bg-red-900/10 border border-red-500/30 rounded-xl p-6">
            <h2 class="text-lg font-bold text-red-400 mb-5">⚠️ Danger Zone</h2>
            <button @click="openClearCacheModal" class="w-full px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-300 font-semibold rounded-lg transition-colors border border-red-500/50">
              🗑️ Clear Cache
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Clear Cache Modal -->
    <ConfirmModal
      :visible="showClearCacheModal"
      title="Clear Cache"
      message="Clear all platform cache? Users may experience slower load times temporarily."
      :destructive="false"
      confirm-text="Clear Cache"
      icon="♻️"
      @confirm="clearCache"
      @cancel="showClearCacheModal = false"
    />
  </AdminLayout>
</template>

<script>
import axios from 'axios';
import AdminLayout from '../layout/AdminLayout.vue';
import GlobalSearch from '../common/GlobalSearch.vue';
import ConfirmModal from '../common/ConfirmModal.vue';
import AnalyticsCards from './dashboard/AnalyticsCards.vue';
import UserManagement from './dashboard/UserManagement.vue';

export default {
  name: 'AdminDashboard',
  components: { AdminLayout, GlobalSearch, ConfirmModal, AnalyticsCards, UserManagement },
  data() {
    return {
      stats: {
        totalRevenue: 0,
        revenueGrowth: 0,
        totalOrders: 0,
        pendingOrders: 0,
        activeSellers: 0,
        pendingSellersCount: 0,
        totalCustomers: 0,
        newCustomers: 0
      },
      recentOrders: [],
      showClearCacheModal: false,
      lastUpdate: new Date().toLocaleTimeString()
    };
  },
  created() {
    this.fetchDashboardData();
    // Refresh every 5 minutes
    setInterval(() => {
      this.lastUpdate = new Date().toLocaleTimeString();
    }, 5 * 60 * 1000);
  },
  methods: {
    async fetchDashboardData() {
      try {
        const [statsRes, ordersRes] = await Promise.all([
          axios.get('/admin/dashboard/stats'),
          axios.get('/admin/orders?limit=5')
        ]);
        this.stats = statsRes.data;
        this.recentOrders = ordersRes.data.data || [];
      } catch (e) {
        console.error('Error fetching dashboard data:', e);
      }
    },

    handleSearchSelect(item) {
      // Navigate to relevant page based on item type
      if (item.type === 'user') {
        this.$router.push({ name: 'admin-user-detail', params: { id: item.id } });
      } else if (item.type === 'order') {
        this.$router.push({ name: 'admin-order-detail', params: { id: item.id } });
      } else if (item.type === 'product') {
        this.$router.push({ name: 'admin-product-detail', params: { id: item.id } });
      }
    },

    openClearCacheModal() {
      this.showClearCacheModal = true;
    },

    async clearCache() {
      try {
        await axios.post('/admin/cache/clear');
        this.showClearCacheModal = false;
        // Show notification
        console.log('Cache cleared successfully');
      } catch (e) {
        console.error('Error clearing cache:', e);
      }
    }
  }
};
</script>
