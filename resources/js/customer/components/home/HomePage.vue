<template>
  <CustomerLayout>
    <div class="nn-page">
      <section class="hero">
      <div class="hero-left">
        <div class="hero-tag">SS 2026 Collection</div>
        <h1 class="hero-h1">
          <span class="white">WEAR</span>
          <span class="orange">YOUR</span>
          <span class="outline">VIBE</span>
        </h1>
        <p class="hero-sub">Curated aesthetics for those who live on the edge of culture. Trending styles, bold silhouettes, and unapologetic drip.</p>
        <div class="hero-btns">
          <router-link :to="{ name: 'products' }" class="btn-orange">Explore Collection</router-link>
          <router-link :to="{ name: 'products', query: { sort: 'featured' } }" class="btn-outline">View Featured</router-link>
        </div>
        <div class="hero-stat">
          <strong>2.4K+</strong>
          <span>Happy Drippers</span>
        </div>
      </div>
      <div class="hero-right">
        <div class="hero-right-overlay"></div>
        <img class="hero-product-img" src="/images/products/illus-1.png" alt="Featured product"/>
        <div class="hero-drop-badge">
          <span style="font-size:11px;">2026</span>
          <span style="font-size:16px;font-weight:900;">DROP</span>
        </div>
      </div>
    </section>

    <div class="ticker-bar">
      <div class="ticker-inner">
        <span v-for="(item, i) in tickerItems" :key="`t-${i}`">{{ item }}</span>
        <span v-for="(item, i) in tickerItems" :key="`t2-${i}`">{{ item }}</span>
      </div>
    </div>

    <section class="section">
      <div class="section-head reveal">
        <div class="section-title">TRENDING RIGHT NOW</div>
        <router-link :to="{ name: 'products' }" class="see-all">View all products -></router-link>
      </div>

      <div class="carousel" id="trendCarousel" ref="trendCarousel" @scroll="onCarouselScroll">
        <div v-for="product in trendingProducts" :key="product.id" class="prod-card reveal" :class="product.delayClass">
          <div class="prod-img-wrap">
            <img :src="product.image" :alt="product.name"/>
            <span v-if="product.tag" class="prod-tag" :class="product.tagClass">{{ product.tag }}</span>
            <div class="prod-hover-overlay">
              <button class="quick-peek" @click="goProductListing">Quick View</button>
            </div>
          </div>
          <div class="prod-info">
            <div class="prod-name">{{ product.name }}</div>
            <div class="prod-price-row">
              <span class="prod-price">P{{ product.price }}</span>
              <span v-if="product.oldPrice" class="prod-old">P{{ product.oldPrice }}</span>
            </div>
          </div>
          <button class="quick-add-btn" :class="{ added: addedProductId === product.id }" @click="addToCart(product)">
            {{ addedProductId === product.id ? 'ADDED' : 'ADD TO CART' }}
          </button>
        </div>
      </div>

      <div class="carousel-dots" id="trendDots">
        <div v-for="n in 3" :key="n" class="dot" :class="{ active: activeDot === (n - 1) }" @click="scrollToDot(n - 1)"></div>
      </div>
    </section>

    <div class="collab-banner reveal">
      <div class="collab-img">
        <img src="/images/products/hoodie-maron.png" alt="Collab Drop"/>
      </div>
      <div class="collab-content">
        <div class="collab-eyebrow">+ Limited Collab Drop</div>
        <h2 class="collab-title">DRIP<br>OR<br>SKIP?</h2>
        <p class="collab-body">Curated aesthetics for those who live on the edge of culture. Trending styles, bold silhouettes, and unapologetic drip. Only 100 pieces per design.</p>
        <router-link :to="{ name: 'products', query: { sort: 'featured' } }" class="btn-dark">GRAB THE COLLAB -></router-link>
      </div>
    </div>

    <section class="section">
      <div class="section-head reveal">
        <div class="section-title">SHOP BY CATEGORY</div>
      </div>
      <div class="cats-grid">
        <div v-for="(cat, idx) in categories" :key="cat.name" class="cat-card reveal" :class="idx === 1 ? 'd1' : idx === 2 ? 'd2' : ''">
          <img :src="cat.image" :alt="cat.name"/>
          <div class="cat-overlay"></div>
          <div class="cat-info">
            <div class="cat-name">{{ cat.name }}</div>
            <button class="shop-now-btn" @click="goCategory(cat.slug)">SHOP NOW -></button>
          </div>
        </div>
      </div>
    </section>

    <div class="brands-bar">
      <div class="brands-inner">
        <span v-for="(brand, i) in aestheticStyles" :key="`b-${i}`">{{ brand }}</span>
        <span v-for="(brand, i) in aestheticStyles" :key="`b2-${i}`">{{ brand }}</span>
      </div>
    </div>

    <div class="newsletter reveal">
      <div class="nl-left">
        <div class="nl-eyebrow">+ Stay in the Loop</div>
        <h2 class="nl-title">GET FIRST<br>ACCESS TO<br>EVERY DROP</h2>
      </div>
      <div class="nl-right">
        <form class="nl-form" @submit.prevent="subscribe">
          <input v-model="email" class="nl-input" type="email" placeholder="Email address"/>
          <button class="nl-btn" type="submit">SUBSCRIBE</button>
        </form>
        <p v-if="subscribed" class="nl-note">Thanks. You are subscribed for first drop access.</p>
        <p v-else class="nl-note">No spam. Only drops, lookbooks, and exclusive deals.</p>
      </div>
      <div class="nl-bg">NXT</div>
    </div>

    <div class="seller-cta reveal">
      <div>
        <div class="seller-cta-eye">Sell on NurbanNxt</div>
        <h2 class="seller-cta-title">GROW YOUR<br><span>BRAND</span> WITH US</h2>
        <p class="seller-cta-sub">List your products on NurbanNxt and reach thousands of urban fashion shoppers.</p>
      </div>
      <button class="btn-orange" @click="goAccount">OPEN YOUR STORE -></button>
    </div>

    
  </div>
  </CustomerLayout>
