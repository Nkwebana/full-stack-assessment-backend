const { fetchArtistTopTracksService } = require('../../services');

const fetchArtistTopTracksController = async (request, response) => {
  const { success, data, error } = await fetchArtistTopTracksService(
    request.query
  );

  if (success) {
    return response.status(200).send({ success: true, data, error: null });
  }

  if (error) {
    return response.status(500).send({ success: false, data: null, error });
  }

  return response
    .status(403)
    .send({ success: false, data: null, error: 'Records not found.' });
};

module.exports = { fetchArtistTopTracksController };
