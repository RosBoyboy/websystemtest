<template>
  <header style="position:sticky;top:0;z-index:50;background:rgba(10,10,10,0.96);backdrop-filter:blur(12px);border-bottom:1px solid rgba(240,236,227,0.06);">
    <div style="max-width:1280px;margin:0 auto;padding:0 24px;">
      <div style="display:flex;align-items:center;justify-content:space-between;height:64px;">

        <!-- Logo -->
        <router-link :to="{ name: 'home' }" style="text-decoration:none;flex-shrink:0;">
          <span style="font-family:'Bebas Neue',cursive;font-size:22px;letter-spacing:0.12em;color:#f97316;">Nurban</span><span style="font-family:'Bebas Neue',cursive;font-size:22px;letter-spacing:0.12em;color:#f0ece3;">Nxt</span>
        </router-link>

        <!-- Desktop nav -->
        <nav class="hidden md:flex" style="gap:28px;">
          <router-link :to="{ name: 'products' }" class="nn-nav-link">Shop</router-link>
          <router-link :to="{ name: 'products', query: { sort: 'featured' } }" class="nn-nav-link">Featured</router-link>
          <router-link :to="{ name: 'products', query: { sort: 'latest' } }" class="nn-nav-link">New In</router-link>
        </nav>

        <!-- Right actions -->
        <div style="display:flex;align-items:center;gap:12px;">
          <!-- Search -->
          <button @click="searchOpen = !searchOpen" class="nn-icon-btn">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>

          <!-- Cart -->
          <router-link :to="{ name: 'cart' }" class="nn-icon-btn" style="position:relative;">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span v-if="cartCount > 0"
              style="position:absolute;top:-4px;right:-4px;background:#e05c2a;color:#fff;width:15px;height:15px;border-radius:50%;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;">
              {{ cartCount > 9 ? '9+' : cartCount }}
            </span>
          </router-link>

          <!-- Account dropdown -->
          <div style="position:relative;" @mouseenter="accountOpen = true" @mouseleave="accountOpen = false">
            <button class="nn-icon-btn" style="display:flex;align-items:center;gap:6px;padding:8px 12px;">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <span class="hidden sm:inline" style="font-family:'Syne',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;">
                {{ isAuthenticated ? firstName : 'Account' }}
              </span>
            </button>
            <div v-if="accountOpen"
              style="position:absolute;right:0;top:100%;background:#1a1a1a;border:1px solid rgba(240,236,227,0.1);padding:6px 0;min-width:152px;z-index:60;">
              <template v-if="isAuthenticated">
                <router-link :to="{ name: 'account' }" class="nn-dropdown-item">My Account</router-link>
                <router-link :to="{ name: 'orders' }" class="nn-dropdown-item">My Orders</router-link>
                <div style="height:1px;background:rgba(240,236,227,0.08);margin:4px 0;"></div>
                <button @click="logout" class="nn-dropdown-item" style="width:100%;text-align:left;background:none;border:none;color:#e05c2a;cursor:pointer;">Sign Out</button>
              </template>
              <template v-else>
                <router-link :to="{ name: 'login' }" class="nn-dropdown-item">Sign In</router-link>
                <router-link :to="{ name: 'register' }" class="nn-dropdown-item">Create Account</router-link>
              </template>
            </div>
          </div>

          <!-- Mobile hamburger -->
          <button @click="mobileOpen = !mobileOpen" class="md:hidden nn-icon-btn">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path v-if="!mobileOpen" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Search bar -->
      <div v-if="searchOpen" style="padding:10px 0 14px;border-top:1px solid rgba(240,236,227,0.06);">
        <div style="display:flex;gap:8px;">
          <input v-model="searchQuery" @keyup.enter="doSearch" type="text"
            placeholder="Search streetwear…" autofocus class="input-field" style="flex:1;font-size:13px;" />
          <button @click="doSearch" class="btn-primary" style="padding:10px 18px;flex-shrink:0;font-size:10px;">Search</button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileOpen" class="md:hidden" style="padding:8px 0 16px;border-top:1px solid rgba(240,236,227,0.06);">
        <router-link @click.native="mobileOpen=false" :to="{ name: 'products' }" class="nn-mobile-link">Shop</router-link>
        <router-link @click.native="mobileOpen=false" :to="{ name: 'products', query: { sort: 'featured' } }" class="nn-mobile-link">Featured</router-link>
        <router-link @click.native="mobileOpen=false" :to="{ name: 'products', query: { sort: 'latest' } }" class="nn-mobile-link">New In</router-link>
        <div style="height:1px;background:rgba(240,236,227,0.07);margin:8px 0;"></div>
        <template v-if="isAuthenticated">
          <router-link @click.native="mobileOpen=false" :to="{ name: 'account' }" class="nn-mobile-link">My Account</router-link>
          <router-link @click.native="mobileOpen=false" :to="{ name: 'orders' }" class="nn-mobile-link">My Orders</router-link>
          <button @click="logout" class="nn-mobile-link" style="background:none;border:none;text-align:left;color:#e05c2a;cursor:pointer;width:100%;">Sign Out</button>
        </template>
        <template v-else>
          <router-link @click.native="mobileOpen=false" :to="{ name: 'login' }" class="nn-mobile-link">Sign In</router-link>
          <router-link @click.native="mobileOpen=false" :to="{ name: 'register' }" class="nn-mobile-link">Create Account</router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nn-nav-link {
  font-family: 'Syne', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(240,236,227,0.65);
  text-decoration: none;
  transition: color 0.2s;
}
.nn-nav-link:hover, .nn-nav-link.router-link-active { color: #f97316; }
.nn-icon-btn {
  background: none;
  border: none;
  color: rgba(240,236,227,0.6);
  cursor: pointer;
  padding: 8px;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}
.nn-icon-btn:hover { color: #f97316; }
.nn-dropdown-item {
  display: block;
  padding: 8px 18px;
  font-family: 'Syne', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(240,236,227,0.6);
  text-decoration: none;
  transition: color 0.15s;
  cursor: pointer;
}
.nn-dropdown-item:hover { color: #f97316; }
.nn-mobile-link {
  display: block;
  padding: 10px 4px;
  font-family: 'Syne', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(240,236,227,0.65);
  text-decoration: none;
  transition: color 0.15s;
}
.nn-mobile-link:hover { color: #f97316; }
</style>

<script>
export default {
  name: 'CustomerNavbar',
  data() {
    return {
      searchOpen:  false,
      searchQuery: '',
      accountOpen: false,
      mobileOpen:  false,
    };
  },
  computed: {
    isAuthenticated() { return this.$store.getters['auth/isAuthenticated']; },
    currentUser()     { return this.$store.getters['auth/currentUser']; },
    cartCount()       { return this.$store.getters['cart/itemCount']; },
    firstName() {
      if (!this.currentUser) return '';
      return this.currentUser.name.split(' ')[0];
    },
  },
  methods: {
    doSearch() {
      if (!this.searchQuery.trim()) return;
      this.$router.push({ name: 'products', query: { q: this.searchQuery.trim() } });
      this.searchOpen  = false;
      this.searchQuery = '';
    },
    async logout() {
      await this.$store.dispatch('auth/logout');
      this.accountOpen = false;
      this.mobileOpen  = false;
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
