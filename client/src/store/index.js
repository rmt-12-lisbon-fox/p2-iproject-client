import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn : false
  },
  mutations: {
    LOGIN(state, payload){
      state.isLoggedIn = true
    },
    LOGOUT(state, payload){
      state.isLoggedIn = false
    }
  },
  actions: {
    register(context, payload) {
      const { email, password } = payload
      

      return axios({
        url: '/register',
        method: 'post',
        data: {
          email,
          password
        }
      })

    },
    login(context, payload) {
      const { email, password } = payload
      
      return axios({
        url: '/login',
        method: 'post',
        data: {
          email,
          password
        }
      })

    }
  },
  modules: {
  }
})
