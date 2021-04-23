const { searchArtistService } = require('./search-artist-service');
const { fetchArtistAlbumService } = require('./fetch-artist-album-service');
const {
  fetchArtistTopTracksService,
} = require('./fetch-artist-top-tracks-service');

module.exports = {
  searchArtistService,
  fetchArtistAlbumService,
  fetchArtistTopTracksService,
};
