import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get(){ return this.$root.moment }});

import App from './components/App.vue';

import './style.scss';

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store: {
    state: {
      currentYear: 2017,
      currentMonth: 3
    }
  }
});
