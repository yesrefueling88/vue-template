import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    userinfo: {},
  },
  getters: {
    getToken(state) {
      var s = JSON.parse(sessionStorage.getItem('store'));
      if (s) {
        state = s;
      }
      return state.token;
    },
    getUserInfo(state) {
      var s = JSON.parse(sessionStorage.getItem('store'));
      if (s) {
        state = s;
      }
      return state.userinfo;
    },
  },

  mutations: {
    setToken(state, value) {
      state.token = value;
      sessionStorage.setItem('store', JSON.stringify(state));
    },
    setUserInfo(state, value) {
      state.userinfo = value;
    },
  },
});
