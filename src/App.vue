<template>
  <div id="app">
    <div id="nav">
      <TopNav />
    </div>
    <div id="content" class="p-3">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'App',
  components: {
    TopNav,
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  // font-size: 14px !important;
}
body {
  background-color: #f0f6f7 !important;
}
</style>
