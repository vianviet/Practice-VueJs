import authenticateApi from "@/api/authenticateApi";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openSearch: false,
    openLogin: false,
    isLoading: false,
    email: "",
    role: "",
    avatar:
      "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
  },
  getters: {
    isAuthenticate(state) {
      return state.email !== "" && state.role !== "";
    },
  },
  mutations: {
    changeOpenLogin(state, data) {
      state.openLogin = data;
    },
    changeIsLoading(state, data) {
      state.isLoading = data;
    },
    changeEmail(state, data) {
      state.email = data;
    },
    changeRole(state, data) {
      state.role = data;
    },
    changeOpenSearch(state, data) {
      state.openSearch = data;
    },
    changeAvatar(state, data) {
      state.avatar = data;
    },
  },
  actions: {
    login({ commit }, data) {
      commit("changeIsLoading", true);
      return authenticateApi
        .login(data)
        .then((data) => {
          setTimeout(() => {
            commit("changeIsLoading", false);
            commit("changeOpenLogin", false);
          }, 1000);
          return Promise.resolve(data);
        })
        .catch((error) => {
          commit("changeIsLoading", false);
          return Promise.reject(error);
        });
    },
    logout({ commit }) {
      commit("changeEmail", "");
      commit("changeRole", "");
      localStorage.clear();
    },
  },
  modules: {},
});
