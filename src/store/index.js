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
    SEARCH_ANIME (state, payload) {
      state.animeSearch = payload
    }
  },
  actions: {
    // Upcoming Anime
    upcomingAnime(context, payload) {
      axios({
        url: '/anime/upcoming',
        method: 'get'
      })
      .then(({data}) => {
        let upcoming = data.anime.filter((el, i) => i <= 11)
        console.log(upcoming);
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Search Anime
    searchAnime(context, payload) {
      // payload with q parameter
      axios({
        url: '/anime/search',
        method: 'post',
        data: payload
      })
      .then(({data}) => {
        let results = data.results
        // let results = data.results.filter((el, i) => i <= 11)
        context.commit('SEARCH_ANIME', results)

        router.push('/search').catch(() => {})
      })
      .catch(err => {
        console.log(err.response);
        swal.fire("error", '', 'error')
      })
    },

    // Anime information
    infoAnime(context, payload) {
      let {mal_id} = payload
      axios({
        url: `/anime/info/${mal_id}`,
        method: 'get'
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
        url: `/anime/videos`,
        method: 'get',
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
        url: `/anime/videos`,
        method: 'get',
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
