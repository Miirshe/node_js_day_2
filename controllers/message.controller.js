const message = require('../model/message.model');
const path = require('path');

function postMessage(req, res) {
    if (!req.body.message) {
        return res.status(400).json({ error: 'invalid message' });
    }
    const new_message = {
        id: message.length,
        message: req.body.message
    }
    message.push(new_message);
    res.status(200).json({
        message: 'successfuly created message'
    });


}

function getMessages(req, res) {
    // res.json(message);
    res.sendFile(path.join(__dirname, '..', 'public', 'download.jpeg'));
}

function getMessage(req, res) {
    const id = Number(req.params.id);
    const message = message[id];
    if (message) {
        return res.status(200).json(message);
    } else {
        return res.status(400).json({ error: 'invalid ID...' })
    }
}

module.exports = {
    postMessage,
    getMessages,
    getMessage
}