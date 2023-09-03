const express = require('express');
const message_router = require('./routes/message.router');
const friends_router = require('./routes/friends.router');
const app = express();

const PORT = 8000;

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
})

app.use('/friends', friends_router);
app.use('/message', message_router);
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});