import axios from 'axios'

const tosAPI = axios.create({
    baseURL: 'https://voicerss-text-to-speech.p.rapidapi.com'
});

export default tosAPI