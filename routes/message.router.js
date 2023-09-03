const express = require('express');
const message_controller = require('../controllers/message.controller');
const message_router = express.Router();
message_router.get('/', message_controller.getMessages);
message_router.get('/:id', message_controller.getMessage);
message_router.post('/', message_controller.postMessage);

module.exports = message_router;