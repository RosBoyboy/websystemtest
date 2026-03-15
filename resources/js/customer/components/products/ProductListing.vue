<template>
  <CustomerLayout>
    <div class="w-full px-4 sm:px-6 lg:px-8 py-10" style="max-width:100%">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 class="text-4xl font-black text-white" style="font-family:'Bebas Neue',cursive;letter-spacing:0.02em;">
            {{ currentCategory ? currentCategory.name : 'All Products' }}
          </h1>
          <p v-if="meta.total !== null" class="text-orange-500 text-sm mt-1 font-semibold">{{ meta.total }} products</p>
        </div>

        <!-- Filters row -->
        <div class="flex items-center gap-3 flex-wrap">
          <!-- Sort -->
          <select v-model="filters.sort" @change="fetchProducts" class="bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500 transition-colors w-auto">
            <option value="latest">Newest</option>
            <option value="featured">Featured</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>

          <!-- Filter toggle -->
          <button
            @click="filterPanelOpen = !filterPanelOpen"
            class="flex items-center gap-2 border border-slate-700 hover:border-orange-500 text-white rounded-lg px-4 py-2 text-sm transition-colors uppercase tracking-wider font-semibold"
            style="font-family:'Syne',sans-serif;"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/>
              <line x1="11" y1="18" x2="13" y2="18"/>
            </svg>
            Filters
            <span v-if="activeFilterCount" class="bg-orange-500 text-black font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center leading-none">{{ activeFilterCount }}</span>
          </button>
        </div>
      </div>

      <!-- Filter panel -->
      <div v-if="filterPanelOpen" class="bg-slate-900 rounded-2xl border border-slate-700 p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Search -->
        <div>
          <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Search</label>
          <div class="flex gap-2">
            <input v-model="filters.q" @keyup.enter="fetchProducts" placeholder="Search…" class="bg-black border border-slate-700 text-white placeholder-slate-500 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-orange-500 transition-colors" />
          </div>
        </div>
        <!-- Category -->
        <div>
          <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Category</label>
          <select v-model="filters.category" @change="fetchProducts" class="bg-black border border-slate-700 text-white rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-orange-500 transition-colors">
            <option value="">All Categories</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.slug">{{ cat.name }}</option>
          </select>
        </div>
        <!-- Price range -->
        <div>
          <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Price Range</label>
          <div class="flex items-center gap-2">
            <input v-model.number="filters.min_price" type="number" min="0" placeholder="Min" class="bg-black border border-slate-700 text-white placeholder-slate-500 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-orange-500 transition-colors" />
            <span class="text-slate-500 text-sm">–</span>
            <input v-model.number="filters.max_price" type="number" min="0" placeholder="Max" class="bg-black border border-slate-700 text-white placeholder-slate-500 rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-orange-500 transition-colors" />
          </div>
        </div>
        <!-- Actions -->
        <div class="flex items-end gap-2">
          <button @click="applyFilters" class="bg-orange-500 hover:bg-orange-600 text-black font-bold text-sm py-2 rounded-lg flex-1 transition-colors uppercase tracking-wider">Apply</button>
          <button @click="clearFilters" class="bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm py-2 rounded-lg flex-1 transition-colors uppercase tracking-wider">Clear</button>
        </div>
      </div>

      <!-- Products grid -->
      <div v-if="loading" class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="n in 12" :key="n" class="bg-slate-800 rounded-2xl h-72 animate-pulse"></div>
      </div>

      <div v-else-if="products.length" class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>

      <div v-else class="text-center py-24">
        <svg class="w-12 h-12 mx-auto text-slate-600 mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M21 21l-4.35-4.35"/><circle cx="11" cy="11" r="8"/>
        </svg>
        <h3 class="text-lg font-semibold text-slate-300">No products found</h3>
        <p class="text-slate-400 text-sm mt-1">Try adjusting your filters.</p>
        <button @click="clearFilters" class="bg-orange-500 hover:bg-orange-600 text-black font-bold uppercase tracking-wider text-sm mt-4 px-6 py-2 rounded-lg transition-colors">Clear Filters</button>
      </div>

      <!-- Pagination -->
      <div v-if="meta.last_page > 1" class="flex items-center justify-center gap-2 mt-12">
        <button
          :disabled="meta.current_page === 1"
          @click="goPage(meta.current_page - 1)"
          class="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg text-sm py-2 px-3 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >&larr; Prev</button>

        <div class="flex items-center gap-1">
          <button
            v-for="page in visiblePages"
            :key="page"
            @click="typeof page === 'number' ? goPage(page) : null"
            :class="[
              'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
              page === meta.current_page ? 'bg-orange-500 text-black' : typeof page === 'number' ? 'text-slate-400 hover:bg-slate-800 hover:text-white' : 'text-slate-600 cursor-default'
            ]"
          >{{ page }}</button>
        </div>

        <button
          :disabled="meta.current_page === meta.last_page"
          @click="goPage(meta.current_page + 1)"
          class="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg text-sm py-2 px-3 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >Next &rarr;</button>
      </div>
    </div>
  </CustomerLayout>
