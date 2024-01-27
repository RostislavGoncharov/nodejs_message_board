const messageDb = require('../data/messagesDb');

const getAllChannels = (req, res) => {
    res.status(200).json({channels: messageDb.channels});
};

const getChannelMessages = (req, res) => {
    const id = req.params.id;
    const messages = messageDb.messages.filter(x => x.channelId.toString() === id);

    res.status(200).json({messages});
};

const addMessage = (req, res) => {
    const {messageText} = req.body;
    const id = req.params.id;
    const channel = messageDb.find(x => x.channelId.toString() === id);

    if (!channel)
    {
        return res.status(404).json({error: 'Channel ID not found'});
    }

    const newMessage = {
        channelId: id,
        text: messageText,
    };

    messageDb.messages.push(newMessage);

    res.status(201).json({newMessage});
}

module.exports = {
    getAllChannels,
    getChannelMessages,
    addMessage
};