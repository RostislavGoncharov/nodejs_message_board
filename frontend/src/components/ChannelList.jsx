const ChannelList = ({messages, setMessages, channels, setCurrentChannelId}) => {
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
        <div className="navPanel">
          {channels.channels.map(x => 
            <p key={x.id}><button onClick={() => 
              {
                setCurrentChannelId(x.id);
                getChannelMessages(x.id);
              }
            }>{x.name}</button></p>)}
      </div>
    );
};

export default ChannelList;