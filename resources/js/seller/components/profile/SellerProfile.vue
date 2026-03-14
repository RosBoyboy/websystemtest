<template>
  <div class="max-w-2xl space-y-6">

    <div v-if="loading" class="text-slate-500 text-sm">Loading profile…</div>

    <template v-else>

      <!-- Avatar + store header -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center gap-5">
        <div class="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
          {{ initials }}
        </div>
        <div>
          <h2 class="text-white text-xl font-bold">{{ form.store_name || 'Your Store' }}</h2>
          <p class="text-slate-400 text-sm">{{ form.name }}</p>
          <span
            class="text-xs px-2 py-0.5 rounded-full mt-1 inline-block"
            :class="seller && seller.status === 'approved' ? 'bg-green-900/40 text-green-400' : 'bg-yellow-900/40 text-yellow-400'"
          >{{ seller ? seller.status : '' }}</span>
        </div>
      </div>

      <!-- Edit form -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h3 class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Store Information</h3>

        <div>
          <label class="block text-sm font-medium text-slate-400 mb-1">Your Name</label>
          <input v-model="form.name" type="text"
            class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors" />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-400 mb-1">Store Name</label>
          <input v-model="form.store_name" type="text"
            class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors" />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-400 mb-1">Store Description</label>
          <textarea v-model="form.store_description" rows="4"
            class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
            placeholder="Tell customers about your store…" />
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-400 mb-1">Logo URL</label>
          <input v-model="form.logo" type="text"
            class="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-orange-500 transition-colors"
            placeholder="https://…" />
        </div>

        <div v-if="error" class="p-3 bg-red-900/40 border border-red-700 rounded-lg text-red-400 text-sm">{{ error }}</div>
        <div v-if="success" class="p-3 bg-green-900/40 border border-green-700 rounded-lg text-green-400 text-sm">{{ success }}</div>

        <button @click="saveProfile" :disabled="saving"
          class="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
          {{ saving ? 'Saving…' : 'Save Profile' }}
        </button>
      </div>

      <!-- Account info (read-only) -->
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">Account Info</h3>
        <dl class="space-y-3 text-sm">
          <div class="flex justify-between">
            <dt class="text-slate-500">Email</dt>
            <dd class="text-white">{{ userEmail }}</dd>
          </div>
          <div class="flex justify-between">
            <dt class="text-slate-500">Member Since</dt>
            <dd class="text-white">{{ formatDate(userCreatedAt) }}</dd>
          </div>
        </dl>
      </div>

    </template>
  </div>
</template>

<script>
export default {
  name: 'SellerProfile',
  data() {
    return {
      loading:  false,
      saving:   false,
      error:    null,
      success:  null,
      seller:   null,
      userEmail:     '',
      userCreatedAt: '',
      form: {
        name:              '',
        store_name:        '',
        store_description: '',
        logo:              '',
      },
    };
  },
  computed: {
    initials() {
      return (this.form.store_name || this.form.name || 'S').charAt(0).toUpperCase();
    },
  },
  async created() {
    await this.fetchProfile();
  },
  methods: {
    async fetchProfile() {
      this.loading = true;
      try {
        const { data } = await this.$http.get('/seller/profile');
        this.seller       = data.seller;
        this.userEmail    = data.user.email;
        this.userCreatedAt = data.user.created_at;
        this.form = {
          name:              data.user.name || '',
          store_name:        data.seller.store_name        || '',
          store_description: data.seller.store_description || '',
          logo:              data.seller.logo              || '',
        };
      } catch (e) { console.error(e); }
      finally     { this.loading = false; }
    },
    async saveProfile() {
      this.error   = null;
      this.success = null;
      this.saving  = true;
      try {
        const { data } = await this.$http.put('/seller/profile', this.form);
        this.seller = data.seller;
        // Update vuex store
        this.$store.commit('auth/UPDATE_SELLER', data.seller);
        this.success = 'Profile updated successfully.';
      } catch (e) {
        const err = e.response?.data;
        this.error = err?.errors
          ? Object.values(err.errors).flat().join(' ')
          : (err?.message || 'Save failed.');
      } finally {
        this.saving = false;
      }
    },
    formatDate(d) {
      if (!d) return '—';
      return new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    },
  },
};
</script>
