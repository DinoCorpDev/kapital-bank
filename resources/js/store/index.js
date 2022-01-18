import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import credit from './modules/credit';
import settings from './modules/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    credit,
    settings
  }
});
