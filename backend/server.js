const express = require('express');

const app = express();
const PORT = 7777;

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.get('/', (req, res) => {
    res.json({'mssg': 'Hi'});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});