require('./bootstrap');

// Vue
import Vue from 'vue';

// Vue Router
import router from './router';

// Vuex
import store from './store';

// BootstrapVue
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

// Vue Axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

// Vue FontAwesome
import './fontawesome';

// Sweet Alert
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

// Vue Currency
import VueCurrencyFilter from 'vue-currency-filter';
Vue.use(VueCurrencyFilter, { symbol: '$' });

// Layouts
// import App from './layouts/App.vue'
Vue.component('LayoutApp', require('./layouts/App').default);

// Vue Components
Vue.component('Sidebar', require('./components/layout/Sidebar').default);
Vue.component('Topbar', require('./components/layout/Topbar').default);
Vue.component('FooterCustom', require('./components/layout/FooterCustom').default);

Vue.component('CreditForm', require('./components/CreditForm').default);
Vue.component('CreditCalculator', require('./components/CreditCalculator').default);

/* Vue Init */
const app = new Vue({
  el: '#app',
  router,
  store
});
