const axios = require('axios')

const Axios = axios.create({ baseURL: 'http://localhost:3000' })

export default Axios
