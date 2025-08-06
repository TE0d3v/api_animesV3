const { Messages } = require('../models');
async function createMessage(req, res) {
    try {
        await Messages.create(req.body);
        return res.status(201).send("Mensagem criada com sucesso!");
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createMessage
}