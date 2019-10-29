<template>
  <div id="home">
    <div>
      <h2>Engagements</h2>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 mb-1">
          <div class="row">
            <div class="col-sm-12 col-md mb-1">
              <b-button variant="secondary" class="w-100">Options</b-button>
            </div>
            <div class="col">
              <b-button variant="secondary" class="w-100">Filters</b-button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-auto ml-auto mb-1">
          <div class="row">
            <div class="col mb-1">
              <div class="row text-nowrap">
                <div class="col">
                  <b-button variant="primary">New Event</b-button>
                </div>
                <div class="col">
                  <b-button variant="primary">New Place</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="row">
        <div class="col">
          <div class="card mb-3">
            <div class="card-body">New Event</div>
          </div>
          <div class="card">
            <h5 class="card-header">Template Settings</h5>
            <div class="card-body">asdf</div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3">
            <div class="card-body">New Place</div>
          </div>
          <div class="card">
            <h5 class="card-header">Templates</h5>
            <div class="card-body">asdf</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// firebase
// import { db } from '@/db';
// dragable
// import { Container, Draggable } from 'vue-smooth-dnd';
// date picker
// import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
// import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
  name: 'Engagements',
  components: {
    // VueCtkDateTimePicker,
    // Container,
    // Draggable,
  },
  data: () => {
    return {};
  },
  firebase: {},
  // mounted() {

  // },
  methods: {},
};
</script>

<style scoped lang="scss">
</style>
