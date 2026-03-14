<template>
  <CustomerLayout>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 class="text-3xl font-black text-white mb-8">My Account</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Sidebar navigation -->
        <div class="md:col-span-1">
          <div class="bg-slate-800 rounded-2xl border border-slate-700 p-4 space-y-1">
            <button
              v-for="tab in tabs"
              :key="tab.key"
              @click="activeTab = tab.key"
              :class="['w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2.5',
                activeTab === tab.key ? 'bg-orange-500 text-white' : 'text-slate-300 hover:bg-slate-700']"
            >
              <span v-html="tab.icon" class="w-4 h-4 flex-shrink-0"></span>
              {{ tab.label }}
            </button>
            <hr class="border-slate-700 my-2" />
            <button @click="logout" class="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-900/50 transition-colors flex items-center gap-2.5">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Sign Out
            </button>
          </div>
        </div>

        <!-- Content panel -->
        <div class="md:col-span-2">

          <!-- Messages tab -->
          <div v-if="activeTab === 'messages'" class="bg-slate-800 rounded-2xl border border-slate-700 p-6">
            <h2 class="text-lg font-bold text-white mb-5">Messages</h2>
            <CustomerChat />
          </div>

          <!-- Profile tab -->
          <div v-if="activeTab === 'profile'" class="bg-slate-800 rounded-2xl border border-slate-700 p-6">
            <h2 class="text-lg font-bold text-white mb-5">Profile Information</h2>

            <div v-if="profileSuccess" class="mb-4 p-3 bg-green-900/50 border border-green-800 rounded-lg text-green-300 text-sm">{{ profileSuccess }}</div>
            <div v-if="profileError"   class="mb-4 p-3 bg-red-900/50   border border-red-800   rounded-lg text-red-300   text-sm">{{ profileError }}</div>

            <form @submit.prevent="saveProfile" class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Name</label>
                <input v-model="profileForm.name" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Email</label>
                <input v-model="profileForm.email" type="email" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" />
              </div>
              <hr class="border-slate-700" />
              <p class="text-xs text-slate-500 uppercase font-semibold tracking-wide">Change Password (leave blank to keep current)</p>
              <div>
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Current Password</label>
                <input v-model="profileForm.current_password" type="password" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="••••••••" />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">New Password</label>
                  <input v-model="profileForm.password" type="password" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Min. 8 chars" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Confirm</label>
                  <input v-model="profileForm.password_confirmation" type="password" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="••••••••" />
                </div>
              </div>
              <button type="submit" :disabled="savingProfile" class="btn-primary py-2.5 px-6 disabled:opacity-50">
                <span v-if="savingProfile">Saving…</span>
                <span v-else>Save Changes</span>
              </button>
            </form>
          </div>

          <!-- Orders tab -->
          <div v-if="activeTab === 'orders'">
            <div v-if="loadingOrders" class="space-y-3">
              <div v-for="n in 4" :key="n" class="h-20 bg-stone-100 rounded-2xl animate-pulse"></div>
            </div>
            <div v-else-if="recentOrders.length === 0" class="bg-slate-800 rounded-2xl border border-slate-700 p-12 text-center">
              <p class="text-slate-400 mb-4">No orders yet.</p>
              <router-link :to="{ name: 'products' }" class="btn-orange">Shop Now</router-link>
            </div>
            <div v-else class="space-y-3">
              <div
                v-for="order in recentOrders"
                :key="order.id"
                @click="$router.push({ name: 'orders' })"
                class="bg-slate-800 rounded-2xl border border-slate-700 p-4 cursor-pointer hover:border-stone-300 transition-colors"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <p class="font-bold text-white text-sm">Order #{{ order.order_number }}</p>
                    <p class="text-xs text-slate-500 mt-0.5">{{ formatDate(order.created_at) }}</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <span :class="['badge', statusClass(order.status)]">{{ order.status }}</span>
                    <p class="font-bold text-white text-sm">${{ parseFloat(order.total).toFixed(2) }}</p>
                  </div>
                </div>
              </div>
              <router-link :to="{ name: 'orders' }" class="block text-center text-sm text-orange-500 hover:text-orange-600 pt-2">View all orders →</router-link>
            </div>
          </div>

          <!-- Seller tab -->
          <div v-if="activeTab === 'seller'" class="bg-slate-800 rounded-2xl border border-slate-700 p-6">
            <h2 class="text-lg font-bold text-white mb-2">Seller Center</h2>
            <p class="text-sm text-slate-400 mb-5">Use the same account for shopping and selling.</p>

            <div v-if="sellerSuccess" class="mb-4 p-3 bg-green-900/50 border border-green-800 rounded-lg text-green-300 text-sm">{{ sellerSuccess }}</div>
            <div v-if="sellerError" class="mb-4 p-3 bg-red-900/50 border border-red-800 rounded-lg text-red-300 text-sm">{{ sellerError }}</div>

            <div v-if="isSellerMode" class="space-y-4">
              <div class="p-4 rounded-xl border border-slate-700 bg-slate-900">
                <p class="text-slate-300 text-sm">Seller mode is active on this account.</p>
                <p class="text-xs mt-1" :class="sellerStatus === 'approved' ? 'text-green-400' : 'text-yellow-400'">
                  Verification status: {{ sellerStatus }}
                </p>
              </div>
              <a href="/seller/app#/" class="inline-flex items-center px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors">
                Open Seller Dashboard
              </a>
            </div>

            <form v-else @submit.prevent="activateSeller" class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Shop Name</label>
                <input v-model="sellerForm.shop_name" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Your Shop Name" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-slate-400 uppercase mb-1">Shop Description</label>
                <textarea v-model="sellerForm.shop_description" rows="3" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Tell customers about your shop"></textarea>
              </div>
              <button type="submit" :disabled="activatingSeller" class="btn-primary py-2.5 px-6 disabled:opacity-50">
                <span v-if="activatingSeller">Activating…</span>
                <span v-else>Yes, I want to be a seller</span>
              </button>
              <p class="text-xs text-slate-500">Seller access may require admin approval before all tools are enabled.</p>
            </form>
          </div>

          <!-- Overview tab -->
          <div v-if="activeTab === 'overview'" class="space-y-4">
            <!-- Welcome card -->
            <div class="bg-orange-500 text-white rounded-2xl p-6">
              <p class="text-slate-500 text-sm mb-1">Welcome back,</p>
              <p class="text-2xl font-black">{{ currentUser ? currentUser.name : '' }}</p>
            </div>
            <!-- Quick links -->
            <div class="grid grid-cols-2 gap-4">
              <button @click="activeTab = 'orders'" class="bg-slate-800 rounded-2xl border border-slate-700 p-5 text-left hover:border-stone-300 transition-colors">
                <p class="text-2xl font-black text-white mb-1">{{ recentOrders.length }}</p>
                <p class="text-sm text-slate-400">Recent Orders</p>
              </button>
              <router-link :to="{ name: 'cart' }" class="bg-slate-800 rounded-2xl border border-slate-700 p-5 text-left hover:border-stone-300 transition-colors block">
                <p class="text-2xl font-black text-white mb-1">{{ cartCount }}</p>
                <p class="text-sm text-slate-400">Cart Items</p>
              </router-link>
            </div>
            <button @click="activeTab = 'profile'" class="w-full bg-slate-800 rounded-2xl border border-slate-700 p-4 text-left text-sm font-semibold text-stone-700 hover:border-stone-300 transition-colors">
              Edit Profile →
            </button>
          </div>

        </div>
      </div>
    </div>
  </CustomerLayout>
