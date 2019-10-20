<template>
  <div id="home">
    <h2>Home</h2>
    <div class="row">
      <div class="col-sm-12 col-md-auto mb-1">
        <b-form-input
          required
          placeholder="riodweber@gmail.com"
          type="email"
          style="min-width: 21rem;"
        ></b-form-input>
      </div>
      <div class="col-sm-12 col-md-auto ml-auto mb-1">
        <VueCtkDateTimePicker only-date right style="min-width: 21rem;" />
      </div>
    </div>
    <div class="mt-3">
      <div class="d-flex flex-fill">
        <div class="d-flex overflow-auto">
          <div v-for="c in cards" :key="c" class="card mr-3" style="min-width: 21rem;">
            <div class="card-body">
              <div class="mb-4">
                <h4>Sunday, June 6th</h4>
                <b-progress :value="60" :max="100" height=".5rem"></b-progress>
              </div>
              <div>
                <div class="card mt-3">
                  <div class="card-body">
                    <small class="text-muted">9:00 AM - 11:30 AM</small>
                    <h5 class="card-title">Card title</h5>
                    <p
                      class="card-text"
                    >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary btn-sm">Go somewhere</a>
                  </div>
                </div>
                <div class="card mt-3">
                  <div class="card-body">
                    <small class="text-muted">9:00 AM - 11:30 AM</small>
                    <h5 class="card-title">Card title</h5>
                    <p
                      class="card-text"
                    >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary btn-sm">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import HelloWorld from '@/components/HelloWorld.vue';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
  name: 'home',
  components: {
    HelloWorld,
    VueCtkDateTimePicker,
  },
  data: () => {
    return {
      cards: 7,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
