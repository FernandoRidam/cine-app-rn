import axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

const api_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjkyMDgzMWE5ODczZGMzZDRkYzU3ZTIzMmVjMTBmNiIsInN1YiI6IjVmNTNmZWNjYjIzNGI5MDAzNTFjMjhjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H3XtsJjGyUio8AUWBFoQKXVBMv-t4Y3xQYnKgvHS3Is';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

api.interceptors.request.use( async ( config ) => {
  const language = await AsyncStorage.getItem('CineApp@Language');

  config.params = { language, ...config.params };
  config.headers.common['Authorization'] = `Bearer ${ api_token }`;

  return config;
}, ( err ) => {
  return Promise.reject( err );
});

export default api;
