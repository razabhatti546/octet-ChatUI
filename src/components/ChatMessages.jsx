import MessageBubble from "./MessageBubble";

const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto bg-white">
      <div className="text-center mb-6">
        <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm">
          Today 12:34 PM
        </span>
      </div>

      <div className="space-y-4">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message}
            isOutgoing={message.isOutgoing}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
