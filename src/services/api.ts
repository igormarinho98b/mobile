import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.80.175.25:8080/api',
});

export default api;
