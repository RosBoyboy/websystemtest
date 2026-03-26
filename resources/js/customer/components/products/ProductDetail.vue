<template>
  <CustomerLayout>
    <!-- Loading -->
    <div v-if="loading" class="w-full px-4 sm:px-6 lg:px-8 py-16" style="max-width:100%">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="bg-slate-800 rounded-2xl aspect-square animate-pulse"></div>
        <div class="space-y-4">
          <div class="h-8 bg-slate-800 rounded-lg animate-pulse w-3/4"></div>
          <div class="h-5 bg-slate-800 rounded-lg animate-pulse w-1/3"></div>
          <div class="h-20 bg-slate-800 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Product -->
    <div v-else-if="product" class="w-full px-4 sm:px-6 lg:px-8 py-10" style="max-width:100%">
      <!-- Breadcrumb -->
      <Breadcrumb :breadcrumbs="breadcrumbs" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        <!-- Image gallery -->
        <div>
          <div class="bg-slate-800 rounded-2xl overflow-hidden aspect-square mb-3">
            <img
              v-if="activeImage"
              :src="activeImage"
              :alt="product.name"
              class="w-full h-full object-cover"
              @error="activeImage = null"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-slate-300">
              <svg class="w-16 h-16" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </div>
          <!-- Thumbnails -->
          <div v-if="images.length > 1" class="flex gap-2 overflow-x-auto pb-1">
            <button
              v-for="(img, idx) in images"
              :key="idx"
              @click="activeImage = img"
              :class="['w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors',
                activeImage === img ? 'border-orange-500' : 'border-transparent']"
            >
              <img :src="img" :alt="product.name + ' ' + (idx+1)" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Product info -->
        <div>
          <p v-if="product.category" class="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">
            {{ product.category.name }}
          </p>
          <h1 class="text-3xl font-black text-white mb-2">{{ product.name }}</h1>

          <!-- Price -->
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl font-bold text-white">${{ price }}</span>
            <span v-if="hasDiscount" class="text-lg text-slate-400 line-through">${{ comparePrice }}</span>
            <span v-if="hasDiscount" class="badge bg-red-100 text-red-600">Save {{ discountPct }}%</span>
          </div>

          <!-- Stock -->
          <p :class="['text-sm font-medium mb-5', product.stock_quantity > 0 ? 'text-green-600' : 'text-red-600']">
            {{ product.stock_quantity > 0 ? product.stock_quantity + ' in stock' : 'Out of stock' }}
          </p>

          <!-- Description -->
          <p class="text-slate-300 leading-relaxed mb-6">{{ product.description }}</p>

          <!-- Sizes -->
          <div v-if="sizes.length" class="mb-5">
            <p class="text-sm font-semibold text-slate-200 mb-2">Size
              <span v-if="selectedSize" class="text-orange-500 font-bold ml-1">— {{ selectedSize }}</span>
            </p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="size in sizes"
                :key="size"
                @click="selectedSize = size"
                :class="['px-4 py-2 rounded-lg border text-sm font-medium transition-colors',
                  selectedSize === size
                    ? 'border-orange-500 bg-orange-500 text-white'
                    : 'border-slate-700 text-slate-200 hover:border-slate-500 bg-slate-800']"
              >{{ size }}</button>
            </div>
          </div>

          <!-- Colors -->
          <div v-if="colors.length" class="mb-6">
            <p class="text-sm font-semibold text-slate-200 mb-2">Color
              <span v-if="selectedColor" class="text-orange-500 font-bold ml-1">— {{ selectedColor }}</span>
            </p>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="color in colors"
                :key="color"
                @click="selectedColor = color"
                :class="['relative rounded-lg border-2 transition-all', 
                  selectedColor === color 
                    ? 'ring-2 ring-orange-400 ring-offset-2 ring-offset-slate-950' 
                    : 'border-slate-700 hover:border-slate-500']"
              >
                <!-- Color swatch if valid hex, otherwise text button -->
                <div v-if="isColorHex(color)"
                  :style="{ backgroundColor: color }"
                  class="w-10 h-10 rounded-md border border-slate-600">
                </div>
                <div v-else
                  class="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 text-sm font-medium">
                  {{ color }}
                </div>
                <!-- Check mark for selected -->
                <div v-if="selectedColor === color && !isColorHex(color)" class="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div v-if="selectedColor === color && isColorHex(color)" class="absolute inset-0 flex items-center justify-center">
                  <svg class="w-5 h-5 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <!-- Quantity -->
          <div class="flex items-center gap-3 mb-6">
            <p class="text-sm font-semibold text-slate-200 w-16">Qty</p>
            <div class="flex items-center border border-slate-700 rounded-lg overflow-hidden">
              <button @click="qty = Math.max(1, qty - 1)" class="px-4 py-2 text-slate-300 hover:bg-slate-800 font-bold transition-colors">−</button>
              <span class="px-4 py-2 text-sm font-semibold text-white min-w-[48px] text-center">{{ qty }}</span>
              <button @click="qty = Math.min(product.stock_quantity, qty + 1)" class="px-4 py-2 text-slate-300 hover:bg-slate-800 font-bold transition-colors">+</button>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex gap-3">
            <button
              @click="addToCart"
              :disabled="product.stock_quantity === 0"
              class="btn-primary flex-1 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Add to Cart
            </button>
            <router-link v-if="product.stock_quantity > 0" :to="{ name: 'checkout' }" @click.native="buyNow" class="btn-orange flex-1 py-3 text-center">
              Buy Now
            </router-link>
          </div>

          <!-- Added confirmation -->
          <div v-if="addedMsg" class="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm flex items-center gap-2">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Added to cart!
          </div>

          <!-- Seller info -->
          <div v-if="product.seller" class="mt-8 p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
            <div>
              <p class="text-xs text-slate-400 uppercase font-semibold tracking-wide mb-1">Sold by</p>
              <p class="font-semibold text-white">{{ product.seller.store_name }}</p>
            </div>
            <button 
              @click="contactSeller" 
              :disabled="!product.seller || !product.seller.id"
              class="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-lg transition-colors shadow-lg hover:shadow-orange-500/50">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Not found -->
    <div v-else class="max-w-7xl mx-auto px-4 py-24 text-center">
      <h2 class="text-2xl font-bold text-slate-200">Product not found.</h2>
      <router-link :to="{ name: 'products' }" class="btn-orange mt-6 inline-block">Back to Shop</router-link>
    </div>
  </CustomerLayout>
