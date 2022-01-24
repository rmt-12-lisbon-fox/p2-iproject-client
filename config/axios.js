const axios = require('axios')

const Axios = axios.create({ baseURL: 'https://healing-app.herokuapp.com' })

export default Axios
