<template>
  <div v-if="visible" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl max-w-md w-full">
      <!-- Icon & Title -->
      <div class="p-6 border-b border-slate-800 flex items-start gap-4">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" :style="{ backgroundColor: iconBgColor }">
          <span class="text-xl">{{ icon }}</span>
        </div>
        <div>
          <h3 class="text-lg font-bold text-white">{{ title }}</h3>
          <p class="text-sm text-slate-400 mt-1">{{ message }}</p>
        </div>
      </div>

      <!-- Confirmation warning -->
      <div v-if="destructive" class="px-6 py-4 bg-red-900/20 border-b border-slate-800">
        <p class="text-sm text-red-300 flex items-center gap-2">
          <span>⚠️</span>
          <strong>This action cannot be undone.</strong>
        </p>
      </div>

      <!-- Action details -->
      <div v-if="details" class="px-6 py-4 bg-slate-800/30 border-b border-slate-800">
        <p class="text-xs text-slate-400 font-semibold uppercase mb-2">Details:</p>
        <p class="text-sm text-slate-200">{{ details }}</p>
      </div>

      <!-- Buttons -->
      <div class="p-6 flex gap-3">
        <button
          @click="cancel"
          class="flex-1 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          @click="confirm"
          :class="['flex-1 px-4 py-2.5 font-semibold rounded-lg transition-colors',
            destructive
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-orange-500 hover:bg-orange-600 text-white']"
        >
          {{ confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    details: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: 'Confirm'
    },
    icon: {
      type: String,
      default: '❓'
    },
    destructive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['confirm', 'cancel'],
  computed: {
    iconBgColor() {
      return this.destructive ? '#dc2626' : '#f97316';
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm');
    },
    cancel() {
      this.$emit('cancel');
    }
  }
};
</script>
