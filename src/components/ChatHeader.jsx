const ChatHeader = ({ selectedContact }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="/images/endUserImage.png"
              alt={selectedContact.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />{" "}
            <div
              className="w-full h-full bg-orange-500 rounded-full items-center justify-center text-white text-sm font-medium"
              style={{ display: "none" }}
            >
              {selectedContact.avatar}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">
              {selectedContact.name}
            </h2>
            <p className="text-sm text-gray-400">
              Last seen at {selectedContact.lastSeen || "2:34Pm"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            className=" text-gray-400 hover:text-gray-600 cursor-pointer"
            title="Call"
          >
            <img src="/images/phoneIcon.png" alt="call" className="w-5 h-5" />
          </button>
          <button
            className=" text-gray-400 hover:text-gray-600 cursor-pointer"
            title="More options"
          >
            <img src="/images/3dots.png" alt="more" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
