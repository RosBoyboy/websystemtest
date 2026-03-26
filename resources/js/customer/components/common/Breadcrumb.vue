<template>
  <nav v-if="breadcrumbs.length > 0" class="text-sm text-slate-400 mb-6 flex items-center gap-2 flex-wrap">
    <router-link :to="{ name: 'home' }" class="hover:text-slate-200 transition-colors flex items-center gap-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M9 12l3 3l5 -5"/>
      </svg>
      <span>Home</span>
    </router-link>
    
    <div v-for="(item, idx) in breadcrumbs" :key="`breadcrumb-${idx}`" class="flex items-center gap-2">
      <span>/</span>
      <router-link 
        v-if="item.route" 
        :to="item.route" 
        class="hover:text-slate-200 transition-colors">
        {{ item.label }}
      </router-link>
      <span v-else class="text-slate-300">{{ item.label }}</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
