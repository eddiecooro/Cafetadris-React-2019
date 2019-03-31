import urls from './urls';
import authUtils from '../utils/authUtils';

function authenticatedFetch(url, options) {
  let accessToken = authUtils.getToken();
  console.log(accessToken);
  return fetch(url, {
    headers: {
      ...((options && options.headers) || {}),
      Authorization: `Bearer ${accessToken}`
    },
    ...options
  });
}

export default {
  categories: {
    getAll: () =>
      authenticatedFetch(urls.categories.getAll().url).then(res =>
        res.json()
      ),
    getOne: categoryId =>
      authenticatedFetch(urls.categories.getOne(categoryId).url).then(
        res => res.json()
      ),
    getPlaylists: categoryId =>
      authenticatedFetch(
        urls.categories.getPlaylists(categoryId).url
      ).then(res => res.json())
  }
};
