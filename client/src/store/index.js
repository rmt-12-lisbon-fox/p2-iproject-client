import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    designs: null,
    oneDesign: null,
    isLoggedIn: false,
    isCustomer: false,
    myDesigns: null,
    bookmarks: null,
    categories: null,
    isBookmarkPage: false,
    query: ''
  },
  mutations: {
    GETALLDESIGNS (state, data) {
      state.designs = data
    },
    GETONEDESIGN (state, data) {
      state.oneDesign = data
    },
    MYDESIGN (state, data) {
      state.myDesigns = data
    },
    GETALLBOOKMARK (state, data) {
      state.bookmarks = data
    },
    CATEGORIES (state, data) {
      state.categories = data
    },
    QUERY (state, url) {
      state.query = url
    },
    LOGIN (state, data) {
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('role', data.role)
      localStorage.setItem('username', data.username)
      state.isLoggedIn = true
      if (data.role === 'Customer') {
        state.isCustomer = true
      }
    },
    LOGOUT (state) {
      localStorage.clear()
      state.isLoggedIn = false
      state.isCustomer = false
      router.push({ name: 'Home' }).catch(() => {})
    },
    ISLOGGEDIN (state) {
      state.isLoggedIn = true
    },
    ISCUSTOMER (state) {
      state.isCustomer = true
    },
    ISBOOKMARKPAGE (state) {
      state.isBookmarkPage = true
    },
    NOTBOOKMARKPAGE (state) {
      state.isBookmarkPage = false
    }
  },
  actions: {
    getAllDesigns (context) {
      const query = context.state.query

      axios({
        url: `/?${query}`,
        method: 'get'
      })
        .then((result) => {
          context.commit('GETALLDESIGNS', result.data.rows)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    getOneDesign (context, id) {
      axios({
        url: `/${id}`,
        method: 'get'
      })
        .then((result) => {
          context.commit('GETONEDESIGN', result.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    login (context, input) {
      const email = input.email
      const password = input.password

      axios({
        url: '/user/login',
        method: 'post',
        data: { email, password }
      })
        .then((result) => {
          context.commit('LOGIN', result.data)
          router.push({ name: 'Home' }).catch(() => {})
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    registerCust (context, input) {
      axios({
        url: '/user/register/customer',
        method: 'post',
        data: input
      })
        .then(() => {
          router.push({ name: 'Login' })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    registerDesigner (context, input) {
      axios({
        url: '/user/register/designer',
        method: 'post',
        data: input
      })
        .then(() => {
          router.push({ name: 'Login' })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    myDesign (context) {
      axios({
        url: '/designer/myDesign',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((result) => {
          router.push({ name: 'MyDesign' }).catch(() => {})
          context.commit('MYDESIGN', result.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    addBookmark (context, id) {
      const DesignId = id

      axios({
        url: '/bookmark',
        method: 'post',
        data: { DesignId },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          console.log('berhasil')
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    getAllBookmark (context) {
      axios({
        url: '/bookmark',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((result) => {
          context.commit('GETALLBOOKMARK', result.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    getAllCategories (context) {
      axios({
        url: '/categories',
        method: 'get'
      })
        .then((result) => {
          context.commit('CATEGORIES', result.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    addDesign (context, input) {
      const name = input.name
      const description = input.description
      const DesignImage = []
      const CategoriesId = input.CategoriesId
      DesignImage.push(input.files[0], input.files[1], input.files[2])

      const data = new FormData()
      data.append('name', name)
      data.append('description', description)
      data.append('DesignImage', DesignImage[0])
      data.append('DesignImage', DesignImage[1])
      data.append('DesignImage', DesignImage[2])
      data.append('CategoriesId', CategoriesId)

      axios({
        url: '/',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: data,
        contentType: false,
        processData: false
      })
        .then((result) => {
          context.dispatch('getAllDesigns')
          router.push({ name: 'MyDesign' }).catch(() => {})
          console.log(result.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    editDesign (context, input) {
      const name = input.name
      const description = input.description
      const DesignImage = []
      const image1 = input.image1
      const image2 = input.image2
      const image3 = input.image3
      const CategoriesId = input.CategoriesId
      DesignImage.push(input.files[0], input.files[1], input.files[2])

      const data = new FormData()
      data.append('name', name)
      data.append('description', description)
      data.append('image1', image1)
      data.append('image2', image2)
      data.append('image3', image3)
      data.append('DesignImage', DesignImage[0])
      data.append('DesignImage', DesignImage[1])
      data.append('DesignImage', DesignImage[2])
      data.append('CategoriesId', CategoriesId)

      axios({
        url: `/${input.id}`,
        method: 'put',
        headers: {
          access_token: localStorage.access_token
        },
        data: data,
        contentType: false,
        processData: false
      })
        .then((result) => {
          context.dispatch('getAllDesigns')
          router.push({ name: 'MyDesign' }).catch(() => {})
          console.log(result.data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    deleteDesign (context, id) {
      axios({
        url: `/${id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          context.dispatch('myDesign')
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    deleteBookmark (context, id) {
      axios({
        url: `/bookmark/${id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          context.dispatch('getAllBookmark')
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
