import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devsmap-rails.herokuapp.com/api/v1/',
});

export default api;
