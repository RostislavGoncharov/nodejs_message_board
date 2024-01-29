// This component allows the user to post new messages.

const MessageEditor = ({messages, currentChannelId, setMessages, newMessage, setNewMessage}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        // The id is generated at random and used as the key when listing messages in MessageView.
        // This isn't perfect (and wouldn't be needed with a real database) but it works well enough for this purpose.
        const newId = Math.floor(Math.random() * 1000);
        const message = { id: newId, channelId: currentChannelId, text: newMessage };
    
        await fetch(`http://localhost:7777/${currentChannelId}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(message),
        });
    
        setMessages({messages: [...messages.messages, message]});
        setNewMessage('');
      }

    return (
        <div className="messageEditorPanel">
          <form onSubmit={handleSubmit} action="">
              <label htmlFor="messageInput">New Message: </label>
              <textarea id="messageInput" value={newMessage} onChange={(e) => {setNewMessage(e.target.value)}}></textarea>
              {<input type="submit" value="Post Message" disabled={newMessage.trim() == ''}/>}
          </form>
        </div>
    );
};

export default MessageEditor;