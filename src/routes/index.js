const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/search-artist', controllers.searchArtistController);
router.get('/fetch-artist-album', controllers.fetchArtistAlbumController);
router.get(
  '/fetch-artist-top_tracks',
  controllers.fetchArtistTopTracksController
);

module.exports = { router };
