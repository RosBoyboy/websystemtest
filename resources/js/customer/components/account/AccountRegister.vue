<template>
  <CustomerLayout>
    <div class="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div class="w-full max-w-md">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-black text-white">Create Account</h1>
          <p class="text-slate-400 mt-1">Join NurbanNxt and start shopping</p>
        </div>

        <div class="bg-white rounded-2xl border border-stone-100 p-8 shadow-sm">
          <div v-if="error" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{{ error }}</div>

          <div v-if="requiresOtp">
            <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium text-center">
              Please check your email. We sent an OTP to verify your account.
            </div>

            <form @submit.prevent="verifyOtp" class="space-y-4">
              <div>
                <label class="block text-xs font-semibold text-slate-700 uppercase mb-1">Enter 6-Digit OTP</label>
                <input v-model="otpCode" type="text" required minlength="6" maxlength="6" class="w-full px-4 py-2.5 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-stone-900 text-center tracking-[0.5em] font-bold text-lg" placeholder="123456" />
              </div>
              <button type="submit" :disabled="verifying" class="btn-orange w-full py-3 mt-2 disabled:opacity-50">
                <span v-if="verifying">Verifying…</span>
                <span v-else>Verify Account</span>
              </button>
            </form>
          </div>

          <form v-if="!requiresOtp" @submit.prevent="handleRegister" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Name</label>
              <input v-model="form.name" type="text" required class="w-full px-4 py-2.5 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-stone-900" placeholder="Jane Doe" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 uppercase mb-1">Email</label>
              <input v-model="form.email" type="email" required class="w-full px-4 py-2.5 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-stone-900" placeholder="you@example.com" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 uppercase mb-1">Password</label>
              <input v-model="form.password" type="password" required minlength="8" class="w-full px-4 py-2.5 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-stone-900" placeholder="Min. 8 characters" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 uppercase mb-1">Confirm Password</label>
              <input v-model="form.password_confirmation" type="password" required class="w-full px-4 py-2.5 border-2 border-stone-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors bg-white text-stone-900" placeholder="••••••••" />
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
      form: { name: '', email: '', password: '', password_confirmation: '' },   
      loading: false,
      error: null,
      requiresOtp: false,
      otpCode: '',
      verifying: false
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
        const response = await this.$store.dispatch('auth/register', this.form);
        // Switch to OTP state after successful API call
        this.requiresOtp = true;
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
    async verifyOtp() {
      this.error = null;
      this.verifying = true;
      try {
        await this.$store.dispatch('auth/verifyRegistrationOtp', {
          email: this.form.email,
          otp: this.otpCode
        });
        
        // Once verified, they get an auth token and user object back, pushing them into their account dashboard
        this.$router.push({ name: 'account' });
      } catch (e) {
        const resp = e.response && e.response.data;
        this.error = (resp && resp.message) ? resp.message : 'Invalid or expired OTP.';
      } finally {
        this.verifying = false;
      }
    }
  },
};
</script>
