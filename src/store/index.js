import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from '../apis/axios'
import swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    upcoming: [],
    animeOne: {},
    animeSearch: [],
    animeVideos: []
  },
  mutations: {

  },
  actions: {
    // Upcoming Anime
    upcomingAnime(context, payload) {
      axios({
        url: '/upcoming'
      })
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Search Anime
    searchAnime(context, payload) {
      // payload with q parameter
      axios({
        url: '/search',
        data: payload
      })
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Anime information
    infoAnime(context, payload) {
      let {mal_id} = payload
      axios({
        url: `/info/${mal_id}`
      })
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Search Anime Videos
    searchAnimeVideos(context, payload) {
      // let {keyword} = payload
      axios({
        url: `/videos`,
        data: payload
      })
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Detail Anime Videos (episodes)
    detailAnimeVideos(context, payload) {
      // let {keyword} = payload
      axios({
        url: `/videos`,
        data: payload
      })
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    }
  },
  modules: {
  }
})
