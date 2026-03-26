<template>
  <div class="bg-slate-900 rounded-2xl border border-slate-700 p-6 mb-8">
    <!-- Category chips (horizontal scroll) -->
    <div class="mb-6">
      <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Categories</p>
      <div class="flex gap-2 overflow-x-auto pb-2">
        <button
          @click="selectCategory('')"
          :class="['px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all flex-shrink-0',
            !filters.category
              ? 'bg-orange-500 text-black'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700']"
        >
          All Products
        </button>
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectCategory(cat.slug)"
          :class="['px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all flex-shrink-0',
            filters.category === cat.slug
              ? 'bg-orange-500 text-black'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700']"
        >
          {{ cat.name }}
        </button>
      </div>
    </div>

    <!-- Active filters pills -->
    <div v-if="activeFilterCount > 0" class="mb-6">
      <div class="flex flex-wrap gap-2">
        <button
          v-if="filters.q"
          @click="clearSpecificFilter('q')"
          class="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 border border-orange-500/50 text-orange-400 rounded-full text-xs font-semibold hover:bg-orange-500/30 transition-colors"
        >
          🔍 {{ filters.q }}
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <button
          v-if="filters.min_price || filters.max_price"
          @click="clearSpecificFilter('price')"
          class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/50 text-blue-400 rounded-full text-xs font-semibold hover:bg-blue-500/30 transition-colors"
        >
          💰 ${{ filters.min_price || '0' }}–${{ filters.max_price || '∞' }}
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <button
          v-if="filters.rating"
          @click="clearSpecificFilter('rating')"
          class="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 rounded-full text-xs font-semibold hover:bg-yellow-500/30 transition-colors"
        >
          ⭐ {{ filters.rating }}+ stars
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <button
          @click="clearFilters"
          class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-semibold rounded-full transition-colors"
        >
          Clear All
        </button>
      </div>
    </div>

    <!-- Filter controls grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Search -->
      <div>
        <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Search</label>
        <div class="relative">
          <input
            v-model="filters.q"
            @input="debouncedSearch"
            placeholder="Search products…"
            class="bg-black border border-slate-700 text-white placeholder-slate-500 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-orange-500 transition-colors"
          />
          <svg v-if="filters.q" @click="filters.q = ''; debouncedSearch()" class="w-4 h-4 absolute right-3 top-2.5 text-slate-500 hover:text-slate-300 cursor-pointer transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </div>
      </div>

      <!-- Price range -->
      <div>
        <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Price Range</label>
        <div class="flex items-center gap-2">
          <input
            v-model.number="filters.min_price"
            @change="applyFilters"
            type="number"
            min="0"
            placeholder="Min"
            class="bg-black border border-slate-700 text-white placeholder-slate-500 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-orange-500 transition-colors"
          />
          <span class="text-slate-500 text-sm">–</span>
          <input
            v-model.number="filters.max_price"
            @change="applyFilters"
            type="number"
            min="0"
            placeholder="Max"
            class="bg-black border border-slate-700 text-white placeholder-slate-500 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
      </div>

      <!-- Rating filter -->
      <div>
        <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Rating</label>
        <select
          v-model.number="filters.rating"
          @change="applyFilters"
          class="bg-black border border-slate-700 text-white rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-orange-500 transition-colors"
        >
          <option :value="null">All ratings</option>
          <option :value="4">⭐ 4+ stars</option>
          <option :value="3">⭐ 3+ stars</option>
          <option :value="2">⭐ 2+ stars</option>
          <option :value="1">⭐ 1+ stars</option>
        </select>
      </div>

      <!-- Stock filter -->
      <div>
        <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Availability</label>
        <select
          v-model="filters.stock"
          @change="applyFilters"
          class="bg-black border border-slate-700 text-white rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-orange-500 transition-colors"
        >
          <option value="">All items</option>
          <option value="in_stock">In Stock</option>
          <option value="low_stock">Low Stock</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductFilters',
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      searchTimeout: null
    };
  },
  computed: {
    activeFilterCount() {
      let c = 0;
      if (this.filters.q)        c++;
      if (this.filters.min_price || this.filters.max_price) c++;
      if (this.filters.rating)   c++;
      if (this.filters.stock)    c++;
      return c;
    }
  },
  methods: {
    selectCategory(slug) {
      this.filters.category = slug;
      this.$emit('filter-change');
    },
    debouncedSearch() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.$emit('filter-change');
      }, 500); // 500ms debounce for search
    },
    applyFilters() {
      this.$emit('filter-change');
    },
    clearSpecificFilter(type) {
      if (type === 'q') {
        this.filters.q = '';
      } else if (type === 'price') {
        this.filters.min_price = '';
        this.filters.max_price = '';
      } else if (type === 'rating') {
        this.filters.rating = null;
      }
      this.$emit('filter-change');
    },
    clearFilters() {
      this.filters.q = '';
      this.filters.category = '';
      this.filters.min_price = '';
      this.filters.max_price = '';
      this.filters.rating = null;
      this.filters.stock = '';
      this.$emit('filter-change');
    }
  }
};
</script>

<style scoped>
/* Remove spinner/arrows from number inputs */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
