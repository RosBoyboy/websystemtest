<template>
  <div class="space-y-4">

    <!-- Header -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <input
          v-model="search"
          @input="debouncedFetch"
          type="text"
          placeholder="Search products…"
          class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500 w-64"
        />
        <select v-model="statusFilter" @change="fetchProducts"
          class="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-slate-300 text-sm focus:outline-none focus:border-orange-500">
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="draft">Draft</option>
        </select>
      </div>
      <router-link
        to="/products/new"
        class="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        Add Product
      </router-link>
    </div>

    <!-- Table -->
    <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div v-if="loading" class="p-10 text-center text-slate-500">Loading…</div>

      <div v-else-if="!products.length" class="p-10 text-center text-slate-500">
        No products found.
        <router-link to="/products/new" class="text-orange-500 hover:text-orange-400"> Add your first product →</router-link>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="border-b border-slate-800">
            <tr class="text-slate-400">
              <th class="text-left px-5 py-4 font-medium">Product</th>
              <th class="text-left px-4 py-4 font-medium">Category</th>
              <th class="text-right px-4 py-4 font-medium">Price</th>
              <th class="text-right px-4 py-4 font-medium">Stock</th>
              <th class="text-center px-4 py-4 font-medium">Status</th>
              <th class="px-5 py-4 font-medium"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr v-for="product in products" :key="product.id"
                class="hover:bg-slate-800/50 transition-colors">
              <!-- Product name + image -->
              <td class="px-5 py-4">
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
                    <p class="text-white font-medium">{{ product.name }}</p>
                    <p class="text-slate-500 text-xs">SKU: {{ product.sku || '—' }}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-4 text-slate-400">{{ product.category ? product.category.name : '—' }}</td>
              <td class="px-4 py-4 text-right text-slate-300">${{ product.price }}</td>
              <td class="px-4 py-4 text-right">
                <span :class="stockClass(product)">{{ product.stock_quantity }}</span>
              </td>
              <td class="px-4 py-4 text-center">
                <span :class="statusClass(product.status)" class="px-2 py-0.5 rounded-full text-xs font-medium">
                  {{ product.status }}
                </span>
              </td>
              <td class="px-5 py-4">
                <div class="flex items-center gap-2 justify-end">
                  <router-link :to="`/products/${product.id}`"
                    class="text-slate-400 hover:text-orange-400 transition-colors p-1.5 rounded-lg hover:bg-slate-800">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                  </router-link>
                  <button @click="confirmDelete(product)"
                    class="text-slate-400 hover:text-red-400 transition-colors p-1.5 rounded-lg hover:bg-slate-800">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div v-if="meta && meta.last_page > 1"
           class="flex items-center justify-between px-5 py-4 border-t border-slate-800">
        <p class="text-slate-500 text-sm">
          Showing {{ meta.from }}–{{ meta.to }} of {{ meta.total }}
        </p>
        <div class="flex gap-1">
          <button
            v-for="page in meta.last_page" :key="page"
            @click="goToPage(page)"
            :class="['px-3 py-1 rounded-lg text-sm transition-colors',
              page === meta.current_page ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white']"
          >{{ page }}</button>
        </div>
      </div>
    </div>

    <!-- Delete confirm modal -->
    <div v-if="deleteTarget" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full max-w-sm">
        <h3 class="text-white font-semibold mb-2">Delete Product?</h3>
        <p class="text-slate-400 text-sm mb-6">
          "<strong class="text-white">{{ deleteTarget.name }}</strong>" will be permanently deleted.
        </p>
        <div class="flex gap-3">
          <button @click="deleteTarget = null"
            class="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2.5 rounded-lg text-sm font-medium transition-colors">
            Cancel
          </button>
          <button @click="deleteProduct" :disabled="deleting"
            class="flex-1 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors">
            {{ deleting ? 'Deleting…' : 'Delete' }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products:     [],
      meta:         null,
      loading:      false,
      search:       '',
      statusFilter: '',
      page:         1,
      deleteTarget: null,
      deleting:     false,
      debounceTimer: null,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const params = { page: this.page };
        if (this.search)       params.search = this.search;
        if (this.statusFilter) params.status = this.statusFilter;
        const { data } = await this.$http.get('/seller/products', { params });
        this.products = data.data;
        this.meta     = data.meta;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    debouncedFetch() {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.page = 1;
        this.fetchProducts();
      }, 350);
    },
    goToPage(page) {
      this.page = page;
      this.fetchProducts();
    },
    confirmDelete(product) {
      this.deleteTarget = product;
    },
    async deleteProduct() {
      this.deleting = true;
      try {
        await this.$http.delete(`/seller/products/${this.deleteTarget.id}`);
        this.deleteTarget = null;
        this.fetchProducts();
      } catch (e) {
        alert(e.response?.data?.message || 'Delete failed.');
      } finally {
        this.deleting = false;
      }
    },
    statusClass(status) {
      return {
        active:   'bg-green-900/40 text-green-400',
        inactive: 'bg-slate-700 text-slate-400',
        draft:    'bg-yellow-900/40 text-yellow-400',
      }[status] || 'bg-slate-800 text-slate-400';
    },
    stockClass(product) {
      if (product.stock_quantity === 0) return 'text-red-400 font-semibold';
      if (product.stock_quantity <= product.low_stock_threshold) return 'text-yellow-400 font-semibold';
      return 'text-slate-300';
    },
  },
};
</script>
