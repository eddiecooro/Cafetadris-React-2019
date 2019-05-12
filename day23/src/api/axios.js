import axios from 'axios';
import loggerInterceptor from './loggerInterceptor';
import timerInterceptor from './timerInterceptor';
import authInterceptor from './authInterceptor';

const axiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/'
});
export default axiosInstance;

// loggerInterceptor(axiosInstance);
// timerInterceptor(axiosInstance);
authInterceptor(axiosInstance);

export const setAuthToken = token => {
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};
export const removeAuthToken = () => {
  delete axiosInstance.defaults.headers.Authorization;
};
