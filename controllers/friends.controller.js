const friends = require('../model/friends.model');

function postFriend(req, res) {

    if (!req.body.name && !req.body.age) {
        return res.status(400).json({
            error: 'missing name and age'
        })
    }
    const new_friend = {
        'id': friends.length,
        'name': req.body.name,
        'age': req.body.age,
    }
    friends.push(new_friend);
    res.status(200).json({
        success: 'successfully added friends'
    })
}

function getFriends(req, res) {
    res.json(friends);
}

function getFriend(req, res) {
    const id = Number(req.params.id);
    const friend = friends[id];
    if (friend) {
        return res.status(200).json(friend);
    } else {
        return res.status(404).json({
            error: 'friend does not exist'
        })
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend
}