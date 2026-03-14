<template>
  <div class="space-y-4">

    <!-- Filters -->
    <div class="flex items-center gap-3 flex-wrap">
      <input
        v-model="search"
        @input="debouncedFetch"
        type="text"
        placeholder="Search by name or SKU…"
        class="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500 w-72"
      />
      <label class="flex items-center gap-2 cursor-pointer">
        <input v-model="lowStockOnly" type="checkbox" @change="fetchInventory" class="accent-orange-500" />
        <span class="text-slate-400 text-sm">Low stock only</span>
      </label>
    </div>

    <!-- Inline edit notice -->
    <p class="text-slate-600 text-xs">Click a quantity or threshold cell to edit inline, then press Enter or click Save.</p>

    <!-- Table -->
    <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div v-if="loading" class="p-10 text-center text-slate-500">Loading…</div>
      <div v-else-if="!products.length" class="p-10 text-center text-slate-500">No products found.</div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="border-b border-slate-800">
            <tr class="text-slate-400">
              <th class="text-left px-5 py-4 font-medium">Product</th>
              <th class="text-left px-4 py-4 font-medium">SKU</th>
              <th class="text-center px-4 py-4 font-medium">Status</th>
              <th class="text-center px-4 py-4 font-medium">Stock Qty</th>
              <th class="text-center px-4 py-4 font-medium">Low Stock At</th>
              <th class="px-5 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr v-for="product in products" :key="product.id"
                :class="['hover:bg-slate-800/30 transition-colors', isLow(product) ? 'bg-yellow-900/10' : '']">
              <td class="px-5 py-3">
                <div class="flex items-center gap-3">
                  <img v-if="product.images && product.images[0]" :src="product.images[0]"
                       class="w-9 h-9 rounded-lg object-cover bg-slate-800" alt="" />
                  <div v-else class="w-9 h-9 rounded-lg bg-slate-800"></div>
                  <div>
                    <p class="text-white font-medium">{{ product.name }}</p>
                    <p class="text-slate-500 text-xs">${{ product.price }}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-slate-400 font-mono text-xs">{{ product.sku || '—' }}</td>
              <td class="px-4 py-3 text-center">
                <span :class="statusClass(product.status)" class="px-2 py-0.5 rounded-full text-xs font-medium">
                  {{ product.status }}
                </span>
              </td>

              <!-- Editable stock qty -->
              <td class="px-4 py-3 text-center">
                <div v-if="editing[product.id]" class="flex items-center justify-center gap-1">
                  <input v-model.number="edits[product.id].stock_quantity" type="number" min="0"
                    @keyup.enter="saveStock(product)"
                    class="w-20 bg-slate-800 border border-orange-500 rounded px-2 py-1 text-white text-sm text-center focus:outline-none" />
                </div>
                <span v-else
                  @click="startEdit(product)"
                  :class="['cursor-pointer font-semibold',
                    product.stock_quantity === 0 ? 'text-red-400' :
                    isLow(product) ? 'text-yellow-400' : 'text-slate-300']">
                  {{ product.stock_quantity }}
                  <span v-if="product.stock_quantity === 0" class="text-xs font-normal">(out)</span>
                </span>
              </td>

              <!-- Editable low stock threshold -->
              <td class="px-4 py-3 text-center">
                <div v-if="editing[product.id]" class="flex items-center justify-center gap-1">
                  <input v-model.number="edits[product.id].low_stock_threshold" type="number" min="0"
                    @keyup.enter="saveStock(product)"
                    class="w-20 bg-slate-800 border border-orange-500 rounded px-2 py-1 text-white text-sm text-center focus:outline-none" />
                </div>
                <span v-else @click="startEdit(product)" class="text-slate-400 cursor-pointer">
                  {{ product.low_stock_threshold }}
                </span>
              </td>

              <!-- Actions -->
              <td class="px-5 py-3">
                <div v-if="editing[product.id]" class="flex gap-2">
                  <button @click="saveStock(product)" :disabled="saving[product.id]"
                    class="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                    {{ saving[product.id] ? '…' : 'Save' }}
                  </button>
                  <button @click="cancelEdit(product)"
                    class="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-lg transition-colors">
                    Cancel
                  </button>
                </div>
                <button v-else @click="startEdit(product)"
                  class="text-slate-400 hover:text-orange-400 transition-colors text-xs">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div v-if="meta && meta.last_page > 1"
           class="flex items-center justify-between px-5 py-4 border-t border-slate-800">
        <p class="text-slate-500 text-sm">Showing {{ meta.from }}–{{ meta.to }} of {{ meta.total }}</p>
        <div class="flex gap-1">
          <button v-for="page in meta.last_page" :key="page"
            @click="goToPage(page)"
            :class="['px-3 py-1 rounded-lg text-sm transition-colors',
              page === meta.current_page ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white']">
            {{ page }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'InventoryManager',
  data() {
    return {
      products:     [],
      meta:         null,
      loading:      false,
      search:       '',
      lowStockOnly: false,
      page:         1,
      editing:      {},
      edits:        {},
      saving:       {},
      debounceTimer: null,
    };
  },
  created() {
    this.fetchInventory();
  },
  methods: {
    async fetchInventory() {
      this.loading = true;
      try {
        const params = { page: this.page };
        if (this.search)    params.search    = this.search;
        if (this.lowStockOnly) params.low_stock = 1;
        const { data } = await this.$http.get('/seller/inventory', { params });
        this.products = data.data;
        this.meta     = data.meta;
      } catch (e) { console.error(e); }
      finally     { this.loading = false; }
    },
    debouncedFetch() {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => { this.page = 1; this.fetchInventory(); }, 350);
    },
    goToPage(page) { this.page = page; this.fetchInventory(); },
    isLow(p) { return p.stock_quantity <= p.low_stock_threshold; },
    startEdit(product) {
      Vue.set(this.editing, product.id, true);
      Vue.set(this.edits,   product.id, {
        stock_quantity:      product.stock_quantity,
        low_stock_threshold: product.low_stock_threshold,
      });
    },
    cancelEdit(product) {
      Vue.delete(this.editing, product.id);
      Vue.delete(this.edits,   product.id);
    },
    async saveStock(product) {
      Vue.set(this.saving, product.id, true);
      try {
        await this.$http.put(`/seller/inventory/${product.id}`, this.edits[product.id]);
        Object.assign(product, this.edits[product.id]);
        this.cancelEdit(product);
      } catch (e) {
        alert(e.response?.data?.message || 'Save failed.');
      } finally {
        Vue.delete(this.saving, product.id);
      }
    },
    statusClass(status) {
      return {
        active:   'bg-green-900/40 text-green-400',
        inactive: 'bg-slate-700 text-slate-400',
        draft:    'bg-yellow-900/40 text-yellow-400',
      }[status] || 'bg-slate-800 text-slate-400';
    },
  },
};
</script>
