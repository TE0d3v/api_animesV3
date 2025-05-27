const { Users } = require('../models');
const bcrypt = require('bcrypt');

// criptografia simples
async function createUser(req, res) {
    const hashedPassword = await bcrypt.hash(
        req.body.password,
        10 // número de rounds de criptografia
    )

    try {
        await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

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