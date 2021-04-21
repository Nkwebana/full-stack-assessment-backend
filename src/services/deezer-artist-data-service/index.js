const { database } = require('../../utils/helpers');

async function pullDeezerArtistDataService(requestPayload) {
  return {
    success: true,
    data: null,
    error: null,
  };
}

module.exports = { pullDeezerArtistDataService };
