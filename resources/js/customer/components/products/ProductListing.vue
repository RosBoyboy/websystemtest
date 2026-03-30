<template>
  <CustomerLayout>
    <div class="w-full px-4 sm:px-6 lg:px-8 py-10" style="max-width:100%">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 class="text-4xl font-black text-white" style="font-family:'Bebas Neue',cursive;letter-spacing:0.02em;">
            {{ currentCategory ? currentCategory.name : 'All Products' }}
          </h1>
          <p v-if="meta.total !== null" class="text-orange-500 text-sm mt-1 font-semibold">
            {{ meta.total }} product{{ meta.total !== 1 ? 's' : '' }}
          </p>
        </div>

        <!-- Sort dropdown -->
        <div class="w-full sm:w-auto">
          <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sort by</label>
          <select 
            v-model="filters.sort" 
            @change="fetchProducts(1)" 
            class="bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500 transition-colors w-full sm:w-auto"
          >
            <option value="latest">✨ Newest</option>
            <option value="featured">⭐ Featured</option>
            <option value="popular">🔥 Most Popular</option>
            <option value="rating">👌 Highest Rated</option>
            <option value="price_asc">💰 Price: Low to High</option>
            <option value="price_desc">💸 Price: High to Low</option>
          </select>
        </div>
      </div>

      <!-- Filters component -->
      <ProductFilters
        :categories="categories"
        :filters="filters"
        @filter-change="fetchProducts(1)"
      />

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
import ProductCard     from './ProductCard.vue';
import ProductFilters  from './ProductFilters.vue';

export default {
  name: 'ProductListing',
  components: { CustomerLayout, ProductCard, ProductFilters },
  data() {
    return {
      products:        [],
      categories:      [],
      loading:         true,
      currentCategory: null,
      filters: {
        q:         '',
        sort:      'latest',
        category:  '',
        min_price: '',
        max_price: '',
        rating:    null,
        stock:     '',
      },
      meta: { total: null, current_page: 1, last_page: 1, per_page: 16 },
    };
  },
  computed: {
    activeFilterCount() {
      let c = 0;
      if (this.filters.q)        c++;
      if (this.filters.category) c++;
      if (this.filters.min_price || this.filters.max_price) c++;
      if (this.filters.rating)   c++;
      if (this.filters.stock)    c++;
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
        if (this.filters.q)        params.q        = this.filters.q;
        if (this.filters.category) params.category = this.filters.category;
        if (this.filters.min_price) params.min_price = this.filters.min_price;
        if (this.filters.max_price) params.max_price = this.filters.max_price;
        if (this.filters.rating)   params.rating   = this.filters.rating;
        if (this.filters.stock)    params.stock    = this.filters.stock;

        const { data } = await axios.get('/shop/products', { params });
        this.products = Array.isArray(data?.data) ? data.data : [];
        this.meta = {
          total:        Number.isFinite(data?.total) ? data.total : 0,
          current_page: Number.isFinite(data?.current_page) ? data.current_page : 1,
          last_page:    Number.isFinite(data?.last_page) ? data.last_page : 1,
          per_page:     Number.isFinite(data?.per_page) ? data.per_page : this.meta.per_page,
        };

        if (this.filters.category) {
          this.currentCategory = this.categories.find(c => c.slug === this.filters.category) || null;
        } else {
          this.currentCategory = null;
        }
      } catch (_) {
        this.products = [];
        this.meta = { total: 0, current_page: 1, last_page: 1, per_page: this.meta.per_page };
      }
      this.loading = false;
    },

    async fetchCategories() {
      try {
        const { data } = await axios.get('/shop/categories');
        this.categories = Array.isArray(data) ? data : [];
      } catch (_) {
        this.categories = [];
      }
    },

    clearFilters()  {
      this.filters = { 
        q: '', 
        sort: 'latest', 
        category: '', 
        min_price: '', 
        max_price: '',
        rating: null,
        stock: ''
      };
      this.fetchProducts(1);
    },
    goPage(p)       { this.fetchProducts(p); window.scrollTo(0, 0); },
  },
};
</script>
