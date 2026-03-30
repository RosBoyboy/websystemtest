<template>
  <div style="position:relative;">
    <!-- Button -->
    <button @click="open = !open" class="nn-icon-btn" style="display:flex;align-items:center;gap:8px;padding:8px 12px;">
      <!-- Avatar -->
      <div v-if="user" class="w-6 h-6 rounded-full"
        :style="{ backgroundColor: avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', color: '#fff' }">
        {{ initials }}
      </div>
      <svg v-else width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>

      <!-- Name and role -->
      <div class="hidden sm:flex flex-col items-start gap-0.5">
        <span class="text-xs font-semibold text-slate-200" style="letter-spacing:0.05em;">
          {{ isAuthenticated ? firstName : 'Account' }}
        </span>
      </div>
    </button>

    <!-- Dropdown Menu -->
    <div v-if="open" class="absolute right-0 top-full mt-1"
      style="background:#1a1a1a;border:1px solid rgba(240,236,227,0.1);padding:6px 0;min-width:180px;z-index:60;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.3);">
      
      <!-- User info section (if authenticated) -->
      <div v-if="isAuthenticated && user" style="padding:8px 16px;border-bottom:1px solid rgba(240,236,227,0.08);">
        <p class="text-10px uppercase font-semibold text-slate-400 tracking-wider mb-1">Logged in as</p>
        <p class="text-xs font-medium text-slate-100">{{ user.name }}</p>
        <p class="text-10px text-slate-500">{{ user.email }}</p>
      </div>

      <!-- Menu items -->
      <template v-if="isAuthenticated">
        <router-link :to="{ name: 'account' }" @click.native="open = false" class="nn-dropdown-item">📋 My Account</router-link>
        <router-link :to="{ name: 'orders' }" @click.native="open = false" class="nn-dropdown-item">📦 My Orders</router-link>
        <router-link :to="{ name: 'account', query: { tab: 'messages' } }" @click.native="open = false" class="nn-dropdown-item">💬 Messages</router-link>    
        <a v-if="user && (user.role === 'seller' || user.role === 'both' || user.role === 'admin')" href="/seller/app" class="nn-dropdown-item">🏪 Seller Center</a>
        <div style="height:1px;background:rgba(240,236,227,0.08);margin:4px 0;"></div>
        <button @click="logout" class="nn-dropdown-item" style="width:100%;text-align:left;background:none;border:none;color:#e05c2a;cursor:pointer;">🚪 Sign Out</button>
      </template>
      <template v-else>
        <router-link :to="{ name: 'login' }" @click.native="open = false" class="nn-dropdown-item">🔐 Sign In</router-link>
        <router-link :to="{ name: 'register' }" @click.native="open = false" class="nn-dropdown-item">✨ Create Account</router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserStateIndicator',
  data() {
    return {
      open: false
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'currentUser']),
    user() {
      return this.currentUser;
    },
    firstName() {
      if (!this.user || !this.user.name) return 'Account';
      return this.user.name.split(' ')[0];
    },
    initials() {
      if (!this.user || !this.user.name) return '?';
      const parts = this.user.name.split(' ');
      return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
    },
    avatarColor() {
      const colors = ['#f97316', '#06b6d4', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b'];
      const hashCode = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
        }
        return Math.abs(hash);
      };
      const index = hashCode(this.user?.email || 'user') % colors.length;
      return colors[index];
    },
    roleLabel() {
      if (!this.user) return null;
      // Check user roles
      if (this.user.roles && this.user.roles.length > 0) {
        return this.user.roles[0].name.charAt(0).toUpperCase() + this.user.roles[0].name.slice(1);
      }
      // Default based on user type
      if (this.user.seller_id) return 'Seller';
      return 'Customer';
    }
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    ...mapActions('auth', ['logout']),
    handleClickOutside(event) {
      // Close if clicked outside the component
      if (!this.$el.contains(event.target)) {
        this.open = false;
      }
    }
  }
};
</script>

<style scoped>
.nn-icon-btn {
  background: none;
  border: none;
  color: rgba(240,236,227,0.6);
  cursor: pointer;
  padding: 8px;
  transition: color 0.2s, background-color 0.2s;
  display: flex;
  align-items: center;
  border-radius: 6px;
}
.nn-icon-btn:hover { 
  color: #f97316;
  background-color: rgba(249, 115, 22, 0.1);
}
.nn-icon-btn:active {
  background-color: rgba(249, 115, 22, 0.15);
}
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
  transition: color 0.15s, background-color 0.15s;
  cursor: pointer;
  background: none;
  border: none;
}
.nn-dropdown-item:hover { 
  color: #f97316;
  background-color: rgba(249, 115, 22, 0.08);
}
</style>
