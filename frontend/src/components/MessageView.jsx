// This component lists all messages in the currently selected channel.

const MessageView = ({messages}) => {
    return (
        <div className="messagePanel">
            {messages.messages.map(x => <p key={x.id}>{x.text}</p>)}
        </div>
    );
};

export default MessageView;