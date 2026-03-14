<template>
  <div style="min-height:100vh;display:flex;flex-direction:column;background:#0a0a0a;">
    <CustomerNavbar />
    <main style="flex:1;">
      <slot />
    </main>
    <CustomerFooter />
  </div>
</template>

<script>
import CustomerNavbar from './CustomerNavbar.vue';
import CustomerFooter from './CustomerFooter.vue';

export default {
  name: 'CustomerLayout',
  components: { CustomerNavbar, CustomerFooter },
};
</script>
