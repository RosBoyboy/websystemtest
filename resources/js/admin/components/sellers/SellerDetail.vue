<template>
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <router-link to="/sellers" class="text-slate-400 hover:text-white">← Sellers</router-link>
      <h1 class="text-2xl font-bold text-white">Seller Detail</h1>
    </div>

    <div v-if="loading" class="text-slate-500">Loading…</div>

    <div v-else-if="seller" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-4">
        <h3 class="text-white font-semibold text-lg">{{ seller.store_name }}</h3>
        <p class="text-slate-400 text-sm">{{ seller.store_description }}</p>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between">
            <span class="text-slate-500">Owner</span>
            <span class="text-white">{{ seller.user ? seller.user.name : '—' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Status</span>
            <span :class="{ 'text-green-400': seller.status === 'approved', 'text-yellow-400': seller.status === 'pending', 'text-red-400': seller.status === 'rejected' }">
              {{ seller.status }}
            </span>
          </div>
        </div>
        <div class="space-y-4 text-sm mt-4 border-t border-slate-800 pt-4">
          <div class="flex flex-col gap-1">
            <span class="text-slate-500 font-medium">Full Name</span>
            <span class="text-white">{{ seller.full_name || '—' }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-slate-500 font-medium">Contact Number</span>
            <span class="text-white">{{ seller.contact_number || '—' }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-slate-500 font-medium">Business Type</span>
            <span class="text-white capitalize">{{ seller.business_type || '—' }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-slate-500 font-medium">Shop Address</span>
            <span class="text-white">{{ seller.shop_address || '—' }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-slate-500 font-medium">Bank Details</span>
            <span class="text-white">{{ seller.bank_name ? `${seller.bank_name} - ${seller.account_number}` : '—' }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-slate-500 font-medium">E-Wallet</span>
            <span class="text-white uppercase">{{ seller.ewallet_type && seller.ewallet_type !== 'none' ? `${seller.ewallet_type} - ${seller.ewallet_number}` : 'None' }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-slate-500 font-medium">Delivery Methods</span>
            <span class="text-white">{{ seller.delivery_methods ? seller.delivery_methods.join(', ') : '—' }}</span>
          </div>
        </div>

        <div class="flex gap-2 pt-4" v-if="seller.status === 'pending'">
          <button @click="approve" class="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs py-2 rounded-lg">Approve</button>
          <button @click="reject"  class="flex-1 bg-red-600/30 hover:bg-red-600/50 text-red-400 text-xs py-2 rounded-lg">Reject</button>
        </div>
      </div>

      <div class="lg:col-span-2 bg-slate-900 rounded-xl border border-slate-800 p-6">
        <h3 class="text-white font-semibold mb-4">Products ({{ seller.products ? seller.products.length : 0 }})</h3>
        <div v-if="seller.products && seller.products.length" class="grid grid-cols-2 gap-3">
          <div v-for="p in seller.products" :key="p.id"
            class="bg-slate-800 rounded-lg p-3 text-sm">
            <p class="text-white font-medium truncate">{{ p.name }}</p>
            <p class="text-slate-400">${{ parseFloat(p.price).toFixed(2) }}</p>
            <span class="text-xs px-2 py-0.5 rounded mt-1 inline-block"
              :class="p.status === 'active' ? 'bg-green-900/50 text-green-400' : 'bg-slate-700 text-slate-400'">
              {{ p.status }}</span>
          </div>
        </div>
        <p v-else class="text-slate-600 text-sm">No products yet.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellerDetail',
  data() { return { seller: null, loading: false }; },
  methods: {
    async fetchSeller() {
      this.loading = true;
      try {
        const { data } = await this.$http.get(`/admin/sellers/${this.$route.params.id}`);
        this.seller = data;
      } finally { this.loading = false; }
    },
    async approve() {
      await this.$http.put(`/admin/sellers/${this.seller.id}/approve`);
      this.seller.status = 'approved';
    },
    async reject() {
      await this.$http.put(`/admin/sellers/${this.seller.id}/reject`);
      this.seller.status = 'rejected';
    },
  },
  created() { this.fetchSeller(); },
};
</script>
