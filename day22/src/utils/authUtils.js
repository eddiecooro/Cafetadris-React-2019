const accessTokenKey = 'access-token';
export default {
  isUserLoggedIn: () => !!localStorage.getItem(accessTokenKey),
  getToken: () => localStorage.getItem(accessTokenKey),
  login: token => localStorage.setItem(accessTokenKey, token),
  logout: () => localStorage.removeItem(accessTokenKey)
};
