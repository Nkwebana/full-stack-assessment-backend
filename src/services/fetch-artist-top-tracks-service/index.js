const { fetchArtistTopTracksClient } = require('../../clients');
const { handleResponse } = require('../../utils/helpers');

async function fetchArtistTopTracksService({ artistId }) {
  const { success, data, error } = await fetchArtistTopTracksClient(artistId);

  return handleResponse({ success, data, error });
}

module.exports = { fetchArtistTopTracksService };
