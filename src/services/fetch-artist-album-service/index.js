const { fetchArtistAlbumClient } = require('../../clients');
const { handleResponse } = require('../../utils/helpers');

async function fetchArtistAlbumService({ searchText }) {
  const { success, data, error } = await fetchArtistAlbumClient(searchText);

  return handleResponse({ success, data, error });
}

module.exports = { fetchArtistAlbumService };
