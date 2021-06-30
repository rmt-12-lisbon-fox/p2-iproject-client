import axios from 'axios'

const backEndAPI = axios.create({
    baseURL: 'http://localhost:3000'
});

export default backEndAPI