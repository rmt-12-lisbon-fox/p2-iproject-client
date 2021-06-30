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
    },
    translate: {
      resultTextInd: "",
      resultTextEng: ""
    }
  },
  mutations: {
    LOGIN(state, payload) {
      state.user.fullName = payload;
    },
    LOGOUT(state, payload) {
      state.user.fullName = "";
    },
    HOME_PAGE(state, payload) {
      state.user.fullName = payload;
    },
    TRANSLATE_TEXT(state, payload) {
      state.translate.resultTextInd = payload.resultTextInd;
      state.translate.resultTextEng = payload.resultTextEng;
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
    },
    async registerButton(context, payload) {
      try {
        const result = await axios({
          url: "/register",
          method: "POST",
          data: { ...payload }
        });
        Vue.swal({
          icon: "success",
          title: "Congratulation",
          text: `${result.data.email} success to register`
        });
        router.push({ path: "/login" });
      } catch (error) {
        let message = error.response.data.message;
        if (Array.isArray(error.response.data.message)) {
          message = error.response.data.message.join(", ");
        }
        Vue.swal({
          icon: "error",
          title: "Failed to register",
          text: message
        });
      }
    },
    toHomePage(context, payload) {
      context.commit("HOME_PAGE", localStorage.name);
      router.push({ path: "/" }).catch(() => {});
    }
  },
  modules: {}
});
