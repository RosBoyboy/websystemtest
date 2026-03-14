<template>
  <div class="product-card group cursor-pointer" @click="goToProduct">
    <!-- Image -->
    <div class="relative bg-slate-800 aspect-square overflow-hidden rounded-t-xl">
      <img
        v-if="firstImage"
        :src="firstImage"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        @error="imgError = true"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-slate-600">
        <svg class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      </div>
      <!-- Featured badge -->
      <span v-if="product.is_featured" class="absolute top-2 left-2 badge bg-orange-500 text-black font-bold border-none uppercase tracking-wider text-[10px] px-2 py-1">Featured</span>
      <!-- Sale badge -->
      <span v-if="hasDiscount" class="absolute top-2 right-2 badge bg-red-600 text-white font-bold border-none uppercase tracking-wider text-[10px] px-2 py-1">
        -{{ discountPct }}%
      </span>
    </div>
    <!-- Info -->
    <div class="p-3 bg-slate-900 rounded-b-xl border border-slate-800 group-hover:border-slate-700 transition-colors">
      <p v-if="product.category" class="text-xs text-slate-400 mb-0.5 font-semibold uppercase tracking-wider">{{ product.category.name }}</p>
      <h3 class="text-sm font-bold text-white truncate">{{ product.name }}</h3>
      <div class="flex items-center gap-2 mt-1.5">
        <span class="font-black text-orange-500 text-lg">${{ formatPrice(product.price).replace('$', '') }}</span>
        <span v-if="hasDiscount" class="text-xs text-slate-500 line-through">{{ formatPrice(product.compare_price) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: { type: Object, required: true },
  },
  data() {
    return { imgError: false };
  },
  computed: {
    firstImage() {
      if (this.imgError) return null;
      const imgs = this.product.images;
      if (Array.isArray(imgs) && imgs.length) return imgs[0];
      return null;
    },
    hasDiscount() {
      return this.product.compare_price && parseFloat(this.product.compare_price) > parseFloat(this.product.price);
    },
    discountPct() {
      if (!this.hasDiscount) return 0;
      return Math.round((1 - parseFloat(this.product.price) / parseFloat(this.product.compare_price)) * 100);
    },
  },
  methods: {
    goToProduct() {
      this.$router.push({ name: 'product', params: { slug: this.product.slug } });
    },
    formatPrice(v) {
      return '$' + parseFloat(v).toFixed(2);
    },
  },
};
</script>