</template>

<script>
import CustomerLayout from '../layout/CustomerLayout.vue';

export default {
  name: 'HomePage',
  components: {
    CustomerLayout
  },
  data() {
    return {
      activeDot: 0,
      subscribed: false,
      email: '',
      addedProductId: null,
      tickerItems: [
        'FREE SHIPPING OVER P2,000',
        'NEW DROPS EVERY FRIDAY',
        'LIMITED EDITION COLLABS',
        'AESTHETIC IS NOT A TREND',
        'FREE RETURNS WITHIN 30 DAYS',
      ],
      aestheticStyles: [
        'Y2K DRIP', 'DARK ACADEMIA', 'STREETWEAR', 'TECHWEAR', 'SOFT GRUNGE', 'GORPCORE', 'INDIE AESTHETIC', 'COASTAL GIRL', 'COTTAGECORE',
      ],
      categories: [
        { name: 'WOMEN', slug: 'women', image: '/images/products/illus-1.png' },
        { name: 'MEN', slug: 'men', image: '/images/products/illus-2.png' },
        { name: 'ACCESSORIES', slug: 'accessories', image: '/images/products/illus-3.png' },
      ],
      trendingProducts: [
        { id: 1, name: 'T-shirt', price: '5.69', oldPrice: '10.59', tag: 'New', tagClass: 'new', delayClass: '', image: '/images/products/illus-1.png' },
        { id: 2, name: 'Jacket hoodie', price: '15.99', oldPrice: '55.99', tag: 'New', tagClass: 'new', delayClass: 'd1', image: '/images/products/illus-2.png' },
        { id: 3, name: 'Test mike', price: '12.99', oldPrice: '15.99', tag: 'New', tagClass: 'new', delayClass: 'd2', image: '/images/products/tshirt-vintage.png' },
        { id: 4, name: 'Navy hoodie', price: '18.99', oldPrice: null, tag: 'Hot', tagClass: 'hot', delayClass: 'd3', image: '/images/products/hoodie-maron.png' },
        { id: 5, name: 'Crew shirt', price: '8.79', oldPrice: null, tag: 'Sale', tagClass: 'sale', delayClass: '', image: '/images/products/tshirt-crew.png' },
        { id: 6, name: 'Street polo', price: '10.99', oldPrice: '13.29', tag: '', tagClass: '', delayClass: 'd1', image: '/images/products/illus-3.png' },
      ],
    };
  },
  computed: {
    cartCount() {
      return this.$store.getters['cart/itemCount'];
    },
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated'];
    },
  },
  mounted() {
    this.initReveal();
    
  },
  beforeDestroy() {
    
    if (this._revealObserver) {
      this._revealObserver.disconnect();
    }
  },
  methods: {
    goSearch() {
      this.$router.push({ name: 'products' });
    },
    goAccount() {
      this.$router.push({ name: this.isAuthenticated ? 'account' : 'login' });
    },
    goProductListing() {
      this.$router.push({ name: 'products' });
    },
    goCategory(slug) {
      this.$router.push({ name: 'products', query: { category: slug } });
    },
    subscribe() {
      if (!this.email || !this.email.includes('@')) return;
      this.subscribed = true;
      this.email = '';
    },
    addToCart(product) {
      this.$store.dispatch('cart/addItem', {
        product_id: product.id,
        name: product.name,
        price: parseFloat(String(product.price).replace(/,/g, '')),
        image: product.image,
        size: null,
        color: null,
        quantity: 1,
      });

      this.addedProductId = product.id;
      clearTimeout(this._addedTimer);
      this._addedTimer = setTimeout(() => {
        this.addedProductId = null;
      }, 1600);
    },
    scrollToDot(idx) {
      const c = this.$refs.trendCarousel;
      if (!c) return;
      const card = c.querySelector('.prod-card');
      if (!card) return;
      c.scrollTo({ left: idx * (card.offsetWidth + 16) * 2, behavior: 'smooth' });
      this.activeDot = idx;
    },
    onCarouselScroll() {
      const c = this.$refs.trendCarousel;
      if (!c) return;
      const card = c.querySelector('.prod-card');
      if (!card) return;
      const idx = Math.min(Math.round(c.scrollLeft / ((card.offsetWidth + 16) * 2)), 2);
      this.activeDot = idx;
    },
    initReveal() {
      this._revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      }, { threshold: 0.1 });

      this.$nextTick(() => {
        this.$el.querySelectorAll('.reveal').forEach((el) => this._revealObserver.observe(el));
      });
    },
  },
};
</script>

