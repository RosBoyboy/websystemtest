<template>
  <div class="flex h-screen bg-slate-950 overflow-hidden">
    <AdminSidebar :collapsed="sidebarCollapsed" @toggle="sidebarCollapsed = !sidebarCollapsed" />

    <div class="flex flex-col flex-1 overflow-hidden">
      <AdminTopbar @toggle-sidebar="sidebarCollapsed = !sidebarCollapsed" />

      <main class="flex-1 overflow-y-auto p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import AdminSidebar from './AdminSidebar.vue';
import AdminTopbar  from './AdminTopbar.vue';

export default {
  name: 'AdminLayout',
  components: { AdminSidebar, AdminTopbar },
  data() {
    return { sidebarCollapsed: false };
  },
};
</script>
