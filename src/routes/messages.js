const express = require('express');
const router = express.Router();
const controllerMessages = require('../controllers/messages');
const middlewareMessages = require('../middlewares/messages');
const middlawareToken = require('../middlewares/authToken');

router.post('/messages', middlawareToken.authToken, middlewareMessages.validateMessage, controllerMessages.createMessage);

router.get('/messages/:groupId', middlawareToken.authToken, controllerMessages.getMessages);

module.exports = router;