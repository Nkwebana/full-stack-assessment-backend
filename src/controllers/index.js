const { searchArtistController } = require('./search-artist-controller');
const {
  fetchArtistAlbumController,
} = require('./fetch-artist-album-controller');
const {
  fetchArtistTopTracksController,
} = require('./fetch-artist-top-tracks-controller');

module.exports = {
  searchArtistController,
  fetchArtistAlbumController,
  fetchArtistTopTracksController,
};
