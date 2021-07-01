import axios from 'axios'

const instanceAxios = axios.create({
  baseURL: 'https://hangout-gamers.herokuapp.com/'
})

export default instanceAxios
