const express = require('express');

const controllers = require('../controllers');

const router = express.Router();

router.get(
  '/pull-deezer-artist-data',
  controllers.pullDeezerArtistDataController
);

module.exports = { router };
