<template>
  <div style="background:#0a0a0a;min-height:100vh;overflow-x:hidden;">
    <!-- ── Grain overlay ─────────────────────────────── -->
    <div class="nn-grain"></div>

    <!-- ── NAV ───────────────────────────────────────── -->
    <header ref="nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style="padding:20px 48px;display:flex;align-items:center;justify-content:space-between;">
      <!-- Fade gradient beneath nav -->
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,10,10,0.95) 0%,transparent 100%);pointer-events:none;"></div>

      <!-- Logo -->
      <router-link :to="{ name: 'home' }" style="position:relative;text-decoration:none;">
        <span style="font-family:'Bebas Neue',cursive;font-size:26px;letter-spacing:0.12em;color:#f97316;">Nurban</span><span style="font-family:'Bebas Neue',cursive;font-size:26px;letter-spacing:0.12em;color:#f0ece3;">Nxt</span>
      </router-link>

      <!-- Desktop links -->
      <nav class="hidden md:flex" style="gap:32px;list-style:none;position:relative;">
        <router-link :to="{ name: 'products' }"
          style="font-family:'Syne',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:rgba(240,236,227,0.7);text-decoration:none;transition:color 0.2s;"
         >Shop</router-link>
        <router-link :to="{ name: 'products', query: { sort: 'featured' } }"
          style="font-family:'Syne',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:rgba(240,236,227,0.7);text-decoration:none;transition:color 0.2s;"
         >Featured</router-link>
        <router-link :to="{ name: 'products', query: { sort: 'latest' } }"
          style="font-family:'Syne',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:rgba(240,236,227,0.7);text-decoration:none;transition:color 0.2s;"
         >New In</router-link>
      </nav>

      <!-- Right controls -->
      <div style="display:flex;align-items:center;gap:20px;position:relative;">
        <!-- Search -->
        <button @click="searchOpen = !searchOpen"
          style="background:none;border:none;color:rgba(240,236,227,0.65);cursor:pointer;padding:6px;transition:color 0.2s;"
          onmouseover="this.style.color='#f97316'" onmouseout="this.style.color='rgba(240,236,227,0.65)'">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </button>

        <!-- Cart -->
        <router-link :to="{ name: 'cart' }"
          style="position:relative;text-decoration:none;color:rgba(240,236,227,0.65);padding:6px;transition:color 0.2s;"
          onmouseover="this.style.color='#f97316'" onmouseout="this.style.color='rgba(240,236,227,0.65)'">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <span v-if="cartCount > 0"
            style="position:absolute;top:-4px;right:-4px;background:#e05c2a;color:white;width:16px;height:16px;border-radius:50%;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;">
            {{ cartCount > 9 ? '9+' : cartCount }}
          </span>
        </router-link>

        <!-- Account -->
        <div style="position:relative;" @mouseenter="accountOpen = true" @mouseleave="accountOpen = false">
          <button
            style="background:none;border:none;color:rgba(240,236,227,0.65);cursor:pointer;padding:6px 14px;font-family:'Syne',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;transition:color 0.2s;display:flex;align-items:center;gap:6px;"
            onmouseover="this.style.color='#f97316'" onmouseout="this.style.color='rgba(240,236,227,0.65)'">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span class="hidden sm:inline">{{ isAuthenticated ? firstName : 'Account' }}</span>
          </button>
          <div v-if="accountOpen"
            style="position:absolute;right:0;top:100%;background:#1a1a1a;border:1px solid rgba(240,236,227,0.1);padding:6px 0;min-width:160px;z-index:60;">
            <template v-if="isAuthenticated">
              <router-link :to="{ name: 'account' }" class="nav-dropdown-item">My Account</router-link>
              <router-link :to="{ name: 'orders' }" class="nav-dropdown-item">My Orders</router-link>
              <div style="height:1px;background:rgba(240,236,227,0.08);margin:4px 0;"></div>
              <button @click="logout" class="nav-dropdown-item" style="width:100%;text-align:left;background:none;border:none;color:#e05c2a;cursor:pointer;">Sign Out</button>
            </template>
            <template v-else>
              <router-link :to="{ name: 'login' }" class="nav-dropdown-item">Sign In</router-link>
              <router-link :to="{ name: 'register' }" class="nav-dropdown-item">Create Account</router-link>
            </template>
          </div>
        </div>

        <!-- Mobile hamburger -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden"
          style="background:none;border:none;color:rgba(240,236,227,0.7);cursor:pointer;padding:6px;">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path v-if="!mobileOpen" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Search bar dropdown -->
      <div v-if="searchOpen"
        style="position:absolute;top:100%;left:0;right:0;background:#111;padding:12px 48px;border-bottom:1px solid rgba(240,236,227,0.08);">
        <div style="display:flex;gap:8px;max-width:600px;margin:0 auto;">
          <input v-model="searchQuery" @keyup.enter="doSearch" type="text" placeholder="Search streetwear…"
            autofocus class="input-field" style="flex:1;font-size:14px;" />
          <button @click="doSearch" class="btn-primary" style="padding:12px 20px;flex-shrink:0;">Search</button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileOpen"
        style="position:absolute;top:100%;left:0;right:0;background:#111;border-bottom:1px solid rgba(240,236,227,0.08);padding:12px 24px 20px;">
        <router-link @click.native="mobileOpen=false" :to="{ name: 'products' }" class="mobile-nav-item">Shop</router-link>
        <router-link @click.native="mobileOpen=false" :to="{ name: 'products', query: { sort: 'featured' } }" class="mobile-nav-item">Featured</router-link>
        <router-link @click.native="mobileOpen=false" :to="{ name: 'products', query: { sort: 'latest' } }" class="mobile-nav-item">New In</router-link>
        <div style="height:1px;background:rgba(240,236,227,0.08);margin:8px 0;"></div>
        <template v-if="isAuthenticated">
          <router-link @click.native="mobileOpen=false" :to="{ name: 'account' }" class="mobile-nav-item">My Account</router-link>
          <router-link @click.native="mobileOpen=false" :to="{ name: 'orders' }" class="mobile-nav-item">My Orders</router-link>
          <button @click="logout" class="mobile-nav-item" style="background:none;border:none;text-align:left;color:#e05c2a;cursor:pointer;">Sign Out</button>
        </template>
        <template v-else>
          <router-link @click.native="mobileOpen=false" :to="{ name: 'login' }" class="mobile-nav-item">Sign In</router-link>
          <router-link @click.native="mobileOpen=false" :to="{ name: 'register' }" class="mobile-nav-item">Create Account</router-link>
        </template>
      </div>
    </header>

    <!-- ── HERO ───────────────────────────────────────── -->
    <section class="hero-grid" style="min-height:100vh;display:grid;grid-template-columns:1fr 1fr;position:relative;overflow:hidden;">
      <!-- Left content -->
      <div ref="heroLeft" style="display:flex;flex-direction:column;justify-content:flex-end;padding:160px 48px 80px;position:relative;z-index:2;">
        <div class="hero-tag nn-reveal" style="font-family:'Syne',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:#f97316;margin-bottom:24px;display:flex;align-items:center;gap:12px;">
          <span style="display:block;width:40px;height:1px;background:#f97316;"></span>
          SS 2026 Collection
        </div>
        <h1 ref="heroTitle" style="font-family:'Bebas Neue',cursive;font-size:clamp(80px,9vw,140px);line-height:0.92;letter-spacing:0.02em;color:#f0ece3;margin-bottom:0;">
          <span style="display:block;">WEAR</span>
          <span style="display:block;color:#f97316;">YOUR</span>
          <span style="display:block;-webkit-text-stroke:1px #f0ece3;color:transparent;">VIBE</span>
        </h1>
        <p style="font-family:'DM Sans',sans-serif;font-size:15px;font-weight:300;line-height:1.7;color:rgba(240,236,227,0.6);max-width:380px;margin-top:28px;">
          Curated aesthetics for those who live on the edge of culture. Trending styles, bold silhouettes, and unapologetic drip.
        </p>
        <div style="display:flex;align-items:center;gap:20px;margin-top:44px;flex-wrap:wrap;">
          <router-link :to="{ name: 'products' }" class="btn-primary">
            Explore Collection
          </router-link>
          <router-link :to="{ name: 'products', query: { sort: 'featured' } }" class="btn-ghost">
            View Featured
          </router-link>
        </div>

        <!-- Stats pill — anchored right in the left panel -->
        <div style="display:inline-flex;align-items:center;gap:16px;background:#1a1a1a;border-left:3px solid #f97316;padding:14px 20px;margin-top:28px;align-self:flex-start;">
          <div>
            <div style="font-family:'Bebas Neue',cursive;font-size:28px;color:#f97316;line-height:1;">2.4K+</div>
            <div style="font-family:'Syne',sans-serif;font-size:9px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:rgba(240,236,227,0.5);margin-top:2px;">Happy Drippers</div>
          </div>
          <div style="width:1px;height:36px;background:rgba(240,236,227,0.1);"></div>
          <div style="font-family:'DM Sans',sans-serif;font-size:12px;font-weight:300;color:rgba(240,236,227,0.4);line-height:1.5;">Join the<br>culture.</div>
        </div>
      </div>

      <!-- Right image -->
      <div ref="heroRight" style="position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;overflow:hidden;">
          <img src="/images/products/illus-hero.png" alt="Hero look"
            ref="heroImg"
            style="width:100%;height:100%;object-fit:cover;filter:saturate(0.85) contrast(1.1);transform:scale(1.04);transition:transform 8s ease;" />
          <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(10,10,10,0.5) 0%,transparent 60%);"></div>
        </div>
        <!-- Spinning badge -->
        <div class="nn-badge-anim"
          style="position:absolute;bottom:48px;right:48px;background:#f97316;color:#0a0a0a;width:88px;height:88px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:'Bebas Neue',cursive;z-index:5;">
          <span style="font-size:10px;letter-spacing:0.15em;">NEW</span>
          <strong style="font-size:22px;line-height:1;">DROP</strong>
          <span style="font-size:10px;letter-spacing:0.1em;">2026</span>
        </div>
        <!-- Stats pill removed from here, now in left panel -->
      </div>
    </section>

    <!-- ── TICKER ─────────────────────────────────────── -->
    <div style="background:#f97316;overflow:hidden;padding:12px 0;position:relative;z-index:10;">
      <div class="nn-ticker" style="display:flex;white-space:nowrap;">
        <span v-for="item in tickerItems" :key="item" style="font-family:'Bebas Neue',cursive;font-size:17px;letter-spacing:0.1em;color:#0a0a0a;padding:0 28px;display:inline-flex;align-items:center;gap:14px;">
          <span style="width:5px;height:5px;background:#0a0a0a;border-radius:50%;flex-shrink:0;display:inline-block;"></span>
          {{ item }}
        </span>
        <!-- Duplicate for seamless loop -->
        <span v-for="item in tickerItems" :key="'b-'+item" style="font-family:'Bebas Neue',cursive;font-size:17px;letter-spacing:0.1em;color:#0a0a0a;padding:0 28px;display:inline-flex;align-items:center;gap:14px;">
          <span style="width:5px;height:5px;background:#0a0a0a;border-radius:50%;flex-shrink:0;display:inline-block;"></span>
          {{ item }}
        </span>
      </div>
    </div>

    <!-- ── FEATURED PRODUCTS ──────────────────────────── -->
    <section style="padding:100px 48px;" ref="featuredSection">
      <div class="nn-reveal" style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:60px;flex-wrap:wrap;gap:16px;">
        <div>
          <div class="section-label">This Week's Drops</div>
          <h2 style="font-family:'Bebas Neue',cursive;font-size:clamp(48px,5vw,72px);line-height:0.95;letter-spacing:0.02em;color:#f0ece3;">
            TRENDING <span style="-webkit-text-stroke:1px rgba(240,236,227,0.4);color:transparent;">RIGHT</span><br>NOW
          </h2>
        </div>
        <router-link :to="{ name: 'products', query: { sort: 'featured' } }"
          style="font-family:'Syne',sans-serif;font-weight:600;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,236,227,0.5);text-decoration:none;border-bottom:1px solid currentColor;padding-bottom:2px;transition:color 0.2s;margin-bottom:8px;"
         
          onmouseover="this.style.color='#f97316'" onmouseout="this.style.color='rgba(240,236,227,0.5)'">
          View All Products →
        </router-link>
      </div>

      <!-- Skeleton -->
      <div v-if="loadingFeatured" style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;">
        <div v-for="n in 4" :key="n"
          style="background:#1a1a1a;aspect-ratio:3/4;" class="animate-pulse">
          <div v-if="n===1" style="aspect-ratio:auto;height:100%;"></div>
        </div>
      </div>

      <!-- Products grid — editorial layout when ≥4 items -->
      <div v-else-if="featuredProducts.length" class="featured-grid">
        <DarkProductCard
          v-for="(product, i) in featuredProducts.slice(0, 5)"
          :key="product.id"
          :product="product"
          :large="i === 0"
          :class="i === 0 ? 'featured-large' : ''"
        />
      </div>

      <div v-else style="text-align:center;padding:80px 0;color:rgba(240,236,227,0.4);">
        <p style="font-family:'Syne',sans-serif;font-size:14px;letter-spacing:0.1em;">No featured products yet. Check back soon!</p>
      </div>
    </section>

    <!-- ── COLLAB BANNER ──────────────────────────────── -->
    <div class="nn-reveal" style="margin:0 48px 80px;background:#2a2a2a;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;position:relative;min-height:480px;">
      <div style="padding:80px 64px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:2;">
        <div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.35em;text-transform:uppercase;color:#e05c2a;margin-bottom:20px;">✦ Limited Collab Drop</div>
        <h2 style="font-family:'Bebas Neue',cursive;font-size:clamp(52px,5vw,80px);line-height:0.93;letter-spacing:0.02em;margin-bottom:24px;">
          DRIP<br>OR<br><span style="color:#e05c2a;">SKIP?</span>
        </h2>
        <p style="font-size:14px;line-height:1.8;font-weight:300;color:rgba(240,236,227,0.65);max-width:340px;margin-bottom:36px;">
          Our exclusive collab capsule is here — raw, unfiltered streetwear energy meets curated aesthetic precision. Only 100 pieces per design.
        </p>
        <router-link :to="{ name: 'products', query: { sort: 'featured' } }" class="btn-primary"
          style="width:fit-content"
         >
          Grab the Collab →
        </router-link>
      </div>
      <div style="position:relative;overflow:hidden;">
        <img src="/images/products/hoodie-maron.png" alt="Collab drop"
          style="width:100%;height:100%;object-fit:cover;filter:saturate(0.8) contrast(1.1);transform:scale(1.03);transition:transform 6s ease;" />
        <div style="position:absolute;inset:0;background:linear-gradient(to left,transparent,rgba(10,10,10,0.2));"></div>
      </div>
      <!-- Background watermark -->
      <div style="position:absolute;right:-10px;top:50%;transform:translateY(-50%) rotate(90deg);font-family:'Bebas Neue',cursive;font-size:160px;color:rgba(240,236,227,0.03);pointer-events:none;letter-spacing:0.05em;white-space:nowrap;">COLLAB</div>
    </div>

    <!-- ── NEW ARRIVALS ───────────────────────────────── -->
    <section style="padding:100px 48px;" ref="newSection">
      <div class="nn-reveal" style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:60px;flex-wrap:wrap;gap:16px;">
        <div>
          <div class="section-label">Just Landed</div>
          <h2 style="font-family:'Bebas Neue',cursive;font-size:clamp(48px,5vw,72px);line-height:0.95;letter-spacing:0.02em;color:#f0ece3;">
            NEW <span style="-webkit-text-stroke:1px rgba(240,236,227,0.4);color:transparent;">ARRIVALS</span>
          </h2>
        </div>
        <router-link :to="{ name: 'products', query: { sort: 'latest' } }"
          style="font-family:'Syne',sans-serif;font-weight:600;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(240,236,227,0.5);text-decoration:none;border-bottom:1px solid currentColor;padding-bottom:2px;transition:color 0.2s;margin-bottom:8px;"
         
          onmouseover="this.style.color='#f97316'" onmouseout="this.style.color='rgba(240,236,227,0.5)'">
          View All →
        </router-link>
      </div>

      <div v-if="loadingNew" style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;">
        <div v-for="n in 4" :key="n" style="background:#1a1a1a;aspect-ratio:3/4;" class="animate-pulse"></div>
      </div>

      <div v-else-if="newProducts.length" style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;" class="sm:grid-cols-2">
        <DarkProductCard
          v-for="product in newProducts.slice(0, 4)"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>

    <!-- ── CATEGORIES ─────────────────────────────────── -->
    <section style="padding:0 48px 100px;">
      <div class="nn-reveal" style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:60px;flex-wrap:wrap;gap:16px;">
        <div>
          <div class="section-label">Browse By Vibe</div>
          <h2 style="font-family:'Bebas Neue',cursive;font-size:clamp(48px,5vw,72px);line-height:0.95;letter-spacing:0.02em;color:#f0ece3;">
            SHOP BY<br><span style="-webkit-text-stroke:1px rgba(240,236,227,0.4);color:transparent;">CATEGORY</span>
          </h2>
        </div>
      </div>

      <!-- Static category cards + dynamic pills -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;" class="nn-reveal">
        <!-- Static cards using real images -->
        <div v-for="(cat, i) in catCards" :key="'cat-'+i"
          style="position:relative;overflow:hidden;aspect-ratio:3/4;cursor:none;background:#2a2a2a;"
         >
          <img :src="cat.img" :alt="cat.name"
            style="width:100%;height:100%;object-fit:cover;filter:saturate(0.5) brightness(0.75);transition:filter 0.5s,transform 0.6s;transform:scale(1.04);"
            onmouseover="this.style.filter='saturate(0.9) brightness(0.85)';this.style.transform='scale(1)'"
            onmouseout="this.style.filter='saturate(0.5) brightness(0.75)';this.style.transform='scale(1.04)'" />
          <div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:36px;">
            <div style="font-family:'Bebas Neue',cursive;font-size:clamp(36px,3vw,52px);letter-spacing:0.04em;color:#f0ece3;line-height:0.95;margin-bottom:8px;">{{ cat.name }}</div>
            <router-link :to="cat.to" class="btn-primary" style="width:fit-content;margin-top:12px;font-size:10px;padding:10px 22px;"
             >
              Shop Now →
            </router-link>
          </div>
          <div style="position:absolute;top:20px;right:20px;width:38px;height:38px;border:1px solid rgba(240,236,227,0.3);display:flex;align-items:center;justify-content:center;color:#f0ece3;font-size:16px;transition:all 0.3s;"
            onmouseover="this.style.background='#f97316';this.style.borderColor='#f97316';this.style.color='#0a0a0a'"
            onmouseout="this.style.background='transparent';this.style.borderColor='rgba(240,236,227,0.3)';this.style.color='#f0ece3'">→</div>
        </div>
      </div>

      <!-- Dynamic category pills (from API) -->
      <div v-if="categories.length" style="display:flex;gap:10px;flex-wrap:wrap;margin-top:32px;">
        <router-link
          :to="{ name: 'products' }"
          style="padding:8px 20px;background:#f97316;color:#0a0a0a;font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;transition:background 0.2s;"
         >
          All
        </router-link>
        <router-link
          v-for="cat in categories"
          :key="cat.id"
          :to="{ name: 'products', query: { category: cat.slug } }"
          style="padding:8px 20px;background:transparent;border:1px solid rgba(240,236,227,0.2);color:rgba(240,236,227,0.7);font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;text-decoration:none;transition:all 0.2s;white-space:nowrap;"
         
          onmouseover="this.style.borderColor='#f97316';this.style.color='#f97316'"
          onmouseout="this.style.borderColor='rgba(240,236,227,0.2)';this.style.color='rgba(240,236,227,0.7)'">
          {{ cat.name }}
        </router-link>
      </div>
    </section>

    <!-- ── AESTHETIC BRANDS MARQUEE ───────────────────── -->
    <div style="border-top:1px solid rgba(240,236,227,0.07);border-bottom:1px solid rgba(240,236,227,0.07);padding:24px 0;overflow:hidden;margin-bottom:80px;">
      <div class="nn-ticker-slow" style="display:flex;white-space:nowrap;">
        <span v-for="style in aestheticStyles" :key="style"
          style="font-family:'Bebas Neue',cursive;font-size:15px;letter-spacing:0.25em;color:rgba(240,236,227,0.18);padding:0 36px;transition:color 0.3s;cursor:none;"
          @mouseenter="$event.target.style.color='#f97316'" @mouseleave="$event.target.style.color='rgba(240,236,227,0.18)'">
          {{ style }}
        </span>
        <span v-for="style in aestheticStyles" :key="'b-'+style"
          style="font-family:'Bebas Neue',cursive;font-size:15px;letter-spacing:0.25em;color:rgba(240,236,227,0.18);padding:0 36px;transition:color 0.3s;cursor:none;"
          @mouseenter="$event.target.style.color='#f97316'" @mouseleave="$event.target.style.color='rgba(240,236,227,0.18)'">
          {{ style }}
        </span>
      </div>
    </div>

    <!-- ── NEWSLETTER ──────────────────────────────────── -->
    <div class="nn-reveal" style="margin:0 48px 100px;background:#f97316;padding:80px;display:flex;align-items:center;justify-content:space-between;gap:48px;overflow:hidden;position:relative;flex-wrap:wrap;">
      <div style="position:relative;z-index:1;">
        <div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:rgba(10,10,10,0.6);margin-bottom:16px;">✦ Stay in the Loop</div>
        <h2 style="font-family:'Bebas Neue',cursive;font-size:clamp(44px,4vw,64px);line-height:0.92;color:#0a0a0a;letter-spacing:0.02em;">
          GET FIRST<br>ACCESS TO<br>EVERY DROP
        </h2>
      </div>
      <div style="position:relative;z-index:1;flex:0 0 min(420px, 100%);">
        <div style="display:flex;border:2px solid #0a0a0a;">
          <input v-model="email" type="email" placeholder="your@email.com"
            style="flex:1;background:transparent;border:none;outline:none;font-family:'DM Sans',sans-serif;font-size:14px;color:#0a0a0a;padding:14px 18px;"
            />
          <button @click="subscribeEmail"
            style="background:#0a0a0a;color:#f97316;font-family:'Syne',sans-serif;font-weight:700;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;padding:14px 22px;border:none;cursor:none;transition:background 0.2s;"
            onmouseover="this.style.background='#1a1a1a'" onmouseout="this.style.background='#0a0a0a'"
           >
            Subscribe →
          </button>
        </div>
        <p v-if="subscribeSuccess" style="font-size:12px;color:#0a0a0a;margin-top:10px;font-style:italic;">🎉 You're on the list! First drops coming your way.</p>
        <p v-else style="font-size:12px;color:rgba(10,10,10,0.5);margin-top:10px;font-style:italic;">No spam. Only drops, lookbooks, and exclusive deals.</p>
      </div>
      <!-- Watermark -->
      <div style="position:absolute;right:-20px;top:50%;transform:translateY(-50%);font-family:'Bebas Neue',cursive;font-size:200px;color:rgba(10,10,10,0.06);pointer-events:none;letter-spacing:-0.02em;white-space:nowrap;line-height:1;">NXT</div>
    </div>

    <!-- ── SELLER BANNER ──────────────────────────────── -->
    <div style="margin:0 48px 80px;background:#111;border:1px solid rgba(240,236,227,0.07);padding:60px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:32px;">
      <div>
        <div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:rgba(240,236,227,0.4);margin-bottom:12px;">Sell on NurbanNxt</div>
        <h3 style="font-family:'Bebas Neue',cursive;font-size:clamp(36px,4vw,56px);line-height:0.95;color:#f0ece3;">
          GROW YOUR<br><span style="color:#f97316;">BRAND</span> WITH US
        </h3>
        <p style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:300;color:rgba(240,236,227,0.55);max-width:360px;margin-top:16px;line-height:1.7;">
          List your products on NurbanNxt and reach thousands of urban fashion shoppers.
        </p>
      </div>
      <a href="/seller" class="btn-primary" style="flex-shrink:0;"
       >
        Open Your Store →
      </a>
    </div>

    <!-- ── FOOTER ─────────────────────────────────────── -->
    <footer style="background:#2a2a2a;padding:80px 48px 40px;border-top:1px solid rgba(240,236,227,0.05);">
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:60px;" class="footer-grid">
        <!-- Brand -->
        <div>
          <div style="font-family:'Bebas Neue',cursive;font-size:40px;letter-spacing:0.1em;margin-bottom:16px;">
            <span style="color:#f97316;">Nurban</span><span style="color:#f0ece3;">Nxt</span>
          </div>
          <p style="font-size:13px;line-height:1.8;font-weight:300;color:rgba(240,236,227,0.4);max-width:260px;margin-bottom:24px;">
            Aesthetic clothing for the culturally wired. We design for those who live ahead of the trend.
          </p>
          <div style="display:flex;gap:10px;">
            <a v-for="soc in socials" :key="soc" href="#"
              style="width:34px;height:34px;border:1px solid rgba(240,236,227,0.18);display:flex;align-items:center;justify-content:center;color:rgba(240,236,227,0.45);font-family:'Syne',sans-serif;font-size:11px;font-weight:700;text-decoration:none;transition:all 0.2s;"
             
              onmouseover="this.style.background='#f97316';this.style.borderColor='#f97316';this.style.color='#0a0a0a'"
              onmouseout="this.style.background='transparent';this.style.borderColor='rgba(240,236,227,0.18)';this.style.color='rgba(240,236,227,0.45)'">
              {{ soc }}
            </a>
          </div>
        </div>
        <!-- Shop -->
        <div>
          <div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#f0ece3;margin-bottom:20px;">Shop</div>
          <ul style="list-style:none;padding:0;margin:0;">
            <li style="margin-bottom:12px;"><router-link :to="{ name: 'products' }" class="footer-link">All Products</router-link></li>
            <li style="margin-bottom:12px;"><router-link :to="{ name: 'products', query: { sort: 'featured' } }" class="footer-link">Featured</router-link></li>
            <li style="margin-bottom:12px;"><router-link :to="{ name: 'products', query: { sort: 'latest' } }" class="footer-link">New Arrivals</router-link></li>
            <li><router-link :to="{ name: 'products', query: { sale: 1 } }" class="footer-link">Sale</router-link></li>
          </ul>
        </div>
        <!-- Account -->
        <div>
          <div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#f0ece3;margin-bottom:20px;">Account</div>
          <ul style="list-style:none;padding:0;margin:0;">
            <li style="margin-bottom:12px;"><router-link :to="{ name: 'login' }" class="footer-link">Sign In</router-link></li>
            <li style="margin-bottom:12px;"><router-link :to="{ name: 'register' }" class="footer-link">Create Account</router-link></li>
            <li style="margin-bottom:12px;"><router-link :to="{ name: 'orders' }" class="footer-link">Order Tracking</router-link></li>
            <li><router-link :to="{ name: 'account' }" class="footer-link">My Profile</router-link></li>
          </ul>
        </div>
        <!-- Company -->
        <div>
          <div style="font-family:'Syne',sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#f0ece3;margin-bottom:20px;">Company</div>
          <ul style="list-style:none;padding:0;margin:0;">
            <li style="margin-bottom:12px;"><a href="/seller" class="footer-link">Seller Portal</a></li>
            <li style="margin-bottom:12px;"><a href="#" class="footer-link">About Us</a></li>
            <li style="margin-bottom:12px;"><a href="#" class="footer-link">Contact</a></li>
            <li><a href="#" class="footer-link">Sustainability</a></li>
          </ul>
        </div>
      </div>
      <div style="border-top:1px solid rgba(240,236,227,0.06);padding-top:28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <span style="font-size:12px;color:rgba(240,236,227,0.28);font-weight:300;letter-spacing:0.05em;">© {{ year }} NurbanNxt. All rights reserved. Designed for the bold.</span>
        <div style="display:flex;gap:8px;">
          <span v-for="pay in payIcons" :key="pay"
            style="background:rgba(240,236,227,0.07);padding:4px 10px;font-size:9px;font-family:'Syne',sans-serif;font-weight:600;letter-spacing:0.1em;color:rgba(240,236,227,0.3);border:1px solid rgba(240,236,227,0.08);">
            {{ pay }}
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* ── Featured editorial grid ───────────────────── */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.featured-large {
  grid-row: span 2;
}

