<template>
  <div id="home">
    <div>
      <h2>Schedule</h2>
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-3 mb-1">
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
          <VueCtkDateTimePicker only-date right style="min-width: 21rem;" />
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="row">
        <div class="col-md-12 col-lg-auto">
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="m-0">Options</h5>
            </div>
            <div class="card-body">asdf</div>
          </div>
        </div>
        <div class="col-md-12 col-lg">
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="m-0">Filters</h5>
            </div>
            <div class="card-body">asdf</div>
          </div>
          <div class>
            <div class="card-header">asdf</div>
            <div class="table-responsive">
              <table class="table table-bordered table-sm bg-white">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td scope="row">2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td scope="row">3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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
