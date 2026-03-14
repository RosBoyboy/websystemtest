<template>
  <div class="space-y-4">
    <h1 class="text-2xl font-bold text-white">Products</h1>

    <!-- Filters -->
    <div class="flex flex-wrap gap-3 bg-slate-900 rounded-xl border border-slate-800 p-4">
      <input v-model="search" @input="debouncedFetch" type="text" placeholder="Search products…"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 w-64"/>
      <select v-model="filterStatus" @change="fetchProducts"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500">
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="draft">Draft</option>
      </select>
    </div>

    <!-- Table -->
    <div class="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <div v-if="loading" class="p-8 text-center text-slate-500">Loading…</div>
      <table v-else class="w-full text-sm text-left text-slate-400">
        <thead class="text-xs text-slate-500 uppercase border-b border-slate-800">
          <tr>
            <th class="py-3 px-4">Product</th>
            <th class="py-3 px-4">Seller</th>
            <th class="py-3 px-4">Price</th>
            <th class="py-3 px-4">Stock</th>
            <th class="py-3 px-4">Status</th>
            <th class="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id"
            class="border-b border-slate-800/60 hover:bg-slate-800/40 transition-colors">
            <td class="py-3 px-4">
              <div class="flex items-center gap-3">
                <img
                  v-if="product.images && product.images[0]"
                  :src="product.images[0]"
                  class="w-10 h-10 rounded-lg object-cover bg-slate-800"
                  alt=""
                />
                <div v-else class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                  <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-medium">{{ product.name }}</div>
                  <div class="text-slate-500 text-xs">{{ product.sku }}</div>
                </div>
              </div>
            </td>
            <td class="py-3 px-4">{{ product.seller ? product.seller.store_name : '—' }}</td>
            <td class="py-3 px-4 text-white">${{ parseFloat(product.price).toFixed(2) }}</td>
            <td class="py-3 px-4">
              <span :class="product.stock_quantity <= product.low_stock_threshold ? 'text-red-400' : 'text-white'">
                {{ product.stock_quantity }}
              </span>
            </td>
            <td class="py-3 px-4">
              <span class="px-2 py-0.5 rounded text-xs"
                :class="{ 'bg-green-900/50 text-green-400': product.status === 'active', 'bg-red-900/50 text-red-400': product.status === 'inactive', 'bg-slate-700/50 text-slate-400': product.status === 'draft' }">
                {{ product.status }}
              </span>
            </td>
            <td class="py-3 px-4 flex gap-2">
              <router-link :to="`/products/${product.id}`" class="text-orange-500 hover:text-orange-400 text-xs">View</router-link>
              <button @click="toggleStatus(product)" class="text-xs text-slate-500 hover:text-yellow-400">
                {{ product.status === 'active' ? 'Deactivate' : 'Activate' }}
              </button>
              <button @click="deleteProduct(product)" class="text-xs text-slate-500 hover:text-red-400">Delete</button>
            </td>
          </tr>
          <tr v-if="products.length === 0">
            <td colspan="6" class="py-8 text-center text-slate-600">No products found</td>
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
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return { products: [], meta: { current_page: 1, last_page: 1 }, loading: false, search: '', filterStatus: '', page: 1, _debounce: null };
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const { data } = await this.$http.get('/admin/products', {
          params: { search: this.search, status: this.filterStatus, page: this.page },
        });
        this.products = data.data;
        this.meta = { current_page: data.current_page, last_page: data.last_page };
      } finally { this.loading = false; }
    },
    debouncedFetch() { clearTimeout(this._debounce); this._debounce = setTimeout(this.fetchProducts, 300); },
    changePage(p) { this.page = p; this.fetchProducts(); },
    async toggleStatus(product) {
      const newStatus = product.status === 'active' ? 'inactive' : 'active';
      await this.$http.put(`/admin/products/${product.id}/status`, { status: newStatus });
      product.status = newStatus;
    },
    async deleteProduct(product) {
      if (!confirm(`Delete "${product.name}"?`)) return;
      await this.$http.delete(`/admin/products/${product.id}`);
      this.products = this.products.filter(p => p.id !== product.id);
    },
  },
  created() { this.fetchProducts(); },
};
</script>
