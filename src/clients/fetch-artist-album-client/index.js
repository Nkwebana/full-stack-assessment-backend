const axios = require('axios').default;
const { executeApiCall } = require('../../utils/helpers');
const { FETCH_ARTIST_ALBUMS_URL } = require('../constants');

async function fetchArtistAlbumClient(artistId) {
  return await executeApiCall(FETCH_ARTIST_ALBUMS_URL + `/${artistId}`);
}

module.exports = { fetchArtistAlbumClient };
