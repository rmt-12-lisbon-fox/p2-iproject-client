import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn : false,
    programs : [],
    program : {},
    username : '',
    UserId : '',
    age : ''
  },
  mutations: {
    SET_IS_LOGGED_IN (state, payload) {
      state.isLoggedIn = payload
    },
    AFTER_LOGIN (state, payload) {
      state.isLoggedIn = true
      state.username = payload.username
      state.UserId = payload.id
      state.age = payload.age
      localStorage.setItem('access_token', payload.access_token)
    },
    AFTER_FETCH_PROGRAMS (state, payload) {
      state.programs = payload
    },
    AFTER_DETAIL_PROGRAM (state, payload) {
      state.program = payload
    }
  },
  actions: {
    login(context, payload) {
      axios({
        url : `http://localhost:3000/login`,
        method : 'post',
        data : { email:payload.email, password:payload.password }
      })
      .then( ({data}) => {
        context.commit('AFTER_LOGIN', data)
        router.push('/')
      })
      .catch( err => {
        console.log(err, `ini error dari login`)
      })
    },
    logout(context) {
      localStorage.clear()
      context.commit('SET_IS_LOGGED_IN', false)
      router.push('/login')
    },
    fetchPrograms(context) {
      axios({
        url : `http://localhost:3000/programs`,
        method : 'get',
        headers : { access_token : localStorage.access_token }
      })
      .then( ({data}) => {
        context.commit('AFTER_FETCH_PROGRAMS', data)
        router.push('/').catch( () => {} )
      })
      .catch( err => {
        console.log(err, `ini error dari fetch programs`)
      })
    },
    detailProgram(context, id) {
      axios({
        url : `http://localhost:3000/programs/${id}`,
        method : 'get',
        headers : { access_token : localStorage.access_token }
      })
      .then( ({data}) => {
        localStorage.id = data.id
        context.commit('AFTER_DETAIL_PROGRAM', data)
        router.push('/detail').catch( () => {} )
      })
      .catch( err => {
        console.log(err, `ini error dari detail programs`)
      })
    }
  },
  modules: {
  }
})
