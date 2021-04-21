const { pullDeezerArtistDataService } = require('../../services');

const pullDeezerArtistDataController = async (request, response) => {
  const { success, data, error } = await pullDeezerArtistDataService(
    request.body
  );

  if (success && typeof data === 'object') {
    return response.status(200).send({ success: true, data, error: null });
  }

  if (success && data && !error) {
    return response
      .status(200)
      .send({ success: false, data: null, error: 'Records not found.' });
  }

  if (!success && error) {
    return response.status(500).send({ success: false, data: null, error });
  }
};

module.exports = { pullDeezerArtistDataController };
