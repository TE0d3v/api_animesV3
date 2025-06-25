const { Animes } = require('../models');

async function createAnime(req, res) {
    const anime = req.body;

    try {
        const animeCreated = await Animes.create(anime);
        res.status(201).send(animeCreated);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

async function getAnimes(req, res) {
    try {
        const animes = await Animes.findAll();
        // res.send(animes); já é status 200 por padrão
        res.send(animes)
    }catch (error){
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    createAnime,
    getAnimes
}