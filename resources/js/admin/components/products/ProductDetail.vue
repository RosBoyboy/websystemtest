<template>
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <router-link to="/products" class="text-slate-400 hover:text-white">← Products</router-link>
      <h1 class="text-2xl font-bold text-white">Product Detail</h1>
    </div>

    <div v-if="loading" class="text-slate-500">Loading…</div>

    <div v-else-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-3 text-sm">
        <h2 class="text-white text-xl font-bold">{{ product.name }}</h2>
        <p class="text-slate-400">{{ product.description }}</p>
        <div class="grid grid-cols-2 gap-2 pt-2">
          <div><span class="text-slate-500">Price</span><p class="text-white font-semibold">${{ parseFloat(product.price).toFixed(2) }}</p></div>
          <div><span class="text-slate-500">SKU</span><p class="text-white font-mono text-xs">{{ product.sku }}</p></div>
          <div><span class="text-slate-500">Stock</span>
            <p :class="product.stock_quantity <= product.low_stock_threshold ? 'text-red-400 font-semibold' : 'text-white'">
              {{ product.stock_quantity }}
            </p>
          </div>
          <div><span class="text-slate-500">Status</span>
            <p><span class="px-2 py-0.5 rounded text-xs"
              :class="{ 'bg-green-900/50 text-green-400': product.status === 'active', 'bg-red-900/50 text-red-400': product.status === 'inactive', 'bg-slate-700/50 text-slate-400': product.status === 'draft' }">
              {{ product.status }}</span>
            </p>
          </div>
          <div><span class="text-slate-500">Category</span><p class="text-white">{{ product.category ? product.category.name : '—' }}</p></div>
          <div><span class="text-slate-500">Seller</span><p class="text-white">{{ product.seller ? product.seller.store_name : '—' }}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data() { return { product: null, loading: false }; },
  methods: {
    async fetchProduct() {
      this.loading = true;
      try {
        // Use the admin products index filtered by ID — or in real use a show route
        const { data } = await this.$http.get('/admin/products', { params: { page: 1 } });
        this.product = data.data.find(p => p.id == this.$route.params.id) || null;
      } finally { this.loading = false; }
    },
  },
  created() { this.fetchProduct(); },
};
</script>
