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
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