<style scoped>
:root {
    --black: #0a0a0a;
    --dark: #111;
    --card: #141414;
    --border: #1a1a1a;
    --white: #f0ece3;
    --muted: rgba(240,236,227,0.6);
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.nn-page {
  background: var(--black);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.nn-nav {
  position: sticky;
  top: 0;
  z-index: 200;
  background: var(--black);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 48px;
  height: 64px;
  gap: 40px;
  transition: box-shadow .3s;
}

.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  letter-spacing: .08em;
  text-decoration: none;
  color: var(--white);
  white-space: nowrap;
}

.nav-logo span { color: var(--orange); }

.nav-links {
  display: flex;
  gap: 0;
  list-style: none;
  flex: 1;
}

.nav-links li a {
  font-family: 'Syne', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: .05em;
  color: var(--muted);
  text-decoration: none;
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: color .2s, border-color .2s;
}

.nav-links li a:hover,
.nav-links li a.active { color: var(--white); border-bottom-color: var(--orange); }

.nav-icons {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
}

.nav-icons button {
  background: none;
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: 4px;
  opacity: .8;
  transition: opacity .2s, color .2s;
  position: relative;
}

.nav-icons button:hover { opacity: 1; color: var(--orange); }

.cart-badge {
  position: absolute;
  top: -4px;
  right: -5px;
  background: var(--orange);
  color: white;
  min-width: 15px;
  height: 15px;
  border-radius: 999px;
  font-size: 8px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  padding: 0 3px;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 64px);
  max-height: 720px;
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 48px;
  position: relative;
}

.hero-tag {
  font-family: 'Syne', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .3em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  animation: fadeUp .7s ease both;
}

.hero-tag::before {
  content: '';
  width: 28px;
  height: 2px;
  background: var(--orange);
}

.hero-h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(72px, 8vw, 120px);
  line-height: .88;
  letter-spacing: .02em;
  animation: fadeUp .7s .1s ease both;
}

.hero-h1 .orange,
.hero-h1 .white,
.hero-h1 .outline { display: block; }
.hero-h1 .orange { color: var(--orange); }
.hero-h1 .white { color: var(--white); }
.hero-h1 .outline {
  color: transparent;
  -webkit-text-stroke: 1.4px rgba(255,255,255,.4);
  text-stroke: 1.4px rgba(255,255,255,.4);
}

.hero-sub {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--muted);
  max-width: 360px;
  margin-top: 22px;
  margin-bottom: 36px;
  animation: fadeUp .7s .2s ease both;
}

