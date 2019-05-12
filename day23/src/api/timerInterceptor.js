export default axiosInstance => {
  axiosInstance.interceptors.request.use(function(config) {
    console.time(config.baseURL + config.url);
    return config;
  });
  axiosInstance.interceptors.response.use(function(response) {
    console.timeEnd(response.config.url);
    return response;
  });
};
