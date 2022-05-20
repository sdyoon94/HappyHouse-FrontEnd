import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logined: {
      userId: "",
      username: "",
      email: "",
      joindate: "",
    },
  },
  getters: {
    getUserId() {
      return this.logined.userId;
    },
    getUsername() {
      return this.logined.username;
    },
    getUserEmail() {
      return this.logined.email;
    },
    getUserInfo() {
      return this.logined;
    },
  },
  mutations: {
    setLogined(state, user) {
      state.logined.userId = user.userId;
      state.logined.username = user.username;
      state.logined.email = user.email;
      state.logined.joindate = user.joindate;
    },
    setLogout(state) {
      state.logined.userId = "";
      state.logined.username = "";
      state.logined.email = "";
      state.logined.joindate = "";
    },
  },
  actions: {},
  modules: {},
});
