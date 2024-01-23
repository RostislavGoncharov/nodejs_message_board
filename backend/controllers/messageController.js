const messageDb = require('../data/messagesDb');

const getAllChannels = (req, res) => {
    res.status(200).json({channels: messageDb});
};

const getChannelMessages = (req, res) => {
    const id = req.params.id;
    const channel = messageDb.find(x => x.channelId.toString() === id);

    if (!channel)
    {
        return res.status(404).json({error: 'Channel ID not found'});
    }

    res.status(200).json({messages: channel.messages});
};

const addMessage = (req, res) => {
    const {messageText} = req.body;
    const id = req.params.id;
    const channel = messageDb.find(x => x.channelId.toString() === id);

    if (!channel)
    {
        return res.status(404).json({error: 'Channel ID not found'});
    }

    const newMessage = {messageText};
    console.log(messageText);
    channel.messages.push(newMessage);

    res.status(204).json({messageAdded: newMessage});
}

module.exports = {
    getAllChannels,
    getChannelMessages,
    addMessage
};