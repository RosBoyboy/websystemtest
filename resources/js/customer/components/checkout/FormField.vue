<template>
  <div class="mb-4">
    <label :for="fieldId" class="block text-sm font-semibold text-slate-300 mb-2">
      {{ label }}
      <span v-if="required" class="text-red-400">*</span>
    </label>
    <input
      :id="fieldId"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur')"
      :class="['w-full px-4 py-3 rounded-lg bg-slate-800 border-2 transition-all',
        error
          ? 'border-red-500 text-red-200 focus:border-red-400 focus:outline-none'
          : 'border-slate-700 text-slate-100 focus:border-orange-500 focus:outline-none hover:border-slate-600']"
      :placeholder="placeholder"
    />
    <transition name="fade">
      <p v-if="error" class="mt-2 text-xs text-red-400 flex items-center gap-1">
        <span>⚠️</span>
        {{ error }}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FormField',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  emits: ['input', 'blur'],
  computed: {
    fieldId() {
      return `field-${this.label.replace(/\s+/g, '-').toLowerCase()}`;
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