</template>

<script>
import axios from 'axios';
import CustomerLayout from '../layout/CustomerLayout.vue';
import CustomerChat from './CustomerChat.vue';

export default {
  name: 'AccountDashboard',
  components: { CustomerLayout, CustomerChat },
  data() {
    return {
      activeTab:     'overview',
      tabs: [
        { key: 'overview', label: 'Overview', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
        { key: 'orders',   label: 'My Orders', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>' },
        { key: 'seller',   label: 'Seller Center', icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 17l9 4 9-4"/><path d="M3 12l9 4 9-4"/></svg>' },
        { key: 'profile',  label: 'Profile',   icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
        { key: 'messages', label: 'Messages',  icon: '<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>' },
      ],
      recentOrders:   [],
      loadingOrders:  false,
      profileForm:    { name: '', email: '', current_password: '', password: '', password_confirmation: '' },
      savingProfile:  false,
      profileSuccess: null,
      profileError:   null,
      sellerForm:     { shop_name: '', shop_description: '' },
      activatingSeller: false,
      sellerSuccess:  null,
      sellerError:    null,
    };
  },
  computed: {
    currentUser() { return this.$store.getters['auth/currentUser']; },
    cartCount()   { return this.$store.getters['cart/itemCount']; },
    isSellerMode() {
      return this.currentUser && ['seller', 'both'].includes(this.currentUser.role);
    },
    sellerStatus() {
      return this.currentUser && this.currentUser.seller && this.currentUser.seller.status
        ? this.currentUser.seller.status
        : 'pending';
    },
  },
  created() {
    this.loadProfile();
    this.loadOrders();
  },
  methods: {
    loadProfile() {
      const u = this.currentUser;
      if (u) {
        this.profileForm.name  = u.name;
        this.profileForm.email = u.email;
      }
    },
    async loadOrders() {
      this.loadingOrders = true;
      try {
        const { data } = await axios.get('/account/orders', { params: { per_page: 5 } });
        this.recentOrders = data.data;
      } catch (_) {}
      this.loadingOrders = false;
    },
    async saveProfile() {
      this.profileSuccess = null;
      this.profileError   = null;
      if (this.profileForm.password && this.profileForm.password !== this.profileForm.password_confirmation) {
        this.profileError = 'Passwords do not match.';
        return;
      }
      this.savingProfile = true;
      try {
        const { data } = await axios.put('/account', this.profileForm);
        this.profileSuccess = data.message;
        this.$store.commit('auth/UPDATE_USER', data.user);
        this.profileForm.current_password      = '';
        this.profileForm.password              = '';
        this.profileForm.password_confirmation = '';
      } catch (e) {
        const resp = e.response && e.response.data;
        this.profileError = (resp && resp.message) ? resp.message : 'Failed to save profile.';
      } finally {
        this.savingProfile = false;
      }
    },
    async logout() {
      await this.$store.dispatch('auth/logout');
      this.$router.push({ name: 'home' });
    },
    async activateSeller() {
      this.sellerError = null;
      this.sellerSuccess = null;
      this.activatingSeller = true;
      try {
        const data = await this.$store.dispatch('auth/becomeSeller', this.sellerForm);
        this.sellerSuccess = data.message || 'Seller mode activated.';
      } catch (e) {
        const resp = e.response && e.response.data;
        this.sellerError = (resp && resp.message) ? resp.message : 'Failed to activate seller mode.';
      } finally {
        this.activatingSeller = false;
      }
    },
    formatDate(d) {
      if (!d) return '';
      return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    },
    statusClass(status) {
      const map = {
        pending:   'bg-yellow-100 text-yellow-700',
        confirmed: 'bg-blue-100 text-blue-700',
        shipped:   'bg-purple-100 text-purple-700',
        delivered: 'bg-green-100 text-green-300',
        cancelled: 'bg-red-100 text-red-300',
      };
      return map[status] || 'bg-stone-100 text-slate-300';
    },
  },
};
</script>

