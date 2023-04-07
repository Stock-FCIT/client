import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  try {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  } catch (e) {
    return 0;
  }
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
