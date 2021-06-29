const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
  // baseURL: 'https://portal-career.herokuapp.com/'
})

export default instance
