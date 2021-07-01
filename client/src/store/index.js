import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    designs: null,
    oneDesign: null,
    isLoggedIn: false,
    isCustomer: true,
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
      swal({
        title: `Welcome back ${data.username}`,
        icon: 'success',
        button: 'Ok'
      })
      state.isLoggedIn = true
      if (data.role !== 'Customer') {
        state.isCustomer = false
      }
    },
    LOGOUT (state) {
      localStorage.clear()
      state.isLoggedIn = false
      state.isCustomer = true
      swal({
        title: 'Logout success',
        icon: 'success',
        button: 'Ok'
      })
      router.push({ name: 'Home' }).catch(() => {})
    },
    ISLOGGEDIN (state) {
      state.isLoggedIn = true
    },
    NOTCUSTOMER (state) {
      state.isCustomer = false
    },
    ISBOOKMARKPAGE (state) {
      state.isBookmarkPage = true
    },
    NOTBOOKMARKPAGE (state) {
      state.isBookmarkPage = false
    },
    CLEARALL (state) {
      state.oneDesign = null
      state.myDesigns = null
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
          swal(err.response.data.message)
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
          swal(err.response.data.message)
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
          swal(err.response.data.message)
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
          if (Array.isArray(err.response.data.message)) {
            let errMsgs = ''
            err.response.data.message.forEach((element) => {
              errMsgs += element + '\n'
            })
            swal(errMsgs)
          } else {
            swal(err.response.data.message)
          }
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
          if (Array.isArray(err.response.data.message)) {
            let errMsgs = ''
            err.response.data.message.forEach((element) => {
              errMsgs += element + '\n'
            })
            swal(errMsgs)
          } else {
            swal(err.response.data.message)
          }
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
          swal(err.response.data.message)
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
          swal({
            title: 'Added to your bookmark',
            icon: 'success',
            button: 'Ok'
          })
        })
        .catch((err) => {
          swal(err.response.data.message)
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
          swal(err.response.data.message)
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
          swal(err.response.data.message)
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
        .then(() => {
          context.dispatch('getAllDesigns')
          router.push({ name: 'MyDesign' }).catch(() => {})
          swal({
            title: 'Design Added',
            icon: 'success',
            button: 'Ok'
          })
        })
        .catch((err) => {
          if (Array.isArray(err.response.data.message)) {
            let errMsgs = ''
            err.response.data.message.forEach((element) => {
              errMsgs += element + '\n'
            })
            swal(errMsgs)
          } else {
            swal(err.response.data.message)
          }
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
          swal(result.data.message)
        })
        .catch((err) => {
          swal(err.response.data.message)
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
          swal({
            title: 'Delete Success',
            icon: 'success',
            button: 'Ok'
          })
        })
        .catch((err) => {
          swal(err.response.data.message)
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
          swal({
            title: 'Delete Success',
            icon: 'success',
            button: 'Ok'
          })
        })
        .catch((err) => {
          swal(err.response.data.message)
        })
    },
    sendEmail (context, input) {
      axios({
        url: '/sendEmail',
        method: 'post',
        data: input,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((result) => {
          swal(result.data.message)
        })
        .catch((err) => {
          swal(err.response.data.message)
        })
    },
    sendMessage (context, input) {
      axios({
        url: '/sendSms',
        method: 'post',
        data: input,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((result) => {
          swal(result.data.message)
        })
        .catch((err) => {
          swal(err.response.data.message)
        })
    }
  },
  modules: {
  }
})
