const { Users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();



async function login(req, res) {
    const { email, password } = req.body;

    try {
        // verifica se o usuário existe
        const user = await Users.findOne({
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
            process.env.JWT_SECRET, //criptografa Chave secreta do JWT
            { expiresIn: process.env.JWT_EXPIRES_IN } // Expiração do token em um dia
        )
        return res.status(200).send({token})
    } catch (error) {
        return res.status(500).send({
            error: error.message
        });
    }
}

module.exports = {
    login
}
// O código acima define uma função de login que autentica um usuário com base no email e senha fornecidos.
// Ele verifica se o usuário existe, compara a senha fornecida com a senha armazenada no banco de dados usando bcrypt, e se a autenticação for bem-sucedida, gera um token JWT para o usuário. Se ocorrer algum erro durante o processo, ele retorna uma resposta de erro apropriada.