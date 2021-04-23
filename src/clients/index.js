const { searchArtistClient } = require('./search-artist-client');
const { fetchArtistAlbumClient } = require('./fetch-artist-album-client');
const {
  fetchArtistTopTracksClient,
} = require('./fetch-artist-top-tracks-client');

module.exports = {
  searchArtistClient,
  fetchArtistAlbumClient,
  fetchArtistTopTracksClient,
};
