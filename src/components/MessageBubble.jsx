const MessageBubble = ({ message, isOutgoing }) => {
  return (
    <div className={`flex ${isOutgoing ? "justify-end" : "justify-start"}`}>
      <div
        className={`
        ${
          isOutgoing
            ? "bg-gradient-to-b from-purple-500 to-blue-400 text-white rounded-2xl rounded-br-sm"
            : "bg-gray-200 text-gray-800 rounded-2xl rounded-bl-sm"
        } 
        px-4 py-2 max-w-xs
      `}
      >
        <div className="flex items-end justify-between gap-2">
          <p className="flex-1">{message.text}</p>
          <span
            className={`text-xs flex-shrink-0 ${
              isOutgoing ? "text-purple-200" : "text-gray-500"
            }`}
          >
            {message.time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
