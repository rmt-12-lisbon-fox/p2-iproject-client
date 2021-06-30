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
    },
    challenge: {
      data: []
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
    },
    GAMES_PAGE(state, payload) {
      state.user.fullName = payload;
    },
    SELECT_CHALLENGE(state, payload) {
      state.challenge.data = payload.data;
      state.challenge.access_token = payload.access_token;
    },
    BACK_GAMES(state, payload) {
      state.challenge.data = [];
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
    },
    toGamesPage(context, payload) {
      context.commit("GAMES_PAGE", localStorage.name);
      router.push({ path: "/games" }).catch(() => {});
    },
    submitChallenge(context, payload) {
      let wordInput = [];
      if (context.state.challenge.data.length === 1) {
        wordInput.push(payload.kata);
      } else if (context.state.challenge.data.length === 2) {
        wordInput.push(payload.kata1);
        wordInput.push(payload.kata2);
      } else if (context.state.challenge.data.length === 3) {
        wordInput.push(payload.kata1);
        wordInput.push(payload.kata2);
        wordInput.push(payload.kata3);
      }
      axios({
        url: "/games",
        method: "post",
        data: {
          wordInput: wordInput,
          ChallengeId: context.state.challenge.data.length,
          wordBase: context.state.challenge.data
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          if (data.score === 0) {
            Vue.swal({
              icon: "info",
              title: "You have to try again",
              text: `Your score is ${data.score}`
            });
          } else if (data.score < 10) {
            Vue.swal({
              icon: "success",
              title: "You're amazing",
              text: `Your score is ${data.score}`
            });
          } else if (data.score >= 10) {
            Vue.swal({
              icon: "success",
              title: "You are genius",
              text: `Your score is ${data.score}`
            });
          }
          context.commit("BACK_GAMES");
          context.dispatch("toGamesPage");
          // context.commit("SELECT_CHALLENGE", data);
        })
        .catch(error => {
          Vue.swal({
            icon: "error",
            title: "Failed to login",
            text: error.response.data.message
          });
        });
    },
    backGames(context, payload) {
      context.commit("BACK_GAMES");
    },
    translateText(context, payload) {
      let data = {};
      if (payload.typeTranslate % 2 === 0) {
        data.from = "id";
        data.to = "en";
        data.text = payload.textInd;
      } else if (payload.typeTranslate % 2 !== 0) {
        data.from = "en";
        data.to = "id";
        data.text = payload.textEng;
      }
      microsoftTranslator({
        url: "/translate",
        params: {
          "api-version": "3.0",
          to: data.to,
          from: data.from,
          textType: "plain",
          profanityAction: "NoAction"
        },
        method: "post",
        data: [
          {
            Text: data.text
          }
        ]
      })
        .then(({ data }) => {
          let result = {};
          if (payload.typeTranslate % 2 === 0) {
            result.textInd = data[0].translations[0].text;
          } else if (payload.typeTranslate % 2 !== 0) {
            result.textEng = data[0].translations[0].text;
          }
          context.commit("TRANSLATE_TEXT", {
            resultTextInd: result.textInd,
            resultTextEng: result.textEng
          });
        })
        .catch(err => {
          console.log(err, "ini error di index");
        });
    }
  },
  modules: {}
});
