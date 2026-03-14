<template>
  <div
    class="dark-card"
    :class="{ 'dark-card--large': large }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    @click="goToProduct"
    style="cursor:pointer;position:relative;overflow:hidden;background:#2a2a2a;"
  >
    <!-- Image -->
    <div class="dark-card__img" :class="{ 'dark-card__img--large': large }">
      <img
        v-if="product.images && product.images[0]"
        :src="product.images[0]"
        :alt="product.name"
        style="width:100%;height:100%;object-fit:cover;filter:saturate(0.85);transition:transform 0.6s cubic-bezier(0.4,0,0.2,1),filter 0.4s;"
        :style="hovered ? 'transform:scale(1.06);filter:saturate(1);' : 'transform:scale(1);'"
      />
      <!-- Placeholder when no image -->
      <div v-else style="width:100%;height:100%;background:linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 100%);display:flex;align-items:center;justify-content:center;">
        <svg width="40" height="40" fill="none" stroke="rgba(240,236,227,0.15)" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>
      </div>

      <!-- Overlay on hover -->
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,10,0.85) 0%,transparent 55%);transition:opacity 0.3s;"
        :style="{ opacity: hovered ? 1 : 0 }">
      </div>

      <!-- Action buttons on hover -->
      <div style="position:absolute;bottom:16px;left:16px;right:16px;display:flex;gap:8px;transition:transform 0.3s,opacity 0.3s;"
        :style="{ transform: hovered ? 'translateY(0)' : 'translateY(10px)', opacity: hovered ? 1 : 0 }">
        <button @click.stop="addToCart"
          style="flex:1;background:#f97316;color:#0a0a0a;font-family:'Syne',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;padding:11px 8px;border:none;cursor:pointer;transition:background 0.2s;"
          onmouseover="this.style.background='#f0ece3'" onmouseout="this.style.background='#f97316'">
          Add to Cart
        </button>
        <button @click.stop="goToProduct"
          style="background:rgba(240,236,227,0.15);color:#f0ece3;border:1px solid rgba(240,236,227,0.3);padding:11px 13px;cursor:pointer;font-size:13px;transition:background 0.2s;backdrop-filter:blur(4px);"
          onmouseover="this.style.background='rgba(240,236,227,0.25)'" onmouseout="this.style.background='rgba(240,236,227,0.15)'">
          →
        </button>
      </div>

      <!-- Tags -->
      <span v-if="product.is_featured"
        style="position:absolute;top:14px;left:14px;background:#f97316;color:#0a0a0a;font-family:'Syne',sans-serif;font-size:9px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;padding:4px 9px;">
        Featured
      </span>
      <span v-else-if="isNew"
        style="position:absolute;top:14px;left:14px;background:#f97316;color:#0a0a0a;font-family:'Syne',sans-serif;font-size:9px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;padding:4px 9px;">
        New
      </span>
      <span v-if="hasDiscount"
        :style="product.is_featured || isNew ? 'top:42px;' : 'top:14px;'"
        style="position:absolute;left:14px;background:#e05c2a;color:#fff;font-family:'Syne',sans-serif;font-size:9px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;padding:4px 9px;">
        -{{ discountPct }}%
      </span>
    </div>

    <!-- Info -->
    <div style="padding:14px 18px 18px;">
      <div style="font-family:'Syne',sans-serif;font-size:9px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#5a5a5a;margin-bottom:6px;">
        {{ product.category ? product.category.name : '' }}
      </div>
      <div style="font-family:'Syne',sans-serif;font-size:14px;font-weight:700;color:#f0ece3;margin-bottom:8px;line-height:1.3;">
        {{ product.name }}
      </div>
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-family:'Bebas Neue',cursive;font-size:21px;letter-spacing:0.05em;color:#f97316;">
          ₱{{ formatPrice(product.price) }}
        </span>
        <span v-if="hasDiscount"
          style="font-family:'DM Sans',sans-serif;font-size:12px;color:#5a5a5a;text-decoration:line-through;">
          ₱{{ formatPrice(product.compare_price) }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dark-card { transition: box-shadow 0.3s; }
.dark-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.5); }
.dark-card__img { position: relative; overflow: hidden; aspect-ratio: 3/4; }
.dark-card__img--large { aspect-ratio: auto; height: 100%; }
</style>

<script>
export default {
  name: 'DarkProductCard',
  props: {
    product: { type: Object, required: true },
    large:   { type: Boolean, default: false },
  },
  data() {
    return { hovered: false };
  },
  computed: {
    hasDiscount() {
      return this.product.compare_price && parseFloat(this.product.compare_price) > parseFloat(this.product.price);
    },
    discountPct() {
      if (!this.hasDiscount) return 0;
      return Math.round((1 - parseFloat(this.product.price) / parseFloat(this.product.compare_price)) * 100);
    },
    isNew() {
      if (!this.product.created_at) return false;
      const d = new Date(this.product.created_at);
      return (Date.now() - d.getTime()) < 14 * 24 * 60 * 60 * 1000;
    },
  },
  methods: {
    goToProduct() {
      this.$router.push({ name: 'product-detail', params: { slug: this.product.slug } });
    },
    addToCart() {
      this.$store.dispatch('cart/addItem', {
        product_id:    this.product.id,
        name:          this.product.name,
        price:         parseFloat(this.product.price),
        image:         this.product.image || null,
        slug:          this.product.slug,
        size:          null,
        color:         null,
        quantity:      1,
      });
    },
    formatPrice(val) {
      return Number(val).toLocaleString('en-PH');
    },
  },
};
</script>
