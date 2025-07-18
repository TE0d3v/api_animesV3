const express = require('express');
const router = express.Router();
const animesController = require('../controllers/animes');
const middlewareToken = require('../middlewares/authToken');

router.post(
    '/animes', 
    middlewareToken.authToken,
    animesController.createAnime
);

router.get(
    '/animes',
    middlewareToken.authToken,
    animesController.getAnimes
)

module.exports = router;