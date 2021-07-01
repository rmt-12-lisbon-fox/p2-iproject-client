import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comedians: [],
    dadJokes: [],
    comedian: []
  },
  mutations: {
    FETCHCOMEDIANS (state, payload) {
      state.comedians = payload
    },
    DADJOKES (state, payload) {
      state.dadJokes = payload
    },
    SEEPROFILE (state, payload) {
      state.comedian = payload
    }
  },
  actions: {
    fetchComedians (context) {
      axios
        .get('/comedians', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data)
          context.commit('FETCHCOMEDIANS', data)
        })
        .catch(console.log)
    },
    dadJokes (context) {
      axios
        .get('/jokes', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data)
          context.commit('DADJOKES', data)
        })
        .catch(console.log)
    },
    seeProfile (context, payload) {
      axios
        .get(`/comedians/${payload}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data)
          context.commit('SEEPROFILE', data)
        })
        .catch(console.log)
    }
  },
  modules: {
  }
})
