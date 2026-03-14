<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold text-white">Site Settings</h1>
      <button @click="saveAll" :disabled="saving"
        class="px-5 py-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition-colors">
        {{ saving ? 'Saving…' : 'Save All' }}
      </button>
    </div>

    <div v-if="loading" class="text-slate-500">Loading settings…</div>

    <div v-else>
      <div v-for="(group, groupName) in grouped" :key="groupName"
        class="bg-slate-900 rounded-xl border border-slate-800 p-6 space-y-4 mb-4">
        <h2 class="text-white font-semibold capitalize border-b border-slate-800 pb-2">{{ groupName }}</h2>
        <div v-for="setting in group" :key="setting.key" class="grid grid-cols-3 items-center gap-4">
          <label class="text-slate-400 text-sm col-span-1">{{ setting.label }}</label>
          <div class="col-span-2">
            <!-- Boolean toggle -->
            <div v-if="setting.type === 'boolean'" class="flex items-center gap-2">
              <button
                @click="setting.value = setting.value == '1' || setting.value === true ? '0' : '1'"
                class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors"
                :class="(setting.value == '1' || setting.value === true) ? 'bg-orange-500' : 'bg-slate-700'">
                <span class="inline-block h-3 w-3 transform rounded-full bg-white transition-transform"
                  :class="(setting.value == '1' || setting.value === true) ? 'translate-x-5' : 'translate-x-1'"/>
              </button>
              <span class="text-sm" :class="(setting.value == '1' || setting.value === true) ? 'text-orange-400' : 'text-slate-500'">
                {{ (setting.value == '1' || setting.value === true) ? 'Enabled' : 'Disabled' }}
              </span>
            </div>
            <!-- Number -->
            <input v-else-if="setting.type === 'number'" v-model="setting.value" type="number" step="0.01"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"/>
            <!-- Text fallback -->
            <input v-else v-model="setting.value" type="text"
              class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-orange-500"/>
          </div>
        </div>
      </div>
    </div>

    <!-- Save success toast -->
    <transition name="fade">
      <div v-if="saved" class="fixed bottom-6 right-6 bg-green-900/90 border border-green-700 text-green-300 px-5 py-3 rounded-xl text-sm shadow-xl">
        ✓ Settings saved successfully
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'SiteSettings',
  data() { return { saving: false, saved: false }; },
  computed: {
    ...mapState('settings', ['settings', 'loading']),
    ...mapGetters('settings', ['grouped']),
  },
  methods: {
    async saveAll() {
      this.saving = true;
      try {
        await this.$store.dispatch('settings/saveSettings', this.settings.map(s => ({ key: s.key, value: s.value })));
        this.saved = true;
        setTimeout(() => { this.saved = false; }, 3000);
      } finally { this.saving = false; }
    },
  },
  created() { this.$store.dispatch('settings/fetchSettings'); },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter, .fade-leave-to { opacity: 0; }
</style>
