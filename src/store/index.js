import Vue from 'vue'
import Vuex from 'vuex'
import backEndAPI from '../api/backEnd';
import tosAPI from '../api/textToSpeech';
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isEdit: false,
    isReview: false,
    isMine: false,
    user: {},
    films: {},
    reviews: [],
    review: {},
    audio: '',
    titleFilm: 'default'
  },
  mutations: {
    LOGIN (state) {
      state.isLogin = true;
    },
    LOGOUT (state) {
      state.isLogin = false;
    },
    EDIT_PROFILE (state) {
      state.isEdit = true;
    },
    NOT_EDIT_PROFILE (state) {
      state.isEdit = false
    },
    USER_INFO (state, data) {
      state.user = data;
    },
    FILMS (state, data) {
      state.films = data;
    },
    REVIEW (state) {
      state.isReview = true;
      router.push({ path: '/review' })
    },
    NO_REVIEW (state) {
      state.isReview = false;
    },
    TITLE_FILM (state, title) {
      state.titleFilm = title;
    },
    LIST_OF_REVIEW (state, data) {
      state.reviews = data;
    },
    IS_MINE (state) {
      state.isMine = true;
    },
    NOT_IS_MINE (state) {
      state.isMine = false;
    },
    ONE_REVIEW (state, data) {
      state.review = data;
    },
    AUDIO (state, data) {
      state.audio = data;
    }
  },
  actions: {
    async register(context, data) {
      const formData = new FormData();

      let imageUrl = data.imageUrl;
      formData.append("imageUrl", imageUrl);

      let email = data.email;
      formData.append("email", email);

      let password = data.password;
      formData.append("password", password);

      let name = data.name
      formData.append("name", name);

      let phoneNumber = data.phoneNumber;
      formData.append("phoneNumber", phoneNumber);

      let address = data.address;
      formData.append("address", address);

      try {
        let result = await backEndAPI({
          url: '/register',
          method: "POST",
          headers: {
            'Content-Type' : 'multipart/form-data'
          },
          data: formData
        })
        Vue.swal({
          icon: 'success',
          title: 'Register is successfull'
        });
        router.push({ path: '/login' });
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'Register was failed',
            text: stringError 
         });
      }
    },
    async login({ commit }, data) {
      try {
        let result = await backEndAPI({
          url: '/login',
          method: 'POST',
          data: {
            ...data
          }
        });
        localStorage.setItem('access_token', result.data.access_token);
        Vue.swal({
          icon: 'success',
          title: 'Login is successfull'
        });
        commit('LOGIN');
        router.push({ path: '/' });
      } catch (err){
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'Login was failed',
            text: stringError 
         });
      }
    },
    async getProfile({ commit }) {
      try {
        let result = await backEndAPI({
          url:'/users',
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        });
        commit('USER_INFO', result.data);
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'getUser was failed',
            text: stringError 
         });
      }
    },
    async updateProfile(context, data) {
      const formData = new FormData();

      let imageUrl = data.imageUrl;
      formData.append("imageUrl", imageUrl);

      let email = data.email;
      formData.append("email", email);

      let name = data.name
      formData.append("name", name);

      let phoneNumber = data.phoneNumber;
      formData.append("phoneNumber", phoneNumber);

      let address = data.address;
      formData.append("address", address);

      try {
        let result = await backEndAPI({
          url: '/users',
          method: 'PUT',
          headers: {
            access_token: localStorage.access_token,
            'Content-Type' : 'multipart/form-data'
          },
          data: formData
        })
        Vue.swal({
          icon: 'success',
          title: 'Update profile is successfull'
        });
        router.push({ path: '/profile' });
        commit('NOT_EDIT_PROFILE');
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'Register was failed',
            text: stringError 
         });
      }
    },
    async getFilms({ commit }, page) {
      try {
        let result = await backEndAPI({
          url: '/films',
          method: 'GET',
          params: {
            page
          },
          headers: {
            access_token: localStorage.access_token
          }
        })
        commit('FILMS', result.data);
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'getFilms was failed',
            text: stringError 
         });
      }
    },
    async createReview(context, data) {
      try {
        let result = await backEndAPI({
          url: '/reviews',
          method: 'POST',
          headers: {
            access_token: localStorage.access_token
          },
          data: { ...data }
        })
        Vue.swal({
          icon: 'success',
          title: 'Review is successfull'
        });
        router.push({ path: '/' });
        commit('NO_REVIEW');
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'Review was failed',
            text: stringError 
         });
      }
    },
    async listOfReview({  commit }) {
      try {
        let result = await backEndAPI({
          url: '/reviews',
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        });
        commit('LIST_OF_REVIEW', result.data.rows);
        commit('NOT_IS_MINE');
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'getListOfReview was failed',
            text: stringError 
         });
      }
    },
    async listOfReviewByUser({ commit }) {
      try {
        let result = await backEndAPI({
          url: '/reviews/findByUserId',
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        });
        commit('IS_MINE');
        commit('LIST_OF_REVIEW', result.data);
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'getListOfReviewByUser was failed',
            text: stringError 
         });
      }
    },
    async getReview({ commit }, id) {
      try {
        let result = await backEndAPI({
          url: `/reviews/${id}`,
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })
        commit('ONE_REVIEW', result.data);
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'getListOfReviewByUser was failed',
            text: stringError 
         });
      }
    },
    async updateReview(context, payload) {
      try {
        let result = await backEndAPI({
          url: `/reviews/${payload.id}`,
          method: 'PUT',
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            title: payload.title,
            comment: payload.comment
          }
        });
        Vue.swal({
          icon: 'success',
          title: 'Update review is successfull'
        });
        router.push({ path: '/myComment' });
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'getListOfReviewByUser was failed',
            text: stringError 
         });
      }
    },
    async deleteReview({ dispatch }, id) {
      try {
        let result = await backEndAPI({
          url: `/reviews/${id}`,
          method: 'DELETE',
          headers: {
            access_token: localStorage.access_token
          }
        });
        await dispatch('listOfReviewByUser')
        Vue.swal({
          icon: 'success',
          title: 'Update review is successfull'
        });
      } catch (err) {
        let stringError = err.response.data.message;
        Vue.swal({
            icon: 'error',
            title: 'getListOfReviewByUser was failed',
            text: stringError 
         });
      }
    },
    async tos(context, data) {
      let apiKey = process.env.VUE_APP_API_KEY;
      try {
        let result = await tosAPI({
          method: 'GET',
          params: {
            key: apiKey,
            hl: 'id-id',
            src: data,
            f: '8khz_8bit_mono',
            c: 'mp3',
            r: '0',
            b64: true
          },
          headers: {
            'x-rapidapi-key': 'a4e0a04627msh51476a18f2f769ap124b24jsn474823c609db',
            'x-rapidapi-host': 'voicerss-text-to-speech.p.rapidapi.com'
          }
        })
        this.commit('AUDIO', result.data);
      } catch (err) {
        console.log(err.response)
      }
    }
  },
  modules: {
  }
})
