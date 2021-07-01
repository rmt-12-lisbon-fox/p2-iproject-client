import Vue from 'vue'
import Vuex from 'vuex'
import instance from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    searchResult: [],
    email: '',
    dietLog: [],
    totalPages: 0,
    currentPage: 0,
    chartURL : '',
    recipes: []
  },
  mutations: {
    TOLOGOUT (state) {
      localStorage.clear()
      state.email = ''
      router.push({ name: 'Login' })
    },
    TOLOGIN (state, payload) {
      payload['access token'] = payload['access token'] || payload.access_token
      localStorage.setItem('access_token', payload['access token'])
      localStorage.setItem('email', payload['DB-Data'].email)
      localStorage.setItem('name', payload.bigData.given_name)

      if (payload.bigData) {
        localStorage.setItem('picture', payload.bigData.picture)
      } else {
        localStorage.setItem('picture', 'https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg')
      }

      state.email = payload['DB-Data'].email
      setTimeout(() => {
        router.push({ name: 'Home' })
      }, 3000)
    },
    FETCH_DIET (state, payload) {
      state.dietLog = payload
    },
    SEARCH (state, payload) {
      state.searchResult = payload
    },
    GETCHART(state, payload) {
      state.chartURL = payload
    },
    GETRECIPE(state, payload) {
      state.recipes = payload
    }
  },
  actions: {
    getChart({commit}) {
      instance.get('/chart')
      .then( ({data}) => {
        console.log(data)
        commit('GETCHART', data.chartURL)
      })
      .catch( err => {
        console.log(err)
      })
    },
    fetchDiet({commit}, payload) {

      console.log(localStorage.access_token)
      instance.get('/diet')
      .then( ({data}) => {
        console.log(data)
        commit("FETCH_DIET", data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    addDiet(context, payload) {
      let url = '/record?fdcId=' + payload
      instance.get(url)
      
    },
    getRecipe({commit}) {
      instance.get('http://localhost:3000/recipe')
      .then( ({data}) => {
        console.log(data)
        commit("GETRECIPE", data)
      })
      .catch( err => {
        console.log(err)
      })
    },
    gauth (context, token) {
      instance.post('/gauth', {
        id_token: token
      })
        .then(({ data }) => {
          context.commit('TOLOGIN', data)
          console.log(data)
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
        })
    },
    search (context, payload) {
      let url = '/api?'
      if (payload.name) url = url + 'food=' + payload.name
      instance.get(url)
        .then(({ data }) => {
          console.log(data.foods)
          context.commit('SEARCH', data.foods)
        })
    },
    register (context, payload) {
      instance.post('/cust/register', payload)
        .then(data => {
          console.log(data)
          Swal.fire({
            icon: 'success',
            title: 'OK',
            text: 'Account created'
          })
        })
        .catch(error => {
          if (error.response) {
            Swal.fire({
              icon: 'error',
              title: error.response.status.toString(),
              text: error.response.data.message
            })
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
        })
    },
    toLogin (context, payload) {
      instance.post('/cust/login', payload)
        .then(({ data }) => {
          context.commit('TOLOGIN', data)
        })
        .catch(error => {
          if (error.response) {
            Swal.fire({
              icon: 'error',
              title: error.response.status.toString(),
              text: error.response.data.message
            })
            context.$router.push({ name: 'Home' })
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
        })
    },
  },
  modules: {
  }
})
