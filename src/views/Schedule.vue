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
                        <td v-for="column in seven" :key="column.id">
                          <!-- :should-accept-drop="
                              (src, payload) =>
                                shouldAcceptDrop(index, src, payload)
                          "-->
                          <Container
                            group-name="drag-a"
                            @drag-start="(e) => onCardDrag(e)"
                            @drop="(e) => onCardDropSchedule(column.id, e)"
                            :get-child-payload="
                              getChildPayloadFromTable(column.id)
                            "
                            drop-class="card-ghost-drop"
                            drag-class="card-ghost shadow-lg"
                          >
                            <Draggable
                              v-for="item in column.children"
                              :key="item.id"
                            >
                              <div class="btn btn-primary border">
                                {{ item.first_name[0] }}{{ item.last_name[0] }}
                              </div>
                            </Draggable>
                          </Container>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              v-if="page.edit"
              class="col-auto d-none d-xl-block pl-0"
              style="min-width: 20rem;"
            >
              <div class="card mb-3">
                <h6 class="card-header">Hold Box</h6>
                <div class="card-body">
                  <div class="simple-page">
                    <Container
                      group-name="drag-a"
                      @drop="(e) => onCardDrop(e)"
                      :should-accept-drop="
                        (src, payload) => shouldAcceptDrop(hold_box, payload)
                      "
                      :get-child-payload="getChildPayloadFromHoldBox()"
                      drop-class="card-ghost-drop"
                      drag-class="card-ghost"
                      class="list-group list-group-flush"
                    >
                      <Draggable v-for="item in hold_box" :key="item.id">
                        <div class="btn btn-primary mb-1"
                          >{{ item.first_name }}&nbsp;{{ item.last_name }}</div
                        >
                      </Draggable>
                    </Container>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="card-header">
                  <input
                    class="form-control"
                    placeholder="Search People"
                    type="text"
                  />
                </div>
                <!-- @drag-start="(e) => onCardDrag(e)" -->
                <Container
                  id="search_people"
                  group-name="drag-a"
                  :get-child-payload="getChildPayloadFromUsers()"
                  :should-accept-drop="
                    (e) => {
                      false;
                    }
                  "
                  drag-class="btn btn-primary card-ghost btn-drag"
                  class="list-group list-group-flush"
                >
                  <Draggable v-for="item in users" :key="item.id" class>
                    <div class="btn"
                      >{{ item.first_name }}&nbsp;{{ item.last_name }}</div
                    >
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
      seven: [
        {
          id: 1,
          children: [],
        },
        {
          id: 2,
          children: [],
        },
        {
          id: 3,
          children: [],
        },
        {
          id: 4,
          children: [],
        },
        {
          id: 5,
          children: [],
        },
        {
          id: 6,
          children: [],
        },
        {
          id: 7,
          children: [],
        },
      ],

      // page stuff
      page: {
        edit: true,
        filters: false,
        options: false,
      },
      // loaded
      loaded: {
        users: false,
      },
    };
  },
  firebase: {
    users: db.ref('/users'),
  },
  // firebase: {
  //   users: db.ref('/users'),
  //   // scheduling: db.ref('/'),
  // },
  mounted() {
    // var vm = this;
    // vm.seven[0].push(vm.users[0]);
    // console.log(vm.users);
  },
  methods: {
    onCardDrag(drop_result) {
      // var vm = this;
      return drop_result;
      // console.log('drag start', drop_result);

      // this.users = applyDrag(this.users, drop_result);
    },
    onCardDrop(drop_result) {
      var vm = this;
      if (!vm.hold_box.includes(drop_result.payload)) {
        if (vm.hold_box.length > 4) {
          vm.hold_box.pop();
        }
        vm.hold_box.unshift(drop_result.payload);
      }
    },
    onCardDropSchedule(column_id, drop_result) {
      // console.log(column_id, drop_result);
      var vm = this;
      if (
        drop_result.removedIndex !== null ||
        drop_result.addedIndex !== null
      ) {
        var column = vm.seven.filter((p) => p.id === column_id)[0];
        column.children = vm.applyDrag(column.children, drop_result);
      }
    },
    getChildPayloadFromUsers() {
      var vm = this;
      return (index) => {
        return vm.users[index];
      };
    },
    getChildPayloadFromTable(column_id) {
      var vm = this;
      return (index) => {
        var column = vm.seven.filter((p) => p.id === column_id);
        return column[0].children[index];
      };
    },
    getChildPayloadFromHoldBox() {
      var vm = this;
      return (index) => {
        return vm.hold_box[index];
      };
    },
    shouldAcceptDrop(array, payload) {
      console.log(array, payload);
      return true;
    },
    applyDrag(arr, drop_result) {
      console.log(arr, drop_result);
      const { removedIndex, addedIndex, payload } = drop_result;
      if (removedIndex === null && addedIndex === null) return arr;

      const result = [...arr];
      let itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        if (result.includes(itemToAdd)) {
          alert('Already added');
        } else {
          result.splice(addedIndex, 0, itemToAdd);
        }
      }

      return result;
    },
  },
  watch: {
    users: {
      handler(users) {
        var vm = this;
        if (users.length && !vm.loaded.users) {
          vm.seven[0].children = [users[0], users[1]];
          vm.hold_box.push(users[2]);
          vm.loaded.users = true;
        }
      },
    },
  },
};
</script>

<style>
.card-ghost {
  transition: transform 0.18s ease;
  transform: rotateZ(5deg);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175) !important;
}
.card-ghost-drop {
  transition: transform 0.18s ease-in-out;
  transform: rotateZ(0deg);
}
.btn-drag {
  width: auto !important;
  border: none !important;
  text-align: center !important;
}
</style>

<style scoped lang="scss">
#search_people .btn {
  width: 100%;
  text-align: left;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
#search_people div:first-of-type .btn {
  border: none;
}
</style>
