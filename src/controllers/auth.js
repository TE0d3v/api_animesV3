const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();



async function login(req, res) {
    const { email, password } = req.body;

    try {
        // verifica se o usuário existe
        const user = await User.findOne({
            where: { email }
        })
        if (!user) {
            return res.status(401).send({
                error: "Usuário não encontrado"
            })
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send({
                error: "Senha incorreta"
            })
        }
        // Gera o token JWT
        const token = jwt.sign(
            {id: user.id, email: user.email},
            process.env.JWT_SECRET, // Chave secreta do JWT
            { expiresIn: process.env.JWT_EXPIRES_IN } // Expiração do token
        )
        return res.status(200).send({token})
    } catch (error) {
        return res.status(500).send({
            error: "Erro ao realizar login",
        });
    }
}