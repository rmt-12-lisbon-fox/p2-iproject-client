import axios from 'axios'

const axi = axios.create({
  baseURL: '',
  access_token: localStorage.access_token
})

export default axi
