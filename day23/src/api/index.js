import axios from './axios';
import urls from './urls';
import newUrls from './newUrls';
import authUtils from '../utils/authUtils';

function authenticatedFetch(url, options) {
  let accessToken = authUtils.getToken();
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
    getAll: () => {
      // authenticatedFetch(urls.categories.getAll().url).then(res => res.json())
      return axios.get(newUrls.categories.getAll.url);
    },
    getOne: categoryId =>
      authenticatedFetch(urls.categories.getOne(categoryId).url).then(res =>
        res.json()
      ),
    getPlaylists: categoryId =>
      authenticatedFetch(urls.categories.getPlaylists(categoryId).url).then(
        res => res.json()
      )
  }
};
