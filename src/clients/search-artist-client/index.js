const { executeApiCall } = require('../../utils/helpers');
const { SEARCH_ARTISTS_URL } = require('../constants');

async function searchArtistClient(searchText) {
  return await executeApiCall(SEARCH_ARTISTS_URL + `?q=${searchText}`);
}

module.exports = { searchArtistClient };
