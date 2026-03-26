<template>
  <div class="mb-6 pb-4 border-b border-slate-800">
    <p class="text-sm font-semibold text-orange-400">{{ steps[currentStep] }}</p>
  </div>
</template>

<script>
export default {
  name: 'CheckoutProgress',
  props: {
    currentStep: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      steps: ['📦 Review Cart', '📍 Shipping Address', '💳 Payment Method', '✅ Order Review']
    };
  }
};
</script>
