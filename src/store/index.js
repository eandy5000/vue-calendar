import Vue from 'vue';
import moment from 'moment';
import Vuex from 'vuex';
Vue.use(Vuex);
import axios from 'axios'

export default new Vuex.Store({
  state: {
    currentYear: 2017,
    currentMonth: 2,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false, 
    events: [],
    eventFormDate: moment()
  },
  mutations: {
    setCurrentMonth(state, payload) {
      state.currentMonth = payload;
    },
    setCurrentYear(state, payload) {
      state.currentYear = payload;
    },
    eventFormPos(state, payload) {
      state.eventFormPosX = payload.x;
      state.eventFormPosY = payload.y;
    },
    eventFormActive(state, payload) {
      state.eventFormActive = payload;
    },
    addEvent(state, payload) {
        state.events.push(payload);
    },
    eventFormDate(state, payload) {
        state.eventFormDate = payload;
    }

  },
  actions: {
      addEvent(context, payload) {
        let obj = {
            description: payload,
            date: context.state.eventFormDate
        }
        axios.post('/add_event', obj)
             .then((res) => {
                if(res.status === 200) {
                    context.commit('addEvent', obj);
                }
             });
      }
  }
});

