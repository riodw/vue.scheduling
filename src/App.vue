<template>
  <div id="app" class="d-flex flex-column position-absolute overflow-hidden h-100">
    <div id="nav">
      <TopNav />
    </div>
    <div id="content" class="d-flex flex-column flex-fill p-3">
      <router-view />
    </div>
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
  overflow-y: hidden;
}
body {
  background-color: #f0f6f7 !important;
}
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ddd;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #888;
}
#app {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
