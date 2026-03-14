<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-white">Inventory</h1>
      <router-link to="/inventory?low=1"
        class="px-4 py-2 bg-red-900/40 border border-red-700/50 text-red-400 hover:bg-red-900/60 rounded-lg text-sm flex items-center gap-2">
        ⚠ Low Stock
      </router-link>
    </div>

    <!-- Search -->
    <div class="flex gap-3 bg-slate-900 rounded-xl border border-slate-800 p-4">
      <input v-model="search" @input="debouncedFetch" type="text" placeholder="Search by name or SKU…"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 w-80"/>
    </div>

    <!-- Table -->
    <div class="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
      <div v-if="loading" class="p-8 text-center text-slate-500">Loading…</div>
      <table v-else class="w-full text-sm text-left text-slate-400">
        <thead class="text-xs text-slate-500 uppercase border-b border-slate-800">
          <tr>
            <th class="py-3 px-4">Product</th>
            <th class="py-3 px-4">SKU</th>
            <th class="py-3 px-4">Seller</th>
            <th class="py-3 px-4">Stock</th>
            <th class="py-3 px-4">Threshold</th>
            <th class="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id"
            class="border-b border-slate-800/60 hover:bg-slate-800/40 transition-colors"
            :class="product.stock_quantity <= product.low_stock_threshold ? 'bg-red-950/20' : ''">
            <td class="py-3 px-4 text-white font-medium">{{ product.name }}</td>
            <td class="py-3 px-4 font-mono text-xs">{{ product.sku }}</td>
            <td class="py-3 px-4">{{ product.seller ? product.seller.store_name : '—' }}</td>
            <td class="py-3 px-4">
              <div v-if="editing === product.id" class="flex items-center gap-2">
                <input v-model.number="editQty" type="number" min="0" class="w-20 bg-slate-800 border border-orange-500 rounded px-2 py-1 text-white text-xs"/>
                <button @click="saveStock(product)" class="text-green-400 text-xs">Save</button>
                <button @click="editing = null" class="text-slate-500 text-xs">Cancel</button>
              </div>
              <span v-else :class="product.stock_quantity <= product.low_stock_threshold ? 'text-red-400 font-semibold' : 'text-white'">
                {{ product.stock_quantity }}
              </span>
            </td>
            <td class="py-3 px-4">{{ product.low_stock_threshold }}</td>
            <td class="py-3 px-4">
              <button v-if="editing !== product.id" @click="startEdit(product)"
                class="text-orange-500 hover:text-orange-400 text-xs">Edit Stock</button>
            </td>
          </tr>
          <tr v-if="products.length === 0">
            <td colspan="6" class="py-8 text-center text-slate-600">No products found</td>
          </tr>
        </tbody>
      </table>
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
  name: 'InventoryManager',
  data() {
    return { products: [], meta: { current_page: 1, last_page: 1 }, loading: false, search: '', page: 1, editing: null, editQty: 0, _debounce: null };
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const { data } = await this.$http.get('/admin/inventory', { params: { search: this.search, page: this.page } });
        this.products = data.data;
        this.meta = { current_page: data.current_page, last_page: data.last_page };
      } finally { this.loading = false; }
    },
    debouncedFetch() { clearTimeout(this._debounce); this._debounce = setTimeout(this.fetchProducts, 300); },
    changePage(p) { this.page = p; this.fetchProducts(); },
    startEdit(product) { this.editing = product.id; this.editQty = product.stock_quantity; },
    async saveStock(product) {
      await this.$http.put(`/admin/inventory/${product.id}`, { stock_quantity: this.editQty });
      product.stock_quantity = this.editQty;
      this.editing = null;
    },
  },
  created() { this.fetchProducts(); },
};
</script>
