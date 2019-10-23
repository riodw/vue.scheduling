<template>
  <div id="home">
    <div>
      <h2>Schedule</h2>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 mb-1">
          <div class="row">
            <div class="col-sm-12 col-md mb-1">
              <b-button variant="secondary" class="w-100">Options</b-button>
            </div>
            <div class="col">
              <b-button variant="secondary" class="w-100">Filters</b-button>
            </div>
            <div class="col d-none d-md-block">
              <b-button variant="warning" class="w-100">Edit</b-button>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-auto ml-auto mb-1">
          <VueCtkDateTimePicker only-date right style="min-width: 21rem;" />
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="row">
        <div class="col-md-12 col-lg-auto pr-0">
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="m-0">Options</h5>
            </div>
            <div class="card-body">asdf</div>
          </div>
        </div>
        <div class="col-md-12 col-lg">
          <div class="card mb-3">
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
            </div>
          </div>
          <div>
            <div class="card mb-3">
              <div class="card-body">
                Cassian's Schedule
              </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
  name: 'home',
  components: {
    VueCtkDateTimePicker,
  },
  data: () => {
    return {};
  },
};
</script>

<style scoped lang="scss">
</style>
