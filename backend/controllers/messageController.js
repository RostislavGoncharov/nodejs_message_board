// This controller performs all database operations.

const messageDb = require('../data/messagesDb');

const getAllChannels = (req, res) => {
    res.status(200).json({channels: messageDb.channels});
};

const getChannelMessages = (req, res) => {
    const id = req.params.id;
    const messages = messageDb.messages.filter(x => x.channelId === id);

    res.status(200).json({messages});
};

const addMessage = (req, res) => {
    const {text} = req.body;
    const id = req.params.id;
    const channel = messageDb.channels.find(x => x.id === id);

    if (!channel)
    {
        return res.status(404).json({error: 'Channel ID not found'});
    }
    
    const newId = messageDb.messages.length;

    const newMessage = {
        id: newId,
        channelId: id,
        text: text,
    };

    messageDb.messages.push(newMessage);
    console.log(messageDb.messages);

    res.status(201).json({newMessage});
}

module.exports = {
    getAllChannels,
    getChannelMessages,
    addMessage
};