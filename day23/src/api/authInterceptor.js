import { redirect } from '../utils/navigation';
import authUtils from 'utils/authUtils';

export default axiosInstance => {
  axiosInstance.interceptors.response.use(undefined, function(error) {
    if (error.response.status === 401) {
      authUtils.logout();
      redirect('/login');
    }
    return Promise.reject(error);
  });
};
