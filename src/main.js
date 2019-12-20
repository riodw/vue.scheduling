import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
// PLUGINS
import { rtdbPlugin } from 'vuefire';
import BootstrapVue from 'bootstrap-vue';
// Import the Auth0 configuration
import { domain, clientId } from '../auth_config.json';
// Import the plugin here
import { Auth0Plugin } from './auth';
/** CSS */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
/** FONTS
 * https://github.com/FortAwesome/vue-fontawesome
 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faTrashAlt);

/** COMPONENTS */
Vue.component('font-awesome-icon', FontAwesomeIcon);
/** USE */
// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});
// firebase
Vue.use(rtdbPlugin);
// bootstrap
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/** VUE */
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
