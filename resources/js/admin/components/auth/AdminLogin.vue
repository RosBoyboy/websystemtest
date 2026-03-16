<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold">
          <span class="text-orange-500">Nurban</span><span class="text-white">Nxt</span>
        </h1>
        <p class="text-slate-500 mt-1 text-sm">Admin Panel</p>
      </div>

      <!-- Card -->
      <div class="bg-slate-900 rounded-2xl border border-slate-800 p-8">
        <h2 class="text-xl font-semibold text-white mb-6">Sign In</h2>
        <p class="text-slate-500 text-xs text-center -mt-4 mb-5">Administrator access only</p>

        <!-- Error alert -->
        <div v-if="error" class="mb-4 p-3 bg-red-900/40 border border-red-700 rounded-lg text-red-400 text-sm">
          {{ error }}
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="admin@nurbannxt.com"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">Password</label>
            <input
              v-model="form.password"
              type="password"
              required
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-colors"
          >
            <span v-if="loading">Signing in…</span>
            <span v-else>Sign In</span>
          </button>
        </form>
      </div>

      <!-- Other portals -->
      <div class="mt-6 bg-slate-900/60 rounded-xl border border-slate-800 p-4">
        <p class="text-slate-500 text-xs text-center mb-3 uppercase tracking-widest font-semibold">Other portals</p>
        <div class="flex justify-center">
          <a
            href="/login"
            class="flex flex-col items-center gap-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-orange-500/50 rounded-lg py-3 px-6 transition-all group"
          >
            <svg class="w-5 h-5 text-orange-400 group-hover:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span class="text-slate-300 group-hover:text-white text-xs font-medium transition-colors">Customer Sign In</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
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
        this.$router.push({ name: 'admin.dashboard' });
      } catch (e) {
        this.error = e.response?.data?.message || e.message || 'Login failed.';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
