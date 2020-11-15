import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const textToSpeechAxios = axios.create({
  baseURL: process.env.WATSON_SERVICEURL,
  headers: {
    'accept': 'audio/mp3'
  },
  auth: {
    username: 'apiKey',
    password: process.env.WATSON_APIKEY
  },
  responseType: 'arraybuffer'
});


export { textToSpeechAxios };