<template>
  <header class="flex items-center justify-between bg-slate-900 border-b border-slate-800 px-6 py-3">
    <!-- Toggle sidebar -->
    <button
      @click="$emit('toggle-sidebar')"
      class="text-slate-400 hover:text-white transition-colors"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

    <!-- Right side -->
    <div class="flex items-center gap-4">
      <!-- Greeting -->
      <span class="text-slate-400 text-sm hidden md:block">
        Welcome, <span class="text-white font-medium">{{ user ? user.name : 'Admin' }}</span>
      </span>

      <!-- Avatar -->
      <div class="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">
        {{ initials }}
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AdminTopbar',
  computed: {
    ...mapGetters('auth', ['currentUser']),
    user() { return this.currentUser; },
    initials() {
      if (!this.user) return 'A';
      return this.user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    },
  },
};
</script>