/* ── Nav dropdown item ─────────────────────────── */
.nav-dropdown-item {
  display: block;
  padding: 8px 20px;
  font-family: 'Syne', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(240,236,227,0.65);
  text-decoration: none;
  transition: color 0.15s;
  cursor: none;
}
.nav-dropdown-item:hover { color: #f97316; }

/* ── Mobile nav item ───────────────────────────── */
.mobile-nav-item {
  display: block;
  padding: 10px 0;
  font-family: 'Syne', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(240,236,227,0.65);
  text-decoration: none;
  transition: color 0.15s;
  cursor: none;
}
.mobile-nav-item:hover { color: #f97316; }

/* ── Footer link ───────────────────────────────── */
.footer-link {
  font-size: 13px;
  font-weight: 300;
  color: rgba(240,236,227,0.4);
  text-decoration: none;
  transition: color 0.2s;
  cursor: none;
}
.footer-link:hover { color: #f97316; }

/* ── Hero responsive ───────────────────────────── */
@media (max-width: 768px) {
  .hero-grid { grid-template-columns: 1fr !important; }
  .featured-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .footer-grid { grid-template-columns: 1fr 1fr !important; }
}
</style>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';
import DarkProductCard from '../products/DarkProductCard.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomePage',
  components: { DarkProductCard },

  data() {
    return {
      featuredProducts: [],
      newProducts:      [],
      categories:       [],
      loadingFeatured:  true,
      loadingNew:       true,
      searchOpen:       false,
      searchQuery:      '',
      accountOpen:      false,
      mobileOpen:       false,
      email:            '',
      subscribeSuccess: false,

      tickerItems: [
        'FREE SHIPPING OVER ₱2,000',
        'NEW DROPS EVERY FRIDAY',
        'LIMITED EDITION COLLABS',
        'AESTHETIC IS NOT A TREND — IT\'S A LIFESTYLE',
        'FREE RETURNS WITHIN 30 DAYS',
      ],
      aestheticStyles: [
        'Y2K DRIP', 'COTTAGECORE', 'DARK ACADEMIA', 'STREETWEAR',
        'SOFT GRUNGE', 'TECHWEAR', 'INDIE AESTHETIC', 'GORPCORE', 'COASTAL GIRL',
      ],
      catCards: [
        { name: 'WOMEN',    img: '/images/products/illus-1.png',   to: { name: 'products', query: { category: 'women' } } },
        { name: 'MEN',      img: '/images/products/illus-2.png',   to: { name: 'products', query: { category: 'men' } } },
        { name: 'ACCESSORIES', img: '/images/products/illus-3.png', to: { name: 'products', query: { category: 'accessories' } } },
      ],
      socials:  ['IG', 'TK', 'FB', 'PT'],
      payIcons: ['VISA', 'MASTERCARD', 'GCASH', 'MAYA', 'COD'],

      // (no cursor state needed)
    };
  },

  computed: {
    isAuthenticated() { return this.$store.getters['auth/isAuthenticated']; },
    currentUser()     { return this.$store.getters['auth/currentUser']; },
    cartCount()       { return this.$store.getters['cart/itemCount']; },
    year()            { return new Date().getFullYear(); },
    firstName() {
      if (!this.currentUser) return '';
      return this.currentUser.name.split(' ')[0];
    },
  },

  created() {
    this.fetchFeatured();
    this.fetchNew();
    this.fetchCategories();
  },

  mounted() {
    this.initGSAP();
    this.initScrollReveal();
  },

  beforeDestroy() {
    ScrollTrigger.getAll().forEach(t => t.kill());
    window.removeEventListener('scroll', this._onScroll);
  },

  methods: {
    /* ── Data fetching ────────────────────────── */
    async fetchFeatured() {
      this.loadingFeatured = true;
      try {
        const { data } = await axios.get('/shop/products/featured');
        this.featuredProducts = data;
      } catch (_) {}
      this.loadingFeatured = false;
    },
    async fetchNew() {
      this.loadingNew = true;
      try {
        const { data } = await axios.get('/shop/products', { params: { sort: 'latest', per_page: 8 } });
        this.newProducts = data.data || [];
      } catch (_) {}
      this.loadingNew = false;
    },
    async fetchCategories() {
      try {
        const { data } = await axios.get('/shop/categories');
        this.categories = data;
      } catch (_) {}
    },

    /* ── Navigation ───────────────────────────── */
    doSearch() {
      if (!this.searchQuery.trim()) return;
      this.$router.push({ name: 'products', query: { q: this.searchQuery.trim() } });
      this.searchOpen = false;
      this.searchQuery = '';
    },
    async logout() {
      await this.$store.dispatch('auth/logout');
      this.accountOpen = false;
      this.mobileOpen = false;
      this.$router.push({ name: 'home' });
    },

    /* ── GSAP Animations ──────────────────────── */
    initGSAP() {
      this.$nextTick(() => {
        // Hero title lines stagger in
        if (this.$refs.heroTitle) {
          const lines = this.$refs.heroTitle.querySelectorAll('span');
          gsap.fromTo(lines,
            { y: 60, opacity: 0 },
            { y: 0,  opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
          );
        }
        // Hero image parallax
        if (this.$refs.heroImg) {
          gsap.to(this.$refs.heroImg, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
              trigger: this.$refs.heroRight,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }
        // Nav scroll effect
        this._onScroll = () => {
          if (!this.$refs.nav) return;
          if (window.scrollY > 60) {
            this.$refs.nav.style.background   = 'rgba(10,10,10,0.96)';
            this.$refs.nav.style.backdropFilter = 'blur(12px)';
            this.$refs.nav.style.borderBottom = '1px solid rgba(240,236,227,0.06)';
          } else {
            this.$refs.nav.style.background   = '';
            this.$refs.nav.style.backdropFilter = '';
            this.$refs.nav.style.borderBottom = '';
          }
        };
        window.addEventListener('scroll', this._onScroll, { passive: true });
      });
    },
    initScrollReveal() {
      this.$nextTick(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
            }
          });
        }, { threshold: 0.1 });
        document.querySelectorAll('.nn-reveal').forEach(el => observer.observe(el));
      });
    },

    /* ── Newsletter ───────────────────────────── */
    subscribeEmail() {
      if (!this.email || !this.email.includes('@')) return;
      this.subscribeSuccess = true;
      this.email = '';
    },
  },
};
</script>
