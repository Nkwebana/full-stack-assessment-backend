const { searchArtistClient } = require('../../clients');
const { handleResponse } = require('../../utils/helpers');

async function searchArtistService({ searchText }) {
  const { success, data, error } = await searchArtistClient(searchText);

  return handleResponse({ success, data, error });
}

module.exports = { searchArtistService };
