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
      <div class="flex items-center gap-2 mt-1.5 mb-2">
        <span class="font-black text-orange-500 text-lg">${{ formatPrice(product.price).replace('$', '') }}</span>
        <span v-if="hasDiscount" class="text-xs text-slate-500 line-through">{{ formatPrice(product.compare_price) }}</span>
      </div>
      
      <!-- Variants preview -->
      <div class="space-y-1">
        <!-- Sizes preview -->
        <div v-if="sizes.length" class="flex flex-wrap gap-1">
          <span v-for="size in sizes.slice(0, 3)" :key="size"
            class="inline-block px-1.5 py-0.5 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">
            {{ size }}
          </span>
          <span v-if="sizes.length > 3" class="text-xs text-slate-500">+{{ sizes.length - 3 }}</span>
        </div>
        <!-- Colors preview -->
        <div v-if="colors.length" class="flex gap-1 items-center">
          <div v-for="color in colors.slice(0, 5)" :key="color"
            :style="{ backgroundColor: isColorHex(color) ? color : getColorHex(color) }"
            class="w-4 h-4 rounded-full border border-slate-600">
          </div>
          <span v-if="colors.length > 5" class="text-xs text-slate-500">+{{ colors.length - 5 }}</span>
        </div>
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
    return { 
      imgError: false,
      colorMap: {
        'Black': '#000000', 'White': '#FFFFFF', 'Gray': '#808080', 'Grey': '#808080',
        'Red': '#EF4444', 'Blue': '#3B82F6', 'Navy': '#001F3F', 'Green': '#10B981',
        'Yellow': '#FBBF24', 'Orange': '#F97316', 'Purple': '#A855F7', 'Pink': '#EC4899',
        'Brown': '#92400E', 'Beige': '#D4A574', 'Tan': '#D2B48C', 'Gold': '#FFD700',
      }
    };
  },
  computed: {
    firstImage() {
      if (this.imgError) return null;
      const imgs = this.product.images;
      if (Array.isArray(imgs) && imgs.length) return imgs[0];
      return null;
    },
    sizes() {
      return Array.isArray(this.product.sizes) ? this.product.sizes : [];
    },
    colors() {
      return Array.isArray(this.product.colors) ? this.product.colors : [];
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
    isColorHex(color) {
      return /^#[0-9A-F]{6}$/i.test(color);
    },
    getColorHex(colorName) {
      return this.colorMap[colorName] || '#808080';
    },
    goToProduct() {
      this.$router.push({ name: 'product', params: { slug: this.product.slug } });
    },
    formatPrice(v) {
      return '$' + parseFloat(v).toFixed(2);
    },
  },
};
</script>
