export const baseUrl = 'https://api.spotify.com';
export const baseUrlV1 = `${baseUrl}/v1`;

export default {
  categories: (() => {
    let categoriesUrl = `${baseUrlV1}/browse/categories`;
    return {
      getAll: () => ({
        url: `${categoriesUrl}/`,
        method: 'GET'
      }),
      getOne: id => ({
        url: `${categoriesUrl}/${id}`,
        method: 'GET'
      }),
      getPlaylists: id => ({
        url: `${categoriesUrl}/${id}/playlists`,
        method: 'GET'
      })
    };
  })()
};
