import axios from 'axios'

const axi = axios.create({
  baseURL: 'http://localhost:3000',
  access_token: localStorage.access_token
})

export default axi
