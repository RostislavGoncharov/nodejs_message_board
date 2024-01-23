const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

// Get all channels
router.get('/channels', messageController.getAllChannels);

// Get all messages from channel <id>
router.get('/messages/:id', messageController.getChannelMessages);

// Post a message to channel <id>
router.post('/:id', messageController.addMessage);

module.exports = router;