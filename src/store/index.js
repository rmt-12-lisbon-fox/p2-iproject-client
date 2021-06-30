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
    age : '',
    schedule : []
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
    },
    AFTER_FETCH_SCHEDULE (state, payload) {
      state.schedule = payload
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
    },
    createSchedule(context, payload) {
      axios({
        url : `http://localhost:3000/mySchedule/`,
        method : 'post',
        headers : { access_token : localStorage.access_token },
        data : { ProgramId:payload.ProgramId, intensity:payload.intensity }
      })
      .then( ({data}) => {
        router.push('/')
        console.log(data, `ini data create schedule`)
      })
      .catch( err=> {
        console.log(err, `ini error create schedule`)
      })
    },
    fetchSchedule(context) {
      axios({
        url : `https://go-exercise-server.herokuapp.com/mySchedule/`,
        method : 'get',
        headers : { access_token : localStorage.access_token },
      })
      .then( ({data}) => {
        console.log(data, `ini fetch schedule`)
        context.commit('AFTER_FETCH_SCHEDULE', data)
        router.push('/schedule').catch( () => {} )
      })
      .catch( err => {
        console.log(err, `ini error fetch schedule`)
      })
    }
  },
  modules: {
  }
})
