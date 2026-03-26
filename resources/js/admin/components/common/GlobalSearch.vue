<template>
  <div class="flex-1 flex items-center">
    <!-- Search input -->
    <div class="relative w-full max-w-2xl">
      <div class="relative flex items-center">
        <svg class="absolute left-3 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
        </svg>
        <input
          v-model="query"
          @input="handleSearch"
          @keyup.escape="clear"
          type="text"
          placeholder="🔍 Search users, orders, products (type to search)…"
          class="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
        />
        <button v-if="query" @click="clear" class="absolute right-3 text-slate-400 hover:text-slate-200">✕</button>
      </div>

      <!-- Results dropdown -->
      <div v-if="showResults && results.length > 0" class="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
        <div v-for="(category, idx) in results" :key="idx" class="border-b border-slate-800 last:border-b-0">
          <!-- Category header -->
          <div class="px-4 py-2 bg-slate-800/50 text-xs font-bold text-slate-400 uppercase">
            {{ category.type }}
          </div>

          <!-- Items in category -->
          <div v-for="item in category.items" :key="item.id" @click="selectResult(item)" class="px-4 py-3 hover:bg-slate-800 cursor-pointer transition-colors border-l-4 border-transparent hover:border-orange-500 flex items-center gap-3">
            <span class="text-lg">{{ category.icon }}</span>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-white truncate">{{ item.label }}</p>
              <p class="text-xs text-slate-400 truncate">{{ item.meta }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- No results -->
      <div v-if="showResults && results.length === 0 && query" class="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-lg p-4 text-center text-slate-400 text-sm">
        No results found for "{{ query }}"
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GlobalSearch',
  data() {
    return {
      query: '',
      results: [],
      showResults: false,
      searchTimeout: null
    };
  },
  methods: {
    async handleSearch() {
      if (!this.query.trim()) {
        this.results = [];
        this.showResults = false;
        return;
      }

      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(async () => {
        try {
          const { data } = await axios.get('/admin/search', {
            params: { q: this.query.trim() }
          });
          
          // Format results by category
          this.results = [
            {
              type: 'Users',
              icon: '👤',
              items: data.users || []
            },
            {
              type: 'Orders',
              icon: '📦',
              items: data.orders || []
            },
            {
              type: 'Products',
              icon: '🛍️',
              items: data.products || []
            }
          ].filter(cat => cat.items.length > 0);

          this.showResults = true;
        } catch (e) {
          console.error('Search error:', e);
        }
      }, 300);
    },

    selectResult(item) {
      this.$emit('select', item);
      this.clear();
    },

    clear() {
      this.query = '';
      this.results = [];
      this.showResults = false;
    }
  }
};
</script>
