<template>
  <div>
    <b-navbar toggleable="sm" type="light" variant="white">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand to="/" class="shadow rounded-lg p-2">RW</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/schedule">Schedule</b-nav-item>
          <b-nav-item to="/calendar">Calendar</b-nav-item>
          <b-nav-item to="/swap">Swap</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right no-caret>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <div class="rounded-lg overflow-hidden">
                <img
                  src="https://placekitten.com/g/30/30"
                  class="d-inline-block align-top"
                  alt="Kitten"
                />
              </div>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar-brand {
  font-size: 1rem;
  font-weight: 200 !important;
}
a.router-link-exact-active {
  font-weight: 600;
}
</style>
