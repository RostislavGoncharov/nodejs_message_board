const express = require('express');

const router = express.Router();

// Get all channels
router.get('/channels', (req, res) => {
    res.json({mssg: 'GET all channels'});
});

// Get all messages from channel <id>
router.get('/messages/:id', (req, res) => {
    res.json({mssg: 'GET all messages from channel <id>'});
});

// Post a message to channel <id>
router.post('/:id', (req, res) => {
    res.json({mssg: 'POST a message to channel <id>'});
});

module.exports = router;