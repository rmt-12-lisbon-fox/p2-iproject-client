import Vue from 'vue'
import Vuex from 'vuex'
import instanceAxios from '../config/axios'
import Swal from "sweetalert2";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    countries: [],
    savedPlaces: [],
    mapUrl: ""
  },
  getters: {
    getCountries(state) {
      return state.countries.filter(country => {
        return isNaN(country.name[country.name.length - 1])
      })
    }
  },
  mutations: {
    LOGIN(state, payload) {
      state.isLoggedIn = true
    },
    LOGOUT(state, payload) {
      state.isLoggedIn = false
    },
    GETSAVEDPLACES(state, payload) {
      state.savedPlaces = payload
    },
    UPDATEMAPURL(state, payload) {

      let q = payload;
      let encodedQ = encodeURIComponent(q)
      let temp = `https://maps.google.com/maps?q=${encodedQ}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
      state.mapUrl = temp
    },
    SEARCHCOUNTRY(state, payload) {
      state.countries = [];
      let index = 0;
      payload.places.forEach((e, i) => {
        if (isNaN(e.name[e.name.length - 1])) {
          e.id = index
          e.description = payload.info[0].description
          e.imgUrl = payload.imgUrl

          state.countries.push(e)
          index++
        }

      });
    },
    UPDATEINFO(state, payload) {
      state.countries.description = payload
    },
  },
  actions: {
    register(context, payload) {
      const { email, password } = payload


      return instanceAxios({
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

      return instanceAxios({
        url: '/login',
        method: 'post',
        data: {
          email,
          password
        }
      })

    },
    searchCity(context, payload) {
      const name = payload
      // console.log(name);
      let searchedCity;
      instanceAxios({
        url: '/citiesdestination',
        method: 'post',
        data: {
          name
        }
      })
        .then(city => {
          searchedCity = city
          return instanceAxios({
            url: '/destinationinfo',
            method: 'post',
            data: {
              "query": city.data.data.getPlaces[0].name
            },
          })

        })
        .then(infoes => {
          let imgUrl;
          for (let i = 0; i < infoes.data.value.length; i++) {
            if (infoes.data.value[i].image.url !== "") {
              imgUrl = infoes.data.value[i].image.url
              break
            }
          }
          let send = {
            info: infoes.data.value,
            places: searchedCity.data.data.getPlaces,
            imgUrl
          }
          context.commit("SEARCHCOUNTRY", send)
        })

        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops... something wrong",
            text: err.response.data.message,
          });
        })

    },
    addBookmark(context, payload) {
      const id = payload
      instanceAxios({
        url: '/bookmark',
        method: 'post',
        data: {
          name: context.state.countries[id].name,
          description: context.state.countries[id].description,
          imgUrl: context.state.countries[id].imgUrl
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {

          Swal.fire({
            position: "top",
            icon: "success",
            title: "Bookmark added",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops... something wrong",
            text: err.response.data.message,
          });
        })

    },
    getSavedPlaces(context, payload) {

      instanceAxios({
        url: '/bookmark',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          context.commit('GETSAVEDPLACES', result.data.data)
        })
        .catch(err => {
          // console.log(err.response);
          Swal.fire({
            icon: "error",
            title: "Oops... something wrong",
            text: err.response.data.message,
          });
        })

    },
    searchCountry(context, payload) {
      let country = payload
      let searchedCountry
      instanceAxios({
        url: '/countriesposition',
        method: 'post',
        data: {
          country
        },
      })
        .then(result => {
          searchedCountry = result
          // console.log(searchedCountry);
          return instanceAxios({
            url: '/destinationinfo',
            method: 'post',
            data: {
              "query": result.data.data.getPlaces[0].name
            },
          })

        })
        .then(infoes => {
          let imgUrl;
          for (let i = 0; i < infoes.data.value.length; i++) {
            if (infoes.data.value[i].image.url !== "") {
              imgUrl = infoes.data.value[i].image.url
              break
            }
          }
          let send = {
            info: infoes.data.value,
            places: searchedCountry.data.data.getPlaces,
            imgUrl
          }
          context.commit("SEARCHCOUNTRY", send)
          // context.commit("UPDATEINFO", infoes.data.value[0].description)

        })
        .catch(err => {
          // console.log(err.response);
          Swal.fire({
            icon: "error",
            title: "Oops... something wrong",
            text: err.response.data.message,
          });
        })
    },

    share(context, payload) {
      const { email, id, name } = payload

      instanceAxios({
        url: '/share',
        method: 'post',
        data: {
          "email": email,
          name
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Email send",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(err => {

          Swal.fire({
            icon: "error",
            title: "Oops... something wrong",
            text: err.response.data.message,
          });
        })
    },
    delete(context, payload) {
      let PlaceId = payload
      instanceAxios({
        url: `/bookmark/${PlaceId}`,
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(result => {
          context.dispatch('getSavedPlaces')
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(err => {

          Swal.fire({
            icon: "error",
            title: "Oops... something wrong",
            text: err.response.data.message,
          });
        })

    }

  },
  modules: {
  }
})
