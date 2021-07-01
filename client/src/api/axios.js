import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://backend-idesign-1997.herokuapp.com'
})

export default instance
