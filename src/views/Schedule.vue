<template>
  <div id="home">
    <div>
      <h2>Schedule</h2>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 mb-1">
          <div class="row">
            <div class="col-sm-12 col-md mb-1">
              <b-button
                :pressed.sync="page.options"
                variant="secondary"
                class="w-100"
                >Options</b-button
              >
            </div>
            <div class="col">
              <b-button
                :pressed.sync="page.filters"
                variant="secondary"
                class="w-100"
                >Filters</b-button
              >
            </div>
            <div class="col d-none d-md-block">
              <b-button
                :pressed.sync="page.edit"
                variant="primary"
                class="w-100"
                >Edit</b-button
              >
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-auto ml-auto mb-1">
          <div class="row">
            <div class="col mb-1">
              <VueCtkDateTimePicker only-date right style="min-width: 21rem;" />
            </div>
            <div class="col mb-1">
              <b-button block variant="outline-primary">End</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="row">
        <div v-if="page.options" class="col-md-12 col-lg-auto pr-0">
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="m-0">Options</h5>
            </div>
            <div class="card-body">asdf</div>
          </div>
        </div>
        <div class="col-md-12 col-lg">
          <div v-if="page.filters" class="card mb-3">
            <div class="card-header">
              <h5 class="m-0">Filters</h5>
            </div>
            <div class="card-body">
              <div class="form-inline">
                <b-dropdown text="Event" variant="primary" class="mr-1 mb-1">
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
                  <b-dropdown-item active>Active action</b-dropdown-item>
                </b-dropdown>
                <b-dropdown text="Name" variant="primary" class="mr-1 mb-1">
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
                  <b-dropdown-item active>Active action</b-dropdown-item>
                </b-dropdown>
                <b-input-group append="or" class="mr-1 mb-1">
                  <template v-slot:prepend>
                    <b-dropdown text="is">
                      <b-dropdown-item>Action A</b-dropdown-item>
                      <b-dropdown-item>Action B</b-dropdown-item>
                    </b-dropdown>
                  </template>
                  <b-form-input></b-form-input>
                </b-input-group>
                <b-button variant="danger" class="mb-1">
                  <font-awesome-icon :icon="['far', 'trash-alt']" />
                </b-button>
              </div>
              <div>
                <b-dropdown
                  size="sm"
                  variant="outline-primary"
                  text="Add Another"
                  class="mt-3"
                  no-caret
                >
                  <b-dropdown-item>Event</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div v-if="page.edit" class="card mb-3">
                <div class="card-body">Cassiani's Schedule</div>
              </div>
              <div>
                <!-- <div class="card-header">asdf</div> -->
                <div class="table-responsive">
                  <table class="table table-bordered table-sm bg-white">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                      </tr>
                      <tr>
                        <th></th>
                        <th>Jun, 9</th>
                        <th>Jun, 10</th>
                        <th>Jun, 11</th>
                        <th>Jun, 12</th>
                        <th>Jun, 13</th>
                        <th>Jun, 14</th>
                        <th>Jun, 15</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Shift 1</th>
                        <td>Rio</td>
                        <td>Rio</td>
                        <td>Rio</td>
                        <td>Rio</td>
                        <td>Rio</td>
                        <td>Rio</td>
                        <td>Rio</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div v-if="page.edit" class="col-auto d-none d-xl-block">
              <div class="card mb-3">
                <h6 class="card-header">Hold Box</h6>
                <div class="card-body">
                  <div class="simple-page">
                    <Container group-name="drag-a">
                      <Draggable v-for="item in hold_box" :key="item.id">
                        <div class="btn btn-primary mb-1"
                          >{{ item.first_name }}&nbsp;{{ item.last_name }}</div
                        >
                      </Draggable>
                    </Container>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <input
                    class="form-control"
                    placeholder="Search"
                    type="text"
                  />
                </div>
                <Container
                  tag="ul"
                  group-name="drag-a"
                  @drag-start="(e) => log('drag start', e)"
                  @drop="(e) => onCardDrop(e)"
                  :get-child-payload="getChildPayload()"
                  drop-class="card-ghost-drop"
                  drag-class="card-ghost"
                  class="list-group list-group-flush"
                >
                  <Draggable
                    tag="li"
                    v-for="item in users"
                    :key="item.id"
                    class="list-group-item"
                  >
                    <div> {{ item.first_name }}&nbsp;{{ item.last_name }} </div>
                  </Draggable>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// firebase
import { db } from '@/db';
// dragable
import { Container, Draggable } from 'vue-smooth-dnd';
// date picker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
  name: 'Schedule',
  components: {
    VueCtkDateTimePicker,
    Container,
    Draggable,
  },
  data: () => {
    return {
      // firebase
      users: [],
      scheduling: [],
      hold_box: [],

      // page stuff
      page: {
        edit: true,
        filters: true,
        options: true,
      },
    };
  },
  firebase: {
    users: db.ref('/users'),
    scheduling: db.ref('/'),
  },
  mounted() {
    // update
    console.log(this.users);
  },
  methods: {
    onCardDrop(dropResult) {
      console.log(dropResult);
      // this.users = applyDrag(this.users, dropResult);
    },
    printt() {
      console.log(this.scheduling);
    },
    log(...params) {
      console.log(...params);
    },
    getChildPayload() {
      return () => {
        return {
          key: 'this',
        };
      };
    },
  },
};
</script>

<style>
.card-ghost {
  transition: transform 0.18s ease;
  transform: rotateZ(5deg);
  background-color: yellow;
}
.card-ghost-drop {
  transition: transform 0.18s ease-in-out;
  transform: rotateZ(0deg);
}
</style>

<style scoped lang="scss"></style>
