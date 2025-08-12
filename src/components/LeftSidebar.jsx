import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BsChatDots, BsTelephone } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const LeftSidebar = ({ contacts, onContactSelect, selectedContact }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("Calls"); // Default to Calls as shown in your design

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = contact.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || contact.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-80 bg-gray-50 flex flex-col h-screen">
      {/* Header */}
      <div className="pl-3 pt-[14px] bg-white border-b border-gray-200">
        <div className="flex items-center justify-between ">
          <div>
            <span className="text-md text-black font-semibold">
              Select your number
            </span>
            <div className="mb-2 mt-1 w-[150px] h-[30px] bg-gradient-to-b from-purple-500 to-blue-500 text-white px-4 rounded-full text-sm flex items-center justify-center gap-2  shadow-lg">
              All Numbers
              <FaChevronDown className="w-3 h-3" />
            </div>
          </div>
          <div className="flex justify-end items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              <BsChatDots className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              <BsTelephone className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages/Calls Toggle */}
      <div className="flex justify-center items-center bg-gray-100 h-[60px]">
        <div className=" w-[200px]  flex justify-center items-center gap-1 bg-white rounded-full">
          <button
            onClick={() => setActiveTab("Messages")}
            className={`w-[100px] h-[40px] text-center cursor-pointer rounded-full text-sm font-medium transition-all ${
              activeTab === "Messages"
                ? "bg-gradient-to-b from-purple-500 to-blue-400 text-white shadow-md"
                : "text-black hover:text-gray-800"
            }`}
          >
            Messages
          </button>
          <button
            onClick={() => setActiveTab("Calls")}
            className={`w-[100px] h-[40px] text-center cursor-pointer rounded-full text-sm font-medium transition-all ${
              activeTab === "Calls"
                ? "bg-gradient-to-b from-purple-500 to-blue-400 text-white shadow-md"
                : "text-black hover:text-gray-800"
            }`}
          >
            Calls
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-center items-center bg-gray-100 pt-2 pb-2">
        <div className="relative">
          <CiSearch className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[250px] pl-10 pr-4 py-2.5 bg-white border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center items-center bg-gray-100 h-[60px]">
        <div className="flex gap-2">
          {["All", "Missed", "Incoming"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-b from-purple-500 to-blue-400 text-white shadow-md"
                  : " border border-purple-500 text-gray-500 bg-white hover:text-gray-700 relative"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-3">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => onContactSelect(contact)}
            className={`px-4 py-3 cursor-pointer transition-colors bg-white rounded-md mb-2 ${
              selectedContact?.id === contact.id
                ? "shadow-md border-l-4 border-purple-500"
                : "hover:shadow-lg"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 bg-gradient-to-b from-purple-600 to-blue-300 rounded-full flex items-center justify-center text-white text-sm font-semibold`}
              >
                {contact.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="font-medium text-gray-900 text-sm truncate">
                    {contact.name}
                  </h3>
                  <span className="text-xs text-gray-500 ml-2">
                    {contact.time}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className={`w-3 h-3 ${
                      contact.status === "Missed"
                        ? "text-red-400"
                        : contact.status === "Outgoing"
                        ? "text-green-400"
                        : "text-blue-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span
                    className={`text-xs ${
                      contact.status === "Missed"
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {contact.status}
                  </span>
                </div>
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
