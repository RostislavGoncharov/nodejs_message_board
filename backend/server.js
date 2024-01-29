// This is the main Express app.

const express = require('express');
const cors = require('cors');
const messageRouter = require('./routes/messages');

const app = express();
const PORT = 7777;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use(messageRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});