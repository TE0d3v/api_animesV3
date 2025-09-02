const { Animes } = require('../models');
// const redis = require('../config/redis');

async function createAnime(req, res) {
        /*
            #swagger.tags = ['Animes']
            #swagger.summary = 'Create a new Anime'
            #swagger.description = 'Este end point é para criar um novo anime...'
        */
       /*  #swagger.requestBody = {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/someBody"
                        }  
                    }
                }
            } 
        */
    const anime = req.body;

    if (req.user.role !== 'admin') {
        return res.status(403).send({
            error: 'Não autorizado'
        })
    }

    try {
        const animeCreated = await Animes.create(anime);
        res.status(201).send(animeCreated);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

async function getAnimes(req, res) {
    /*
            #swagger.tags = ['Animes']
            #swagger.summary = 'Get Anime'
            #swagger.description = 'Este end point exibirá os animes...'
        */
    try {
        // Verifica se os dados estão no cache do Redis
        // const cachedAnimes = await redis.get('animes')

        // if (cachedAnimes){
        //     return res.send(JSON.parse(cachedAnimes))
        // }

        const animes = await Animes.findAll();

        // Armazena os dados no cache do Redis
        // await redis.set('animes', JSON.stringify(animes), {EX: 60}) // Armazena no cache por 60 segundos

        return res.send(animes)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    createAnime,
    getAnimes
}