.hero-btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  animation: fadeUp .7s .3s ease both;
}

.btn-orange,
.btn-outline,
.btn-dark {
  text-decoration: none;
}

.btn-orange {
  background: var(--orange);
  color: white;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: .18em;
  text-transform: uppercase;
  padding: 13px 28px;
  border: 2px solid var(--orange);
  cursor: pointer;
  transition: background .2s, transform .15s;
}

.btn-orange:hover { background: var(--orange2); transform: translateY(-2px); }

.btn-outline {
  background: transparent;
  color: var(--white);
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: .18em;
  text-transform: uppercase;
  padding: 13px 28px;
  border: 2px solid var(--border);
  cursor: pointer;
  transition: border-color .2s, color .2s;
}

.btn-outline:hover { border-color: var(--orange); color: var(--orange); }

.hero-stat {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--card);
  border: 1px solid var(--border);
  padding: 10px 16px;
  margin-top: 32px;
  width: fit-content;
  border-left: 3px solid var(--orange);
  animation: fadeUp .7s .4s ease both;
}

.hero-stat strong {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 26px;
  color: var(--orange);
  line-height: 1;
}

.hero-stat span {
  font-family: 'Syne', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--muted);
}

.hero-right {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 14%, rgba(249,115,22,.35) 0%, rgba(249,115,22,0) 44%),
    linear-gradient(145deg, #101010 0%, #0a0a0a 55%, #151515 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-product-img {
  width: 100%;
  max-width: none;
  height: 100%;
  object-fit: cover;
  object-position: center 62%;
  position: relative;
  z-index: 2;
  filter: saturate(.92) contrast(1.04) drop-shadow(0 24px 48px rgba(0,0,0,.34));
  animation: floatImg 4s ease-in-out infinite, fadeIn 1s .3s ease both;
}

@keyframes floatImg {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

.hero-drop-badge {
  position: absolute;
  bottom: 36px;
  right: 36px;
  z-index: 3;
  width: 68px;
  height: 68px;
  border: none;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--orange);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 13px;
  line-height: 1.1;
  letter-spacing: .05em;
  color: #111;
  text-align: center;
  box-shadow: 0 4px 24px rgba(0,0,0,.18);
  animation: rotateBadge 14s linear infinite;
}

@keyframes rotateBadge {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

.hero-right-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(249,115,22,.24) 0%, rgba(249,115,22,0) 42%),
    linear-gradient(0deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,0) 45%);
  z-index: 1;
  pointer-events: none;
}

