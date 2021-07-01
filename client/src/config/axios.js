const axios = require('axios');


const instance = axios.create({
    baseURL: 'https://iproject-safe-travel.herokuapp.com/',
});


export default instance