<template>
  <div v-if="!$auth.loading">
    <div v-if="!$auth.isAuthenticated" @click="login()">
      Log in
    </div>
    <div v-if="$auth.isAuthenticated" @click="logout()">
      Log out
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth0',
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