.ticker-bar { 
  background: var(--orange); 
  overflow: hidden; 
  padding: 10px 0; 
  white-space: nowrap; 
  margin: 0;
  width: 100%;
}
.ticker-inner { display: inline-flex; animation: scrollX 28s linear infinite; }
.ticker-inner span {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 15px;
  letter-spacing: .12em;
  color: white;
  padding: 0 28px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.ticker-inner span::after { content: '\2022'; font-size: 10px; opacity: .7; }

@keyframes scrollX {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.section { 
  padding: 64px 48px; 
  margin: 0;
}
.section-head { 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: 28px; 
}
.section-title { font-family: 'Bebas Neue', sans-serif; font-size: 28px; letter-spacing: .06em; color: var(--white); }
.see-all {
  font-family: 'Syne', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--orange);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: gap .2s;
}
.see-all:hover { gap: 10px; }

.carousel {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 4px;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar { display: none; }

.prod-card {
  flex: 0 0 210px;
  scroll-snap-align: start;
  background: var(--card);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: border-color .25s, transform .25s;
}
.prod-card:hover { border-color: var(--orange); transform: translateY(-4px); }

.prod-img-wrap { background: #f5f4f2; height: 240px; position: relative; overflow: hidden; }
.prod-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
.prod-card:hover .prod-img-wrap img { transform: scale(1.06); }

.prod-hover-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.42);
  opacity: 0;
  transition: opacity .25s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.prod-card:hover .prod-hover-overlay { opacity: 1; }

.quick-peek {
  background: rgba(255,255,255,.12);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,.3);
  color: white;
  font-family: 'Syne', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
  padding: 9px 18px;
  cursor: pointer;
  transition: background .2s, border-color .2s;
}
.quick-peek:hover { background: var(--orange); border-color: var(--orange); }

.prod-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-family: 'Syne', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
  padding: 3px 9px;
}
.prod-tag.sale { background: var(--orange); }
.prod-tag.new { background: #22c55e; }
.prod-tag.hot { background: #ef4444; }

.prod-info { padding: 12px 14px 4px; }
.prod-name {
  font-family: 'Syne', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.prod-price-row { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
.prod-price { font-family: 'Bebas Neue', sans-serif; font-size: 20px; letter-spacing: .05em; color: var(--orange); }
.prod-old { font-size: 12px; color: var(--muted); text-decoration: line-through; }

.quick-add-btn {
  width: 100%;
  background: var(--dark);
  color: var(--white);
  border: 1px solid var(--border);
  font-family: 'Syne', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  padding: 11px;
  cursor: pointer;
  transition: background .2s, border-color .2s, color .2s;
}
.quick-add-btn:hover { background: var(--orange); border-color: var(--orange); color: white; }
.quick-add-btn.added { background: #22c55e; border-color: #22c55e; color: #fff; }

.carousel-dots { display: flex; gap: 6px; justify-content: center; margin-top: 22px; }
.dot { width: 24px; height: 4px; border-radius: 2px; background: var(--border); cursor: pointer; transition: background .2s, width .25s; }
.dot.active { background: var(--orange); width: 38px; }

.collab-banner {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  min-height: 340px;
  border: 1px solid var(--border);
  width: 100%;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.collab-img { position: relative; overflow: hidden; background: #1a1015; }
.collab-img img { width: 100%; height: 100%; object-fit: cover; filter: saturate(.75) brightness(.8); transition: transform .6s, filter .4s; }
.collab-banner:hover .collab-img img { transform: scale(1.04); filter: saturate(.9) brightness(.88); }

.collab-content {
  background: var(--orange);
  padding: 52px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.collab-content::before {
  content: 'DROP';
  position: absolute;
  right: -16px;
  bottom: -24px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 150px;
  color: rgba(0,0,0,.08);
  line-height: 1;
  pointer-events: none;
}

.collab-eyebrow {
  font-family: 'Syne', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .3em;
  text-transform: uppercase;
  color: rgba(0,0,0,.55);
  margin-bottom: 14px;
}

.collab-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(42px, 4vw, 68px);
  line-height: .88;
  letter-spacing: .02em;
  color: var(--black);
  margin-bottom: 18px;
}

.collab-body {
  font-size: 13px;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(0,0,0,.65);
  max-width: 290px;
  margin-bottom: 28px;
}

.btn-dark {
  background: var(--black);
  color: var(--white);
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: .2em;
  text-transform: uppercase;
  padding: 13px 28px;
  border: none;
  cursor: pointer;
  width: fit-content;
  transition: background .2s;
}
.btn-dark:hover { background: #222; }

.cats-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
.cat-card { position: relative; overflow: hidden; aspect-ratio: 4/5; cursor: pointer; background: var(--card); }
.cat-card img { width: 100%; height: 100%; object-fit: cover; filter: brightness(.5) saturate(.65); transition: filter .5s, transform .6s; }
.cat-card:hover img { filter: brightness(.68) saturate(.9); transform: scale(1.06); }
.cat-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.78) 0%, transparent 55%); }
.cat-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 28px 24px; }
.cat-name { font-family: 'Bebas Neue', sans-serif; font-size: 38px; letter-spacing: .06em; color: white; line-height: 1; margin-bottom: 12px; }
.shop-now-btn {
  background: var(--orange);
  color: white;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 10px;
  letter-spacing: .2em;
  text-transform: uppercase;
  padding: 8px 18px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transform: translateY(6px);
  opacity: 0;
  transition: opacity .3s, transform .3s, background .2s;
}
.cat-card:hover .shop-now-btn { opacity: 1; transform: translateY(0); }
.shop-now-btn:hover { background: var(--orange2); }

.brands-bar { 
  border-top: 1px solid var(--border); 
  border-bottom: 1px solid var(--border); 
  overflow: hidden; 
  padding: 20px 0; 
  margin: 0;
  width: 100%;
}
.brands-inner { display: inline-flex; animation: scrollX 22s linear infinite; }
.brands-inner span {
  font-family: 'Syne', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .3em;
  text-transform: uppercase;
  color: var(--border);
  padding: 0 36px;
  transition: color .2s;
  cursor: default;
}
.brands-inner span:hover { color: var(--orange); }

.newsletter {
  background: var(--orange);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 64px 80px;
  gap: 48px;
  position: relative;
  overflow: hidden;
  margin: 0;
  width: 100%;
}

.seller-cta {
  margin: 0;
  border: none;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 52px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  background: rgba(22,22,22,.7);
  width: 100%;
}
.seller-cta-eye {
  font-family: 'Syne', sans-serif;
  font-size: 10px;
  letter-spacing: .28em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 10px;
}
.seller-cta-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(42px, 4vw, 64px);
  line-height: .9;
  letter-spacing: .02em;
  margin-bottom: 12px;
}
.seller-cta-title span { color: var(--orange); }
.seller-cta-sub {
  font-size: 14px;
  color: var(--muted);
  max-width: 420px;
  line-height: 1.7;
}
.nl-bg {
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 230px;
  color: rgba(0,0,0,.07);
  line-height: 1;
  pointer-events: none;
  white-space: nowrap;
}
.nl-left { position: relative; z-index: 1; }
.nl-eyebrow { font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: .3em; text-transform: uppercase; color: rgba(0,0,0,.5); margin-bottom: 12px; }
.nl-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(36px,3.5vw,58px); line-height: .9; color: var(--black); letter-spacing: .02em; }
.nl-right { position: relative; z-index: 1; flex: 0 0 400px; }
.nl-form { display: flex; border: 2px solid var(--black); margin-bottom: 10px; }
.nl-input { flex: 1; background: white; border: none; outline: none; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--black); padding: 14px 18px; }
.nl-input::placeholder { color: #aaa; }
.nl-btn {
  background: var(--black);
  color: var(--white);
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: .2em;
  text-transform: uppercase;
  padding: 14px 22px;
  border: none;
  cursor: pointer;
  transition: background .2s;
}
.nl-btn:hover { background: #1a1a1a; }
.nl-note { font-size: 12px; color: rgba(0,0,0,.5); font-style: italic; }

footer { 
  background: var(--dark); 
  border-top: 1px solid var(--border); 
  padding: 64px 48px 32px; 
  margin: 0;
  width: 100%;
}
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
.footer-logo { font-family: 'Bebas Neue', sans-serif; font-size: 38px; letter-spacing: .08em; color: var(--white); margin-bottom: 16px; }
.footer-logo span { color: var(--orange); }
.footer-desc { font-size: 13px; font-weight: 300; line-height: 1.8; color: var(--muted); max-width: 260px; margin-bottom: 24px; }
.footer-socials { display: flex; gap: 10px; }
.social-icon {
  width: 34px;
  height: 34px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  font-size: 11px;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background .2s, border-color .2s, color .2s;
}
.social-icon:hover { background: var(--orange); border-color: var(--orange); color: white; }
.footer-col h4 { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--white); margin-bottom: 18px; }
.footer-col ul { list-style: none; }
.footer-col ul li { margin-bottom: 11px; }
.footer-col ul li a {
  font-size: 13px;
  font-weight: 300;
  color: var(--muted);
  text-decoration: none;
  transition: color .2s;
}
.footer-col ul li a:hover { color: var(--orange); }
.footer-bottom { border-top: 1px solid var(--border); padding-top: 24px; display: flex; align-items: center; justify-content: space-between; }
.footer-copy { font-size: 12px; color: #444; font-weight: 300; }
.pay-methods { display: flex; gap: 8px; }
.pay-chip { border: 1px solid var(--border); padding: 4px 10px; font-family: 'Syne', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: .1em; color: #444; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: none; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity .7s ease, transform .7s ease;
}
.reveal.in { opacity: 1; transform: none; }
.d1 { transition-delay: .1s; }
.d2 { transition-delay: .2s; }
.d3 { transition-delay: .3s; }

@media (max-width: 1024px) {
  .nn-nav { padding: 0 24px; gap: 20px; }
  .hero { grid-template-columns: 1fr; max-height: none; }
  .hero-right { min-height: 340px; }
  .section, footer { padding-left: 24px; padding-right: 24px; }
  .collab-banner { grid-template-columns: 1fr; }
  .seller-cta { padding: 36px 24px; flex-direction: column; align-items: flex-start; }
  .newsletter { padding: 44px 24px; flex-direction: column; align-items: flex-start; }
  .nl-right { flex: 1 1 auto; width: 100%; }
  .cats-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
}
</style>

