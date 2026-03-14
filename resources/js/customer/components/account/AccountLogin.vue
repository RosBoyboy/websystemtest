<template>
  <CustomerLayout>
    <div class="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div class="w-full max-w-md">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-black text-white">Welcome Back</h1>
          <p class="text-slate-400 mt-1">Sign in to your NurbanNxt account</p>
        </div>

        <div class="bg-white rounded-2xl border border-stone-100 p-8 shadow-sm">
          <div v-if="error" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{{ error }}</div>

          <form @submit.prevent="handleLogin" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-stone-500 uppercase mb-1">Email</label>
              <input v-model="form.email" type="email" required class="input-field" placeholder="you@example.com" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-stone-500 uppercase mb-1">Password</label>
              <input v-model="form.password" type="password" required class="input-field" placeholder="••••••••" />
            </div>
            <button type="submit" :disabled="loading" class="btn-primary w-full py-3 mt-2 disabled:opacity-50">
              <span v-if="loading">Signing in…</span>
              <span v-else>Sign In</span>
            </button>
          </form>

          <p class="text-center text-sm text-stone-500 mt-6">
            Don't have an account?
            <router-link :to="{ name: 'register' }" class="text-orange-500 font-semibold hover:text-orange-600">Create one</router-link>
          </p>

          <p class="text-center text-xs text-stone-400 mt-3">
            Seller mode is available after login in your account dashboard.
          </p>
        </div>
      </div>
    </div>
  </CustomerLayout>
</template>

<script>
import CustomerLayout from '../layout/CustomerLayout.vue';

export default {
  name: 'AccountLogin',
  components: { CustomerLayout },
  data() {
    return {
      form:    { email: '', password: '' },
      loading: false,
      error:   null,
    };
  },
  methods: {
    async handleLogin() {
      this.error   = null;
      this.loading = true;
      try {
        await this.$store.dispatch('auth/login', this.form);
        const redirect = this.$route.query.redirect || '/account';
        if (redirect.includes('/seller') || redirect.includes('/admin')) {
          window.location.href = redirect;
        } else {
          this.$router.push(redirect);
        }
      } catch (e) {
        const resp = e.response && e.response.data;
        this.error = (resp && resp.message) ? resp.message : (e.message || 'Login failed.');
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
