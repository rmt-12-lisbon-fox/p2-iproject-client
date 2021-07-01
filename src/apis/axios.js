import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://aniplay-server.herokuapp.com'
});

export default instance