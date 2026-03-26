<template>
  <SellerLayout>
    <div class="w-full px-4 sm:px-6 lg:px-8 py-10" style="max-width:100%">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-black text-white mb-2">Dashboard</h1>
        <p class="text-slate-400">Welcome back, {{ sellerName }}! 👋</p>
      </div>

      <!-- Error -->
      <div v-if="error" class="mb-6 p-4 bg-red-900/50 border border-red-800 rounded-xl text-red-200 text-sm flex items-center gap-2">
        <span>⚠️</span>
        {{ error }}
      </div>

      <!-- Widgets -->
      <div class="mb-10">
        <DashboardWidgets :stats="stats" />
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <!-- Left: Recent Orders + Low Stock -->
        <div class="lg:col-span-2 space-y-6">
          <RecentOrdersList :orders="recentOrders" :loading="ordersLoading" />
          <LowStockAlerts :alerts="lowStockProducts" :loading="productsLoading" @restock="showRestockModal" />
        </div>

        <!-- Right: Quick Actions -->
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 h-fit sticky top-24">
          <h2 class="text-lg font-bold text-white mb-5">⚡ Quick Actions</h2>
          <div class="space-y-3">
            <router-link :to="{ name: 'seller-products-new' }" class="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-center block">
              ➕ Add New Product
            </router-link>
            <router-link :to="{ name: 'seller-messages' }" class="w-full px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors text-center block border border-slate-700">
              💬 View Messages
            </router-link>
            <router-link :to="{ name: 'seller-products' }" class="w-full px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors text-center block border border-slate-700">
              📦 Manage Products
            </router-link>
            <router-link :to="{ name: 'seller-orders' }" class="w-full px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors text-center block border border-slate-700">
              📋 All Orders
            </router-link>
          </div>

          <!-- Stats Card -->
          <div class="mt-6 pt-6 border-t border-slate-800">
            <p class="text-xs text-slate-500 uppercase font-bold mb-3">Profile Stats</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-slate-400">Rating</span>
                <span class="text-orange-400 font-semibold">{{ sellerRating }}/5.0 ⭐</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Response Time</span>
                <span class="text-green-400 font-semibold">< 2 hours</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Status</span>
                <span class="text-green-400 font-semibold">Active ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chart/Analytics Placeholder -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h2 class="text-lg font-bold text-white mb-5">📊 Sales This Month</h2>
        <div class="h-48 bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-500">
          <p>Sales chart visualization (integrates with chart library)</p>
        </div>
      </div>
    </div>

    <!-- Restock Modal -->
    <div v-if="showRestockForm" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 max-w-md w-full">
        <h3 class="text-lg font-bold text-white mb-4">📦 Restock Product</h3>
        <p class="text-sm text-slate-400 mb-4">Enter quantity to add to stock</p>
        <input v-model.number="restockQty" type="number" min="1" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white mb-4 focus:outline-none focus:border-orange-500" placeholder="Quantity" />
        <div class="flex gap-3">
          <button @click="showRestockForm = false" class="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors">Cancel</button>
          <button @click="submitRestock" class="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors">Add Stock</button>
        </div>
      </div>
    </div>
  </SellerLayout>
</template>

<script>
import axios from 'axios';
import SellerLayout from '../layout/SellerLayout.vue';
import DashboardWidgets from './dashboard/DashboardWidgets.vue';
import RecentOrdersList from './dashboard/RecentOrdersList.vue';
import LowStockAlerts from './dashboard/LowStockAlerts.vue';

export default {
  name: 'SellerDashboard',
  components: { SellerLayout, DashboardWidgets, RecentOrdersList, LowStockAlerts },
  data() {
    return {
      error: null,
      ordersLoading: false,
      productsLoading: false,
      recentOrders: [],
      lowStockProducts: [],
      showRestockForm: false,
      restockProductId: null,
      restockQty: 10,
      stats: {
        totalSales: 0,
        orderCount: 0,
        pendingOrders: 0,
        productCount: 0,
        lowStockCount: 0,
        unreadMessages: 0
      },
      sellerRating: 4.8
    };
  },
  computed: {
    sellerName() {
      const seller = this.$store.getters['auth/currentUser'];
      return seller ? (seller.name || 'Seller') : 'Seller';
    }
  },
  created() {
    Promise.all([
      this.fetchStats(),
      this.fetchRecentOrders(),
      this.fetchLowStockProducts()
    ]);
  },
  methods: {
    async fetchStats() {
      try {
        const { data } = await axios.get('/seller/dashboard/stats');
        this.stats = data;
      } catch (e) {
        console.error('Error fetching stats:', e);
      }
    },

    async fetchRecentOrders() {
      this.ordersLoading = true;
      try {
        const { data } = await axios.get('/seller/orders?limit=5');
        this.recentOrders = data.data || [];
      } catch (e) {
        console.error('Error fetching orders:', e);
      } finally {
        this.ordersLoading = false;
      }
    },

    async fetchLowStockProducts() {
      this.productsLoading = true;
      try {
        const { data } = await axios.get('/seller/products?low_stock=true&limit=5');
        this.lowStockProducts = data.data || [];
      } catch (e) {
        console.error('Error fetching products:', e);
      } finally {
        this.productsLoading = false;
      }
    },

    showRestockModal(productId) {
      this.restockProductId = productId;
      this.restockQty = 10;
      this.showRestockForm = true;
    },

    async submitRestock() {
      try {
        await axios.patch(`/seller/products/${this.restockProductId}`, {
          stock_adjustment: this.restockQty
        });
        this.showRestockForm = false;
        this.error = null;
        // Refresh data
        this.fetchStats();
        this.fetchLowStockProducts();
      } catch (e) {
        this.error = 'Failed to update stock. Please try again.';
      }
    }
  }
};
</script>
