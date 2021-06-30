import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    background: null,
    latitude: 0,
    longitude: 0,
    result: null,
    tableData: []
  },
  mutations: {
    SET_background (state, payload) {
      state.background = payload
    },
    SET_latitude (state, payload) {
      state.latitude = payload
    },
    SET_longitude (state, payload) {
      state.longitude = payload
    },
    SET_result (state, payload) {
      state.result = payload
    },
    SET_tableData (state, payload) {
      state.tableData = payload
    }
  },
  actions: {
    getBackground (context) {
      return axios({
        url: 'http://localhost:3000/background',
        method: 'get'
      })
        .then(({ data }) => {
          context.commit('SET_background', { img: data.url, title: data.title, explanation: data.explanation })
        })
        .catch(err => {
          console.log(err)
        })
    },

    makeTableData (context) {
      const table = this.state.result.data.map((e, i) => {
        const dataRow = {}
        dataRow.id = i
        dataRow.date = new Date(e.rise.utc_datetime).toLocaleDateString('id')
        dataRow.riseAlt = e.rise.alt
        dataRow.riseAz = e.rise.az
        dataRow.riseTime = new Date(e.rise.utc_datetime).toLocaleTimeString('en-GB')
        if (e.rise.visible) {
          dataRow.riseVisible = 'Yes'
        } else {
          dataRow.riseVisible = 'No'
        }
        dataRow.culminationAlt = e.culmination.alt
        dataRow.culminationAz = e.culmination.az
        dataRow.culminationTime = new Date(e.culmination.utc_datetime).toLocaleTimeString('en-GB')
        if (e.culmination.visible) {
          dataRow.culminationVisible = 'Yes'
        } else {
          dataRow.culminationVisible = 'No'
        }
        dataRow.setAlt = e.set.alt
        dataRow.setAz = e.set.az
        dataRow.setTime = new Date(e.set.utc_datetime).toLocaleTimeString('en-GB')
        if (e.set.visible) {
          dataRow.setVisible = 'Yes'
        } else {
          dataRow.setVisible = 'No'
        }
        return dataRow
      })
      context.commit('SET_tableData', table)
    },

    getResult (context) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          context.commit('SET_latitude', lat)
          context.commit('SET_longitude', lng)
          axios({
            url: 'http://localhost:3000/predictions',
            method: 'get',
            params: {
              latitude: lat,
              longitude: lng
            }
          })
            .then(({ data }) => {
              context.commit('SET_result', data)
              router.push('/result')
            })
        })
      } else {
        /* geolocation IS NOT available  */
        console.log('geolocation IS NOT available on your browser')
      }
    },

    sendEmail (context, payload) {
      console.log('masuk axios')
      axios({
        url: 'http://localhost:3000/email',
        method: 'post',
        data: payload
      })
        .then(() => {
          console.log('email sent!')
          router.push('/result')
            .catch(() => {})
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    filteredType (state) {
      return function (payload) {
        if (payload === 'All') {
          return state.tableData
        } else {
          return state.tableData.filter(e => e.riseVisible.includes(payload) || e.culminationVisible.includes(payload) || e.setVisible.includes(payload))
        }
      }
    }
  },
  modules: {
  }
})
