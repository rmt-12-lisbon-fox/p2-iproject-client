import axios from 'axios'

const backEndAPI = axios.create({
    baseURL: 'https://nreview.herokuapp.com/'
});

export default backEndAPI