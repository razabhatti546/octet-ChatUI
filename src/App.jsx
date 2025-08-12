import { useState } from "react";
import LeftSidebar from "./components/LeftSidebar";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import MessageInput from "./components/MessageInput";
import RightSidebar from "./components/RightSidebar";

function App() {
  const contacts = [
    {
      id: 1,
      name: "Kim Williamson",
      time: "2:34pm",
      status: "Missed",
      avatar: "KW",
      bgColor: "bg-purple-500",
      lastSeen: "2:34pm",
    },
    {
      id: 2,
      name: "Shane Watson",
      time: "2:34pm",
      status: "Outgoing",
      avatar: "SW",
      bgColor: "bg-green-500",
      lastSeen: "2:34pm",
    },
    {
      id: 3,
      name: "Hazellwood",
      time: "2:34pm",
      status: "Incoming",
      avatar: "H",
      bgColor: "bg-purple-600",
      lastSeen: "2:34pm",
    },
    {
      id: 4,
      name: "Zunaira Butt",
      time: "2:34pm",
      status: "Incoming",
      avatar: "ZB",
      bgColor: "bg-purple-400",
      lastSeen: "2:34pm",
    },
    {
      id: 6,
      name: "Mishal Irfan",
      time: "2:34pm",
      status: "Incoming",
      avatar: "MI",
      bgColor: "bg-orange-500",
      lastSeen: "2:34Pm",
    },
  ];

  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState([
    {
      text: "Hello, how are you available for meeting",
      time: "9:30AM",
      isOutgoing: false,
    },
    { text: "Hello", time: "9:30AM", isOutgoing: true },
    {
      text: "Hello, how are you available for meeting",
      time: "9:31AM",
      isOutgoing: true,
    },
    {
      text: "Hello, how are you available for meeting",
      time: "9:32AM",
      isOutgoing: true,
    },
    {
      text: "Hello, how are you available for meeting",
      time: "9:34AM",
      isOutgoing: false,
    },
    { text: "Hello", time: "9:36AM", isOutgoing: true },
    {
      text: "Hello, how are you available for meeting",
      time: "9:54AM",
      isOutgoing: false,
    },
  ]);

  const contactList = [
    { name: "Alina", phone: "0923456789", avatar: "A" },
    { name: "Anna", phone: "0923456789", avatar: "A" },
    { name: "Brown", phone: "0923456789", avatar: "B" },
    { name: "Ben", phone: "0923456789", avatar: "B" },
    { name: "Cutting", phone: "0923456789", avatar: "C" },
    { name: "Coral", phone: "0923456789", avatar: "C" },
  ];

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = (messageText) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newMessage = {
      text: messageText,
      time: currentTime,
      isOutgoing: true,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <LeftSidebar
        contacts={contacts}
        onContactSelect={handleContactSelect}
        selectedContact={selectedContact}
      />

      <div className="flex-1 flex flex-col">
        <ChatHeader selectedContact={selectedContact} />
        <ChatMessages messages={messages} selectedContact={selectedContact} />
        <MessageInput
          onSendMessage={handleSendMessage}
          selectedContact={selectedContact}
        />
      </div>

      <RightSidebar contactList={contactList} />
    </div>
  );
}

export default App;
