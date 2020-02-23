<template>
  <div>
    <h2>People</h2>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-1">
        <div class="row">
          <div class="col-sm-12 col-md mb-1">
            <b-button
              :pressed.sync="page.options"
              variant="secondary"
              class="w-100"
            >
              Display
            </b-button>
          </div>
          <div class="col">
            <b-button
              :pressed.sync="page.filters"
              variant="secondary"
              class="w-100"
            >
              Filters
            </b-button>
          </div>
          <div class="col d-none d-md-block">
            <b-button :pressed.sync="page.edit" variant="primary" class="w-100">
              Edit
            </b-button>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-auto ml-auto mb-1">
        <div class="row">
          <div class="col mb-1">
            <b-button block variant="outline-primary">
              Properties
            </b-button>
          </div>
          <div class="col mb-1">
            <b-button block variant="primary">New</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div v-if="page.filters" class="card mb-3">
        <div class="card-header">
          <h5 class="m-0">Filters</h5>
        </div>
        <div class="card-body">
          <div class="form-inline">
            <b-dropdown text="First Name" variant="primary" class="mr-1 mb-1">
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

      <div class="table-responsive">
        <table class="table table-bordered table-hover bg-white">
          <thead>
            <tr>
              <th
                v-for="user_property in user_properties"
                :key="user_property['.key']"
              >
                <b-dropdown
                  right
                  no-flip
                  :text="user_property.name"
                  variant="link"
                  no-caret
                >
                  <b-dropdown-form>
                    <b-input-group style="width: 200px;">
                      <template v-slot:append>
                        <b-button
                          @click="updateUserPropertyName(user_property)"
                          type="button"
                          variant="primary"
                        >
                          V
                        </b-button>
                      </template>
                      <b-form-input
                        v-model="user_property.name"
                        placeholder="Property name"
                      ></b-form-input>
                    </b-input-group>
                  </b-dropdown-form>
                  <b-dropdown-item>
                    asdf
                  </b-dropdown-item>
                </b-dropdown>
              </th>
              <th scope="col" class="text-right">
                <b-dropdown right text="+" variant="primary" no-caret>
                  <b-dropdown-item
                    @click="newProperty(property)"
                    v-for="property in property_types"
                    :key="property.id"
                  >
                    {{ property.name }}
                  </b-dropdown-item>
                </b-dropdown>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// firebase
import { db } from '@/db';

export default {
  name: 'People',
  components: {},
  data: () => {
    return {
      // firebase
      property_types: [],
      users: [],
      user_properties: [],
      user_property_data: [],
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
    property_types: db.ref('/property_types'),
    user_properties: db.ref('/user_properties'),
    user_property_data: db.ref('/user_property_data'),
  },
  mounted: {},
  methods: {
    newProperty(property) {
      var vm = this;
      console.log(vm.user_properties[0]['.key']);
      db.ref('/user_properties').push({
        id: 2,
        name: 'test',
        property_type: property.id,
      });
    },
    updateUserPropertyName(user_property) {
      // var vm = this;
      console.log(user_property);
      var tt = db
        .ref('/user_properties')
        .child(user_property['.key'])
        .set({
          name: user_property.name,
        });
      console.log(tt);
    },
  },
};
</script>
