import Vue from 'vue'
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
  }
});
