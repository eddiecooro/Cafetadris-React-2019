export default axiosInstance => {
  axiosInstance.interceptors.request.use(
    function(config) {
      console.group(config.url);
      console.log(config);
      return config;
    },
    function(error) {
      console.group(error.url);
      console.error(error);
      console.groupEnd(error.url);
      return Promise.reject(error);
      // return new Promise((resolve, reject) => {
      //   reject(error)
      // })
    }
  );
  axiosInstance.interceptors.response.use(
    function(response) {
      console.log(response);
      console.groupEnd(response.config.url);
      return response;
    },
    function(error) {
      console.log(error);
      return Promise.reject(error);
    }
  );
};
