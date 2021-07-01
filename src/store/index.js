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
    schedule : [],
    scheduleId : [],
    counter : 0,
    reminders : []
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
      localStorage.setItem('username', payload.username)
    },
    AFTER_FETCH_PROGRAMS (state, payload) {
      state.programs = payload
    },
    AFTER_DETAIL_PROGRAM (state, payload) {
      state.program = payload
    },
    AFTER_FETCH_SCHEDULE (state, payload) {
      state.scheduleId = payload
      state.schedule = payload.Programs
    },
    SET_COUNTER(state) {
      state.counter += 1
      router.push('/').catch( () => {})
    },
    AFTER_FETCH_REMINDER(state, payload) {
      state.reminders = payload
    }
  },
  actions: {
    login(context, payload) {
      axios({
        url : `https://go-exercise-servers.herokuapp.com/login`,
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
    fetchPrograms(context, filter) {
      if (filter) {
        axios({
          url : `https://go-exercise-servers.herokuapp.com/programs${filter}`,
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
      } else {
        axios({
          url : `https://go-exercise-servers.herokuapp.com/programs`,
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
      }
    },
    detailProgram(context, id) {
      axios({
        url : `https://go-exercise-servers.herokuapp.com/programs/${id}`,
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
        url : `https://go-exercise-servers.herokuapp.com/mySchedule`,
        method : 'post',
        headers : { access_token : localStorage.access_token },
        data : { ProgramId:payload.ProgramId, intensity:payload.intensity, programTitle: payload.programTitle }
      })
      .then( ({data}) => {
        router.push('/')
        console.log(data, `ini data create schedule`)
      })
      .catch( err=> {
        console.log(err, `ini error create schedule`)
      })
    },
    fetchSchedule(context, check) {
      axios({
        url : `https://go-exercise-servers.herokuapp.com/mySchedule`,
        method : 'get',
        headers : { access_token : localStorage.access_token },
      })
      .then( ({data}) => {
        console.log(data, `ini fetch schedule`)
        context.commit('AFTER_FETCH_SCHEDULE', data)
        if (!check) {
          router.push('/schedule').catch( () => {} )
        }
      })
      .catch( err => {
        console.log(err, `ini error fetch schedule`)
      })
    },
    deleteSchedule(context, id) {
      axios({
        url : `https://go-exercise-servers.herokuapp.com/mySchedule`,
        method : 'delete',
        headers : { access_token : localStorage.access_token },
        data : { id }
      })
      .then( ({data}) => {
          context.dispatch('fetchSchedule')
      })
      .catch( err => console.log(err, `ini error dari delete schedule`))
    },
    fetchReminder(context) {
      axios({
        url : `https://go-exercise-servers.herokuapp.com/reminders`,
        method : 'get',
        headers : { access_token : localStorage.access_token },
      })
      .then( ({data}) => {
        console.log(data, `ini data fetch reminders <<<<<<<`)
        context.commit('AFTER_FETCH_REMINDER', data)
      })
      .catch(err => {
        console.log(err, `ini eror fetch reminders`)
      })
    }
  },
  modules: {
  }
})