</template>

<script>
import axios from 'axios';
import CustomerLayout from '../layout/CustomerLayout.vue';
import ProductCard    from './ProductCard.vue';

export default {
  name: 'ProductListing',
  components: { CustomerLayout, ProductCard },
  data() {
    return {
      products:        [],
      categories:      [],
      loading:         true,
      filterPanelOpen: false,
      currentCategory: null,
      filters: {
        q:         '',
        sort:      'latest',
        category:  '',
        min_price: '',
        max_price: '',
      },
      meta: { total: null, current_page: 1, last_page: 1, per_page: 16 },
    };
  },
  computed: {
    activeFilterCount() {
      let c = 0;
      if (this.filters.q)         c++;
      if (this.filters.category)  c++;
      if (this.filters.min_price) c++;
      if (this.filters.max_price) c++;
      return c;
    },
    visiblePages() {
      const { current_page: cur, last_page: last } = this.meta;
      const pages = [];
      if (last <= 7) {
        for (let i = 1; i <= last; i++) pages.push(i);
      } else {
        pages.push(1);
        if (cur > 3) pages.push('…');
        for (let i = Math.max(2, cur - 1); i <= Math.min(last - 1, cur + 1); i++) pages.push(i);
        if (cur < last - 2) pages.push('…');
        pages.push(last);
      }
      return pages;
    },
  },
  watch: {
    '$route.query': {
      handler(q) {
        if (q.q)        this.filters.q        = q.q;
        if (q.category) this.filters.category = q.category;
        if (q.sort)     this.filters.sort     = q.sort;
        this.fetchProducts();
      },
      immediate: true,
    },
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchProducts(page) {
      this.loading = true;
      try {
        const params = {
          sort:      this.filters.sort,
          per_page:  this.meta.per_page,
          page:      typeof page === 'number' ? page : this.meta.current_page,
        };
        if (this.filters.q)         params.q         = this.filters.q;
        if (this.filters.category)  params.category  = this.filters.category;
        if (this.filters.min_price) params.min_price = this.filters.min_price;
        if (this.filters.max_price) params.max_price = this.filters.max_price;

        const { data } = await axios.get('/shop/products', { params });
        this.products = data.data;
        this.meta = {
          total:        data.total,
          current_page: data.current_page,
          last_page:    data.last_page,
          per_page:     data.per_page,
        };

        if (this.filters.category) {
          this.currentCategory = this.categories.find(c => c.slug === this.filters.category) || null;
        } else {
          this.currentCategory = null;
        }
      } catch (_) {}
      this.loading = false;
    },

    async fetchCategories() {
      try {
        const { data } = await axios.get('/shop/categories');
        this.categories = data;
      } catch (_) {}
    },

    applyFilters()  { this.fetchProducts(1); },
    clearFilters()  {
      this.filters = { q: '', sort: 'latest', category: '', min_price: '', max_price: '' };
      this.fetchProducts(1);
    },
    goPage(p)       { this.fetchProducts(p); window.scrollTo(0, 0); },
  },
};
</script>
