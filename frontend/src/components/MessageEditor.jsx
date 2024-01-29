import { useState } from "react";

const MessageEditor = ({messages, currentChannelId, setMessages, newMessage, setNewMessage}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = { id: 0 + messages.messages.length, channelId: currentChannelId, text: newMessage };
        setNewMessage('');
    
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