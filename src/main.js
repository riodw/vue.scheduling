import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
// PLUGINS
import { rtdbPlugin } from 'vuefire';
import BootstrapVue from 'bootstrap-vue';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// FONTS
// https://github.com/FortAwesome/vue-fontawesome
// Kristine Mode
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faTrashAlt);

// components
Vue.component('font-awesome-icon', FontAwesomeIcon);
// use
Vue.use(rtdbPlugin);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
