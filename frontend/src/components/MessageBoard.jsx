import { useState, useEffect } from "react";
import MessageEditor from "./MessageEditor";

const MessageBoard = () => {
    const [channels, setChannels] = useState(null);
    const [currentChannelId, setCurrentChannelId] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState('');

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

    const getChannelMessages = async (channelId) => {
      const response = await fetch(`http://localhost:7777/messages/${channelId}`);
      const json = await response.json();

      if (response.ok)
      {
        setMessages(json);
      }
      else
      {
        console.log('Error fetching messages');
      }

      console.log(messages);
    };

    return (
      <div className="messageBoard">
        <div className="navPanel">
          {channels && channels.channels.map(x => 
            <p key={x.id}><button onClick={() => 
              {
                setCurrentChannelId(x.id);
                getChannelMessages(x.id);
              }
            }>{x.name}</button></p>)}
        </div>

        <div className="messagePanel">
          {messages && messages.messages.map(x => <p key={x.id}>{x.text}</p>)}
        </div>
        
        {messages && <MessageEditor messages={messages} currentChannelId={currentChannelId} setMessages={setMessages}/>}
      </div>
    );
};

export default MessageBoard;