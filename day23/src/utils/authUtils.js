import { setAuthToken, removeAuthToken } from 'api/axios';

const accessTokenKey = 'access-token';
const authUtils = {
  isUserLoggedIn: () => !!localStorage.getItem(accessTokenKey),
  getToken: () => localStorage.getItem(accessTokenKey),
  login: token => {
    setAuthToken(token);
    return localStorage.setItem(accessTokenKey, token);
  },
  logout: () => {
    removeAuthToken();
    return localStorage.removeItem(accessTokenKey);
  }
};

setAuthToken(authUtils.getToken());

export default authUtils;
