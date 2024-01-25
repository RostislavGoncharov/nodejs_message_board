import { useState, useEffect } from "react";

const ChannelList = () => {
    const [channels, setChannels] = useState(null);

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
              console.log("Error");
            }
        };
    
        fetchedChannels();
      }, []);

      return (
        <div>
            {channels && channels.channels.map((channel) => (
                <p key={channel.channelId}>{channel.channelName}</p>
            ))}
        </div>
      );
};

export default ChannelList;