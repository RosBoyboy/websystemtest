<template>
  <div class="min-h-screen bg-black flex flex-col">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-black border-b border-stone-900 px-12 py-4 flex items-center justify-between">
      <router-link :to="{ name: 'home' }" class="text-white font-bold text-xl tracking-wider">
        NURBAN<span class="text-orange-500">NXT</span>
      </router-link>
      <div class="flex items-center gap-6">
        <router-link :to="{ name: 'products' }" class="text-sm text-stone-400 hover:text-white uppercase tracking-wider transition-colors">Shop</router-link>
        <router-link :to="{ name: 'products', query: { sort: 'featured' } }" class="text-sm text-stone-400 hover:text-white uppercase tracking-wider transition-colors">Featured</router-link>
        <router-link :to="{ name: 'cart' }" class="text-stone-400 hover:text-white transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </router-link>
      </div>
    </nav>

    <!-- Main content -->
    <div class="flex-1 flex items-center justify-center px-6 py-12">
      <div class="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
        
        <!-- Left side: Image & Text or Role Selector -->
        <div class="hidden lg:flex relative bg-gradient-to-b from-black/40 to-black/60 items-center justify-center p-12" style="background-image: url('/images/auth/login-hero.jpg'); background-size: cover; background-position: center;">
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div class="relative z-10 text-left max-w-sm">
            <h1 class="text-5xl font-black text-white mb-4" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;">
              {{ loginType === 'customer' ? 'Welcome Back' : 'Admin Access' }}
            </h1>
            <p class="text-xl text-stone-300">
              {{ loginType === 'customer' 
                ? 'Sign in to your NurbanNxt account' 
                : 'Administrator panel signin' }}
            </p>
          </div>
        </div>

        <!-- Right side: Form Card -->
        <div class="bg-white p-12 flex flex-col justify-center">
          <!-- Role Selector Tabs -->
          <div class="flex gap-2 mb-8 rounded-lg bg-stone-100 border border-stone-300 p-1">
            <button
              @click="loginType = 'customer'"
              :class="[
                'flex-1 py-2.5 px-3 rounded-lg font-semibold transition-all text-sm',
                loginType === 'customer'
                  ? 'bg-orange-500 text-white'
                  : 'text-stone-600 hover:text-black'
              ]"
            >
              <svg class="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Customer
            </button>
            <button
              @click="loginType = 'admin'"
              :class="[
                'flex-1 py-2.5 px-3 rounded-lg font-semibold transition-all text-sm',
                loginType === 'admin'
                  ? 'bg-orange-500 text-white'
                  : 'text-stone-600 hover:text-black'
              ]"
            >
              <svg class="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
              Admin
            </button>
          </div>

          <h2 class="text-3xl font-black text-black mb-2" style="font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.05em;">LOGIN</h2>
          <p class="text-xs text-stone-500 mb-6">
            {{ loginType === 'customer' 
              ? 'Access your customer or seller account'
              : 'Administrator access only' }}
          </p>

          <!-- Error -->
          <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
            {{ error }}
          </div>

          <form @submit.prevent="handleLogin" class="space-y-5">
            <!-- Email -->
            <div>
              <label class="block text-xs font-bold text-stone-600 uppercase mb-2 tracking-wider">Email</label>
              <div class="relative">
                <span class="absolute left-4 top-3.5 text-stone-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </span>
                <input 
                  v-model="form.email" 
                  type="email" 
                  required 
                  :placeholder="loginType === 'customer' ? 'you@example.com' : 'admin@nurbannxt.com'"
                  class="w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-stone-800 font-medium"
                />
              </div>
            </div>

            <!-- Password -->
            <div>
              <label class="block text-xs font-bold text-stone-600 uppercase mb-2 tracking-wider">Password</label>
              <div class="relative">
                <span class="absolute left-4 top-3.5 text-stone-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                </span>
                <input 
                  v-model="form.password" 
                  type="password" 
                  required 
                  placeholder="••••••••"
                  class="w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-stone-800 font-medium"
                />
              </div>
            </div>

            <!-- Sign In Button -->
            <button 
              type="submit" 
              :disabled="loading" 
              class="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg py-3.5 rounded-lg transition-all uppercase tracking-wider mt-8"
            >
              <span v-if="loading" class="flex items-center justify-center gap-2">
                <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"/>
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Signing in…
              </span>
              <span v-else>Sign In</span>
            </button>
          </form>

          <!-- Customer Links -->
          <template v-if="loginType === 'customer'">
            <!-- Forgot Password -->
            <div class="text-center mt-6">
              <a href="#" class="text-sm text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                Forgot password?
              </a>
            </div>

            <!-- Sign Up Link -->
            <div class="text-center mt-5 pt-5 border-t border-stone-200">
              <p class="text-sm text-stone-600">
                Don't have an account?
                <router-link :to="{ name: 'register' }" class="text-orange-500 font-bold hover:text-orange-600 transition-colors">
                  Create one
                </router-link>
              </p>
            </div>

            <!-- Seller Mode Info -->
            <p class="text-center text-xs text-stone-500 mt-4 leading-relaxed">
              Seller mode is available after login in your account dashboard.
            </p>
          </template>

          <!-- Admin Info -->
          <template v-else>
            <div class="mt-6 p-3 bg-slate-100 rounded-lg border border-slate-300 text-xs text-slate-700">
              <p><strong>Admin Portal</strong></p>
              <p>Access restricted to administrators only. Unauthorized access attempts are logged.</p>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-stone-900 border-t border-stone-800">
      <div class="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 class="text-white font-bold text-lg mb-4">NURBAN<span class="text-orange-500">NXT</span></h3>
          <p class="text-stone-400 text-sm leading-relaxed">
            Aesthetic clothing for the culturally wired.
          </p>
        </div>
        <div>
          <h4 class="text-white font-bold text-sm uppercase mb-4 tracking-wider">SHOP</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-stone-400 text-sm hover:text-white transition-colors">All Products</a></li>
            <li><a href="#" class="text-stone-400 text-sm hover:text-white transition-colors">Featured</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold text-sm uppercase mb-4 tracking-wider">ACCOUNT</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-stone-400 text-sm hover:text-white transition-colors">Seller Portal</a></li>
            <li><a href="#" class="text-stone-400 text-sm hover:text-white transition-colors">Create Account</a></li>
            <li><a href="#" class="text-stone-400 text-sm hover:text-white transition-colors">Order Tracking</a></li>
            <li><a href="#" class="text-stone-400 text-sm hover:text-white transition-colors">My Profile</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold text-sm uppercase mb-4 tracking-wider">COMPANY</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-stone-400 text-sm hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" class="text-stone-400 text-sm hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" class="text-stone-400 text-sm hover:text-white transition-colors">Sustainability</a></li>
            <li><a href="#" class="text-stone-400 text-sm hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-stone-800 px-12 py-6 flex justify-between items-center">
        <p class="text-stone-500 text-xs">© 2026 NurbanNxt. All rights reserved.</p>
        <div class="flex gap-4">
          <span class="text-stone-500 text-xs border border-stone-700 px-3 py-1 rounded">VISA</span>
          <span class="text-stone-500 text-xs border border-stone-700 px-3 py-1 rounded">MASTERCARD</span>
          <span class="text-stone-500 text-xs border border-stone-700 px-3 py-1 rounded">GCASH</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AccountLogin',
  data() {
    return {
      loginType: 'customer', // 'customer' or 'admin'
      form: { email: '', password: '' },
      loading: false,
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      this.error = null;
      this.loading = true;
      
      try {
        if (this.loginType === 'admin') {
          // Admin login
          await this.handleAdminLogin();
        } else {
          // Customer login
          await this.handleCustomerLogin();
        }
      } catch (e) {
        const resp = e.response && e.response.data;
        this.error = (resp && resp.message) ? resp.message : (e.message || 'Login failed.');
      } finally {
        this.loading = false;
      }
    },

    async handleAdminLogin() {
      try {
        const { data } = await axios.post('/auth/login', this.form);
        
        // Verify user is admin
        if (data.user.role !== 'admin') {
          throw new Error('Access denied. Admin only.');
        }
        
        // Store admin auth
        localStorage.setItem('admin_token', data.token);
        localStorage.setItem('admin_user', JSON.stringify(data.user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        
        // Redirect to admin dashboard
        window.location.href = '/admin/app/#/';
      } catch (e) {
        throw e;
      }
    },

    async handleCustomerLogin() {
      try {
        const { data } = await axios.post('/auth/login', this.form);

        // Verify user is not admin
        if (data.user.role === 'admin') {
          throw new Error('Admin accounts must use the admin portal.');
        }

        // Commit to Vuex store (this updates both the state and local storage)
        this.$store.commit('auth/SET_AUTH', { user: data.user, token: data.token });

        // Redirect to account or redirect path
        const redirect = this.$route.query.redirect || '/account';
        if (redirect.includes('/seller') || redirect.includes('/admin')) {
          window.location.href = redirect;
        } else {
          this.$router.push(redirect);
        }
      } catch (e) {
        throw e;
      }
    },
  },

  created() {
    // If already logged in, redirect appropriately
    const adminToken = localStorage.getItem('admin_token');
    const customerToken = localStorage.getItem('customer_token');
    
    if (adminToken) {
      window.location.href = '/admin/app/#/';
    } else if (customerToken) {
      this.$router.push({ name: 'account' });
    }
  },
};
</script>
