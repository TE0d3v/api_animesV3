const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
// Importa o controlador de autenticação responsável por lidar com as operações de login, registro e autenticação de usuários.

router.post('/auth/login', authController.login)
// o body so existe nos metodos post, delete por isso o login é feito com o post 

module.exports = router;
// Exporta o roteador para que possa ser usado em outros arquivos, como o arquivo principal do servidor Express.

