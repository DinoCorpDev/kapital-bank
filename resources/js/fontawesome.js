import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faAngleLeft,
  faAngleRight,
  faBars,
  faSignOutAlt,
  faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faAngleLeft, faAngleRight, faBars, faSignOutAlt, faTachometerAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
