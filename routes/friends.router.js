const express = require('express');
const friend_controllers = require('../controllers/friends.controller')

const friends_router = express.Router();
friends_router.use((req, res, next) => {
    console.log(`Request_url ${req.ip}`);
    next();

})
friends_router.post('/', friend_controllers.postFriend);
friends_router.get('/', friend_controllers.getFriends);
friends_router.get('/:id', friend_controllers.getFriend);

module.exports = friends_router;