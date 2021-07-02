import axios from 'axios'

const axi = axios.create({
  // baseURL: 'https://kodok-sarjana.herokuapp.com/',
  baseURL: 'http://localhost:3000/',
  headers: {access_token: localStorage.access_token}
})

export default axi
