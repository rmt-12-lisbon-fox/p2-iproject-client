import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vuetify-wind-123.herokuapp.com',
  headers: {
    access_token: localStorage.access_token,
    requestor: 'customer-client'
  }
})

export default instance
