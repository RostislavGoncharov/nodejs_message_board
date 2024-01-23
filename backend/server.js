const express = require('express');
const messageRouter = require('./routes/messages');

const app = express();
const PORT = 7777;

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use(messageRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});