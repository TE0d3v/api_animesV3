const { Users } = require('../models');
const bcrypt = require('bcrypt');

// criptografia simples
async function createUser(req, res) {
    try {
        await Users.create(req.body);
        // Cria o usuário com os dados recebidos no corpo da requisição
        // O password já deve estar criptografado pelo middleware de validação

        return res.status(201).send("Usuário criado com sucesso");

    } catch (error) {
        return res.status(500).send({
            error: error.message
        });
    }
}

module.exports = {
    createUser
}