</template>

<script>
import axios from 'axios';
import CustomerLayout from '../layout/CustomerLayout.vue';
import Breadcrumb from '../common/Breadcrumb.vue';

export default {
  name: 'ProductDetail',
  components: { CustomerLayout, Breadcrumb },
  data() {
    return {
      product:       null,
      loading:       true,
      activeImage:   null,
      selectedSize:  null,
      selectedColor: null,
      qty:           1,
      addedMsg:       false,
      addedTimer:    null,
    };
  },
  computed: {
    images()      { return Array.isArray(this.product.images)  ? this.product.images  : []; },
    sizes()       { return Array.isArray(this.product.sizes)   ? this.product.sizes   : []; },
    colors()      { return Array.isArray(this.product.colors)  ? this.product.colors  : []; },
    price()       { return parseFloat(this.product.price).toFixed(2); },
    comparePrice(){ return this.product.compare_price ? parseFloat(this.product.compare_price).toFixed(2) : null; },
    hasDiscount() { return this.comparePrice && parseFloat(this.comparePrice) > parseFloat(this.price); },
    discountPct() {
      if (!this.hasDiscount) return 0;
      return Math.round((1 - parseFloat(this.price) / parseFloat(this.comparePrice)) * 100);
    },
    breadcrumbs() {
      return [
        {
          label: this.product?.category?.name || 'Products',
          route: this.product?.category ? { name: 'products', query: { category: this.product.category.id } } : null
        },
        {
          label: this.product?.name,
          route: null
        }
      ];
    },
  },
  watch: {
    '$route.params.slug'(slug) {
      this.load(slug);
    },
  },
  created() {
    this.load(this.$route.params.slug);
  },
  methods: {
    isColorHex(color) {
      return /^#[0-9A-F]{6}$/i.test(color);
    },
    async load(slug) {
      this.loading = true;
      this.product = null;
      try {
        const { data } = await axios.get('/shop/products/' + slug);
        this.product      = data;
        this.activeImage  = this.images.length ? this.images[0] : null;
        this.selectedSize  = this.sizes.length  ? this.sizes[0]  : null;
        this.selectedColor = this.colors.length ? this.colors[0] : null;
        this.qty = 1;
      } catch (_) {}
      this.loading = false;
    },

    addToCart() {
      if (!this.product || this.product.stock_quantity === 0) return;
      this.$store.dispatch('cart/addItem', {
        product_id: this.product.id,
        name:       this.product.name,
        price:      parseFloat(this.product.price),
        image:      this.activeImage,
        size:       this.selectedSize,
        color:      this.selectedColor,
        quantity:   this.qty,
        slug:       this.product.slug,
      });
      this.addedMsg = true;
      clearTimeout(this.addedTimer);
      this.addedTimer = setTimeout(() => { this.addedMsg = false; }, 3000);
    },

    buyNow() {
      this.addToCart();
    },

    contactSeller() {
      if (!this.product || !this.product.seller || !this.product.seller.id) {
        console.error('Seller information not available');
        return;
      }
      if (!this.$store.getters['auth/isAuthenticated']) {
        this.$router.push({ name: 'login', query: { redirect: this.$route.fullPath } });
        return;
      }
      this.$router.push({ 
        name: 'account', 
        query: { 
          tab: 'messages', 
          seller_id: this.product.seller.id 
        } 
      });
    },
  },
};
</script>
