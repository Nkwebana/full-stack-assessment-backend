const { executeApiCall } = require('../../utils/helpers');
const { FETCH_ARTISTS_TOP_TRACKS } = require('../constants');

async function fetchArtistTopTracksClient(artistId) {
  return await executeApiCall(FETCH_ARTISTS_TOP_TRACKS + `/${artistId}/top`);
}

module.exports = { fetchArtistTopTracksClient };
