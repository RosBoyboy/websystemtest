<template>
  <CustomerLayout>
    <div class="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div class="w-full max-w-md">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-black text-stone-900">Create Account</h1>
          <p class="text-stone-500 mt-1">Join NurbanNxt and start shopping</p>
        </div>

        <div class="bg-white rounded-2xl border border-stone-100 p-8 shadow-sm">
          <div v-if="error" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{{ error }}</div>

          <form @submit.prevent="handleRegister" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-stone-500 uppercase mb-1">Full Name</label>
              <input v-model="form.name" type="text" required class="input-field" placeholder="Jane Doe" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-stone-500 uppercase mb-1">Email</label>
              <input v-model="form.email" type="email" required class="input-field" placeholder="you@example.com" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-stone-500 uppercase mb-1">Password</label>
              <input v-model="form.password" type="password" required minlength="8" class="input-field" placeholder="Min. 8 characters" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-stone-500 uppercase mb-1">Confirm Password</label>
              <input v-model="form.password_confirmation" type="password" required class="input-field" placeholder="••••••••" />
            </div>
            <button type="submit" :disabled="loading" class="btn-orange w-full py-3 mt-2 disabled:opacity-50">
              <span v-if="loading">Creating account…</span>
              <span v-else>Create Account</span>
            </button>
          </form>

          <p class="text-center text-sm text-stone-500 mt-6">
            Already have an account?
            <router-link :to="{ name: 'login' }" class="text-orange-500 font-semibold hover:text-orange-600">Sign In</router-link>
          </p>
        </div>
      </div>
    </div>
  </CustomerLayout>
</template>

<script>
import CustomerLayout from '../layout/CustomerLayout.vue';

export default {
  name: 'AccountRegister',
  components: { CustomerLayout },
  data() {
    return {
      form:    { name: '', email: '', password: '', password_confirmation: '' },
      loading: false,
      error:   null,
    };
  },
  methods: {
    async handleRegister() {
      this.error = null;
      if (this.form.password !== this.form.password_confirmation) {
        this.error = 'Passwords do not match.';
        return;
      }
      this.loading = true;
      try {
        await this.$store.dispatch('auth/register', this.form);
        this.$router.push({ name: 'account' });
      } catch (e) {
        const resp = e.response && e.response.data;
        if (resp && resp.errors) {
          this.error = Object.values(resp.errors).map(m => m[0]).join(' ');
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
