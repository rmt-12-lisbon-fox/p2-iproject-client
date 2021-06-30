import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/axios";
import router from "../router";
import microsoftTranslator from "../apis/microsoftTranslator";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      fullName: ""
    }
  },
  mutations: {
    LOGIN(state, payload) {
      state.user.fullName = payload;
    },
    LOGOUT(state, payload) {
      state.user.fullName = "";
    }
  },
  actions: {
    async loginButton(context, payload) {
      try {
        const result = await axios({
          url: "/login",
          method: "POST",
          data: { ...payload }
        });
        localStorage.setItem("access_token", result.data.access_token);
        localStorage.setItem("name", result.data.name);
        context.commit("LOGIN", result.data.fullName);
        router.push({ path: "/" }).catch(() => {});
      } catch (error) {
        console.log(error);
        Vue.swal({
          icon: "error",
          title: "Failed to login",
          text: error.response.data.message
        });
      }
    },
    async googleLogin(context, googleUser) {
      try {
        var token = googleUser.getAuthResponse().id_token;
        const result = await axios({
          url: "/loginGoogle",
          method: "POST",
          data: { token }
        });
        localStorage.setItem("name", result.data.fullName);
        localStorage.setItem("access_token", result.data.access_token);
        context.commit("LOGIN", result.data.fullName);
        router.push({ path: "/" }).catch(() => {});
      } catch (error) {
        Vue.swal({
          icon: "error",
          title: "Failed to login",
          text: error.response.data.message
        });
      }
    },
    logout(context) {
      localStorage.clear();
      context.commit("LOGOUT");
      router.push({ path: "/login" }).catch(_ => {});
    }
  },
  modules: {}
});
