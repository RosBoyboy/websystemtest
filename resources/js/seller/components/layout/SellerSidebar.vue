<template>
  <aside
    class="flex flex-col bg-slate-900 border-r border-slate-800 transition-all duration-300 flex-shrink-0"
    :class="collapsed ? 'w-16' : 'w-64'"
  >
    <!-- Logo -->
    <div class="flex items-center px-4 py-5 border-b border-slate-800">
      <span class="text-orange-500 font-bold text-xl tracking-wide" v-if="!collapsed">
        Nurban<span class="text-white">Nxt</span>
        <span class="ml-2 text-xs text-slate-500 font-normal">Seller</span>
      </span>
      <span class="text-orange-500 font-bold text-xl" v-else>N</span>
    </div>

    <!-- Store info (when expanded) -->
    <div v-if="!collapsed && seller" class="px-4 py-3 border-b border-slate-800">
      <p class="text-white text-sm font-semibold truncate">{{ seller.store_name }}</p>
      <span
        class="text-xs px-1.5 py-0.5 rounded-full"
        :class="seller.status === 'approved' ? 'bg-green-900/40 text-green-400' : 'bg-yellow-900/40 text-yellow-400'"
      >{{ seller.status }}</span>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.to"
        class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
        active-class="bg-orange-500 !text-white"
        exact
      >
        <span class="w-5 h-5 flex-shrink-0" v-html="item.icon"></span>
        <span v-if="!collapsed" class="text-sm font-medium">{{ item.label }}</span>
      </router-link>
    </nav>

    <!-- Logout -->
    <div class="px-2 py-4 border-t border-slate-800">
      <a
        href="/"
        class="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors mb-2"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.75L12 4l9 5.75V20a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1V9.75z"/>
        </svg>
        <span v-if="!collapsed" class="text-sm font-medium">Go to Shop</span>
      </a>

      <button
        @click="logout"
        class="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-400 hover:bg-red-900/40 hover:text-red-400 transition-colors"
      >
        <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        <span v-if="!collapsed" class="text-sm font-medium">Logout</span>
      </button>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SellerSidebar',
  props: {
    collapsed: { type: Boolean, default: false },
  },
  computed: {
    seller() {
      return this.$store.getters['auth/currentSeller'];
    },
    navItems() {
      return [
        {
          label: 'Dashboard', to: '/', name: 'dashboard',
          icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
        },
        {
          label: 'Products', to: '/products', name: 'products',
          icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`,
        },
        {
          label: 'Orders', to: '/orders', name: 'orders',
          icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>`,
        },
        {
          label: 'Inventory', to: '/inventory', name: 'inventory',
          icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>`,
        },
        {
          label: 'Earnings', to: '/earnings', name: 'earnings',
          icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
        },
        {
          label: 'Profile', to: '/profile', name: 'profile',
          icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
        },
      ];
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout');
      window.location.href = '/login';
    },
  },
};
</script>

