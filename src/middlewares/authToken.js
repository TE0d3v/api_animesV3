const jwt = require('jsonwebtoken');
require('dotenv').config();

function authToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({
            error: 'No token provided'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Armazena os dados do usuário decodificado na requisição
        next(); // Chama o próximo middleware ou rota
    } catch (error) {
        return res.status(401).send({
            error: 'Invalid token'
        });
    }
}

module.exports = {
    authToken
}