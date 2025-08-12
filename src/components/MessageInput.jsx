import { useState } from "react";
import { IoMdAttach } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";
const MessageInput = ({ onSendMessage, selectedContact }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && selectedContact) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  if (!selectedContact) {
    return null;
  }

  return (
    <div className="bg-white shadow-lg z-10 p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">
          {/* Left side icons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
              title="Attach file"
            >
              <IoMdAttach className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
              title="Attach image"
            >
              <SlCalender />
            </button>
          </div>

          {/* Input field with icons inside */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Type Message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full pl-4 pr-20 py-3 rounded-md bg-gray-100 focus:outline-none focus:border-blue-500 text-sm"
            />
            {/* Icons inside input on the right */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                title="Add emoji"
              >
                <BsEmojiHeartEyesFill />
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
                title="Voice message"
              >
                <BsMicFill />
              </button>
            </div>
          </div>

          {/* Send button outside */}
          <button
            type="submit"
            disabled={!message.trim()}
            className="w-10 h-10 bg-gradient-to-b from-purple-500 to-blue-400 text-white rounded-full hover:from-purple-600 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            title="Send message"
          >
            <BsSendFill />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
