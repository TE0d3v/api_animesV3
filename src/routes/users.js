const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const usersMiddleware = require('../middlewares/users');

// Rota para criar um usuário
router.post('/users', usersMiddleware.validateCreateUser, usersController.createUser);


// Rota para listar todos os usuários

module.exports = router;
