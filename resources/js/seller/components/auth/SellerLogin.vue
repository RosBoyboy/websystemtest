<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
    <div class="w-full max-w-md">

      <!-- Logo -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold">
          <span class="text-orange-500">Nurban</span><span class="text-white">Nxt</span>
        </h1>
        <p class="text-slate-500 mt-1 text-sm">Seller Portal</p>
      </div>

      <!-- Card -->
      <div class="bg-slate-900 rounded-2xl border border-slate-800 p-8">

        <!-- Tab switcher -->
        <div class="flex rounded-lg bg-slate-800 p-1 mb-6">
          <button
            @click="switchMode('login')"
            :class="mode === 'login'
              ? 'bg-orange-500 text-white shadow'
              : 'text-slate-400 hover:text-white'"
            class="flex-1 py-2 text-sm font-semibold rounded-md transition-all"
          >Sign In</button>
          <button
            @click="switchMode('register')"
            :class="mode === 'register'
              ? 'bg-orange-500 text-white shadow'
              : 'text-slate-400 hover:text-white'"
            class="flex-1 py-2 text-sm font-semibold rounded-md transition-all"
          >Create Account</button>
        </div>

        <!-- Success banner (after registration) -->
        <div v-if="successMessage" class="mb-4 p-3 bg-green-900/40 border border-green-700 rounded-lg text-green-400 text-sm">
          {{ successMessage }}
        </div>

        <!-- Error alert -->
        <div v-if="error" class="mb-4 p-3 bg-red-900/40 border border-red-700 rounded-lg text-red-400 text-sm">
          {{ error }}
        </div>

        <!-- ── LOGIN FORM ── -->
        <form v-if="mode === 'login'" @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">Email</label>
            <input
              v-model="login.email"
              type="email"
              required
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="seller@example.com"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-400 mb-1">Password</label>
            <input
              v-model="login.password"
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

        <!-- ── REGISTER FORM ── -->
        <form v-if="mode === 'register'" @submit.prevent="handleRegister" class="space-y-4">
          <div class="grid grid-cols-1 gap-4">
            <!-- Full name -->
            <div>
              <label class="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
              <input
                v-model="reg.name"
                type="text"
                required
                class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Jane Doe"
              />
            </div>

            <!-- Store name -->
            <div>
              <label class="block text-sm font-medium text-slate-400 mb-1">Store Name</label>
              <input
                v-model="reg.store_name"
                type="text"
                required
                class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="My Awesome Store"
              />
            </div>

            <!-- Store description -->
            <div>
              <label class="block text-sm font-medium text-slate-400 mb-1">
                Store Description
                <span class="text-slate-600 font-normal">(optional)</span>
              </label>
              <textarea
                v-model="reg.store_description"
                rows="2"
                class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                placeholder="A short description of your store…"
              ></textarea>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input
                v-model="reg.email"
                type="email"
                required
                class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="seller@example.com"
              />
            </div>

            <!-- Password -->
            <div>
              <label class="block text-sm font-medium text-slate-400 mb-1">Password</label>
              <input
                v-model="reg.password"
                type="password"
                required
                minlength="8"
                class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Min. 8 characters"
              />
            </div>

            <!-- Confirm password -->
            <div>
              <label class="block text-sm font-medium text-slate-400 mb-1">Confirm Password</label>
              <input
                v-model="reg.password_confirmation"
                type="password"
                required
                class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <p class="text-slate-500 text-xs pt-1">
            After registering your account will be reviewed by an admin before you can sign in.
          </p>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-colors"
          >
            <span v-if="loading">Creating account…</span>
            <span v-else>Create Seller Account</span>
          </button>
        </form>

        <p class="text-slate-600 text-xs text-center mt-4">
          Need an admin?
          <a href="/admin/app#/login" class="text-orange-500 hover:text-orange-400 transition-colors">Go to admin →</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellerLogin',
  data() {
    return {
      mode:           'login',   // 'login' | 'register'
      loading:        false,
      error:          null,
      successMessage: null,

      login: { email: '', password: '' },

      reg: {
        name:                 '',
        store_name:           '',
        store_description:    '',
        email:                '',
        password:             '',
        password_confirmation: '',
      },
    };
  },
  methods: {
    switchMode(m) {
      this.mode           = m;
      this.error          = null;
      this.successMessage = null;
    },

    async handleLogin() {
      this.error          = null;
      this.successMessage = null;
      this.loading        = true;
      try {
        await this.$store.dispatch('auth/login', this.login);
        this.$router.push({ name: 'seller.dashboard' });
      } catch (e) {
        this.error = e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : (e.message || 'Login failed.');
      } finally {
        this.loading = false;
      }
    },

    async handleRegister() {
      this.error          = null;
      this.successMessage = null;

      if (this.reg.password !== this.reg.password_confirmation) {
        this.error = 'Passwords do not match.';
        return;
      }

      this.loading = true;
      try {
        const result = await this.$store.dispatch('auth/register', this.reg);
        this.successMessage = result.message;
        // Reset form and switch to login tab so they can sign in once approved
        this.reg     = { name: '', store_name: '', store_description: '', email: '', password: '', password_confirmation: '' };
        this.mode    = 'login';
      } catch (e) {
        const resp = e.response && e.response.data;
        if (resp && resp.errors) {
          // Laravel validation — flatten first message per field
          this.error = Object.values(resp.errors).map(function(msgs) { return msgs[0]; }).join(' ');
        } else {
          this.error = (resp && resp.message) ? resp.message : (e.message || 'Registration failed.');
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
