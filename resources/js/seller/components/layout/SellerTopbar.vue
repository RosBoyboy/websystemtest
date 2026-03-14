<template>
  <header class="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between flex-shrink-0">
    <!-- Left: Toggle + Page title -->
    <div class="flex items-center gap-4">
      <button
        @click="$emit('toggle-sidebar')"
        class="text-slate-400 hover:text-white transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <h2 class="text-white font-semibold text-lg">{{ pageTitle }}</h2>
    </div>

    <!-- Right: User info -->
    <div class="flex items-center gap-3">
      <div class="text-right hidden sm:block">
        <p class="text-white text-sm font-medium">{{ userName }}</p>
        <p class="text-slate-500 text-xs">{{ storeName }}</p>
      </div>
      <div class="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
        {{ initials }}
      </div>
    </div>
  </header>
</template>

<script>
const titles = {
  'seller.dashboard':    'Dashboard',
  'seller.products':     'My Products',
  'seller.product-new':  'Add Product',
  'seller.product-edit': 'Edit Product',
  'seller.orders':       'Orders',
  'seller.order-detail': 'Order Detail',
  'seller.inventory':    'Inventory',
  'seller.earnings':     'Earnings',
  'seller.profile':      'Store Profile',
};

export default {
  name: 'SellerTopbar',
  computed: {
    pageTitle() {
      return titles[this.$route.name] || 'Seller Panel';
    },
    user() {
      return this.$store.getters['auth/currentUser'];
    },
    seller() {
      return this.$store.getters['auth/currentSeller'];
    },
    userName()  { return this.user?.name  || ''; },
    storeName() { return this.seller?.store_name || ''; },
    initials() {
      return (this.userName || 'S').charAt(0).toUpperCase();
    },
  },
};
</script>
