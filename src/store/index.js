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
    animeEpisodes: []
  },
  mutations: {
    UPCOMING_ANIME (state, payload) {
      state.upcoming = payload
    },
    SEARCH_ANIME (state, payload) {
      state.animeSearch = payload
    },
    SEARCH_ANIME_ONE (state, payload) {
      state.animeOne = payload
    },
    SEARCH_ANIME_EPISODES (state, payload) {
      state.animeEpisodes = payload
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
        context.commit('UPCOMING_ANIME', upcoming)
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Search Anime
    searchAnime(context, payload) {
      // payload with q parameter
      // console.log(payload);
      let {q} = payload
      axios({
        url: `/anime/search?q=${q}`,
        method: 'get',
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
      let title = ""

      axios({
        url: `/anime/info/${mal_id}`,
        method: 'get'
      })
      .then(({data}) => {
        // console.log(data);
        title = data.title
        return context.commit('SEARCH_ANIME_ONE', data)

      })
      .then(_ => {
        // console.log(title);
        context.dispatch('searchAnimeVideos', title)
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Search Anime Videos
    searchAnimeVideos(context, payload) {
      let keyword = payload
      axios({
        url: `/anime/videos?keyword=${keyword}`,
        method: 'get'
      })
      .then(({data}) => {
        let vid_id = data.video.vid_id
        // console.log(vid_id, '=====')
        context.dispatch('getAnimeEpisodes', vid_id)
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Get Episodes
    getAnimeEpisodes(context, payload) {
      // let {keyword} = payload
      axios({
        url: `/anime/detail?vid_id=${payload}`,
        method: 'get',
      })
      .then(({data}) => {
        let payload = data.episode
        context.commit('SEARCH_ANIME_EPISODES', payload)
      })
      .catch(err => {
        swal.fire("error", '', 'error')
      })
    },

    // Get Link Stream & Download
    getAnimeLink(context, payload) {
      // let {keyword} = payload
      return axios({
        url: `/anime/detail?vid_id=${payload}`,
        method: 'get',
      })
      .then(({data}) => {
        let payload = data.data
        return payload
      })
      .catch(err => {
        throw err
      })
    }
  },
  modules: {
  }
})
