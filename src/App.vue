<template>
  <div id="app">
    <div id="nav">
      <TopNav />
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'home',
  components: {
    TopNav,
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
body {
  background-color: #f0f6f7 !important;
}
#app {
}
</style>
