<template>
  <div class="fixed bottom-0 left-0 right-0 md:sticky md:top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 md:border-t-0 p-4 md:p-6 rounded-t-lg md:rounded-lg">
    <div class="max-w-7xl mx-auto">
      <!-- Desktop: Order summary -->
      <div class="hidden md:grid md:grid-cols-4 md:gap-4 md:items-center">
        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">Items</p>
          <p class="text-xl font-bold text-white">{{ itemCount }}</p>
        </div>
        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">Subtotal</p>
          <p class="text-xl font-bold text-white">${{ subtotal }}</p>
        </div>
        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">Shipping</p>
          <p class="text-xl font-bold text-orange-500">${{ shipping }}</p>
        </div>
        <div class="text-right">
          <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">Total</p>
          <p class="text-2xl font-black text-white">${{ total }}</p>
        </div>
      </div>

      <!-- Mobile: Summary -->
      <div class="md:hidden flex items-center justify-between mb-3">
        <div>
          <p class="text-xs text-slate-400 uppercase tracking-wider">{{ itemCount }} items</p>
          <p class="text-lg font-bold text-white">${{ total }}</p>
        </div>
        <div class="text-right">
          <p class="text-xs text-slate-300">
            <span class="line-through text-slate-500">${{ subtotal }}</span>
            <span class="text-orange-500 font-semibold ml-1">+${{ shipping }} shipping</span>
          </p>
        </div>
      </div>

      <!-- Progress indicator -->
      <div v-if="currentStep" class="mb-4">
        <div class="flex items-center gap-2">
          <div class="flex-1 max-w-xs">
            <div class="flex justify-between text-10px text-slate-400 mb-1">
              <span v-for="(step, idx) in steps" :key="`step-${idx}`"
                :class="['font-semibold', idx < currentStepIndex ? 'text-green-500' : idx === currentStepIndex ? 'text-orange-500' : 'text-slate-500']">
                {{ step }}
              </span>
            </div>
            <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div :style="{ width: `${(currentStepIndex + 1) / steps.length * 100}%` }"
                class="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StickyCartSummary',
  props: {
    itemCount: {
      type: Number,
      default: 0
    },
    subtotal: {
      type: [String, Number],
      default: '0.00'
    },
    shipping: {
      type: [String, Number],
      default: '0.00'
    },
    total: {
      type: [String, Number],
      default: '0.00'
    },
    currentStep: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      steps: ['Cart', 'Shipping', 'Payment', 'Review']
    };
  },
  computed: {
    currentStepIndex() {
      return this.steps.findIndex(step => step.toLowerCase() === (this.currentStep || '').toLowerCase());
    }
  },
  methods: {
    formatNumber(num) {
      return parseFloat(num).toFixed(2);
    }
  }
};
</script>
