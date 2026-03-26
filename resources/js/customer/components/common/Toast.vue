<template>
  <div v-if="visible" class="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
    <div :class="['px-4 py-3 rounded-lg flex items-center gap-3 shadow-lg', toastClass]">
      <!-- Icon -->
      <svg v-if="type === 'success'" class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <svg v-else-if="type === 'error'" class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
      <svg v-else-if="type === 'warning'" class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 2L2 20h20L12 2z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
      <svg v-else class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>

      <!-- Message -->
      <span :class="textClass">{{ message }}</span>

      <!-- Close button -->
      <button @click="close" :class="['ml-2 opacity-70 hover:opacity-100 transition-opacity', textClass]">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <line x1="6" y1="18" x2="18" y2="6"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info',
      validator: (v) => ['success', 'error', 'warning', 'info'].includes(v)
    },
    duration: {
      type: Number,
      default: 4000
    }
  },
  data() {
    return {
      visible: true,
      timer: null
    };
  },
  computed: {
    toastClass() {
      const baseClass = 'border backdrop-blur-sm';
      switch (this.type) {
        case 'success':
          return `${baseClass} bg-green-900/40 border-green-700 text-green-100`;
        case 'error':
          return `${baseClass} bg-red-900/40 border-red-700 text-red-100`;
        case 'warning':
          return `${baseClass} bg-yellow-900/40 border-yellow-700 text-yellow-100`;
        default:
          return `${baseClass} bg-blue-900/40 border-blue-700 text-blue-100`;
      }
    },
    textClass() {
      switch (this.type) {
        case 'success':
          return 'text-green-100';
        case 'error':
          return 'text-red-100';
        case 'warning':
          return 'text-yellow-100';
        default:
          return 'text-blue-100';
      }
    }
  },
  mounted() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => this.close(), this.duration);
    }
  },
  beforeUnmount() {
    if (this.timer) clearTimeout(this.timer);
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('close');
    }
  }
};
</script>
