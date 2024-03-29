// This is the parent component for the other components of the message board.

import { useState, useEffect } from "react";
import MessageEditor from "./MessageEditor";
import MessageView from "./MessageView";
import ChannelList from "./ChannelList";

const MessageBoard = () => {
    const [channels, setChannels] = useState(null);
    const [currentChannelId, setCurrentChannelId] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    // Fetching the channels once upon loading the app.
    useEffect(() => {
        const fetchedChannels = async () => {
            const response = await fetch('http://localhost:7777/channels');
            const json = await response.json();
    
            if (response.ok)
            {
              setChannels(json);
            }
            else
            {
              console.log('Error fetching channels');
            }
        };
    
        fetchedChannels();
      }, []);

    return (
      <div className="messageBoard">
        {channels && <ChannelList setMessages={setMessages} 
                                  channels={channels} 
                                  setCurrentChannelId={setCurrentChannelId}
                                  setNewMessage={setNewMessage} />}

        <div className="messageBlock">
          {messages && <MessageView messages={messages} />}
        
          {messages && <MessageEditor messages={messages} 
                                      currentChannelId={currentChannelId} 
                                      setMessages={setMessages}
                                      newMessage={newMessage}
                                      setNewMessage={setNewMessage}/>}
        </div>
      </div>
    );
};

export default MessageBoard;