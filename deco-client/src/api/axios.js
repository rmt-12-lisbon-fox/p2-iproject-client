const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://deco-express-2.herokuapp.com'
})

export default instance
