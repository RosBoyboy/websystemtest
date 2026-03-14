<template>
  <div class="flex h-screen bg-slate-950 overflow-hidden">
    <SellerSidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed" />

    <div class="flex flex-col flex-1 overflow-hidden">
      <SellerTopbar @toggle-sidebar="sidebarCollapsed = !sidebarCollapsed" />

      <main class="flex-1 overflow-y-auto p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import SellerSidebar from './SellerSidebar.vue';
import SellerTopbar  from './SellerTopbar.vue';

export default {
  name: 'SellerLayout',
  components: { SellerSidebar, SellerTopbar },
  data() {
    return { sidebarCollapsed: false };
  },
};
</script>
