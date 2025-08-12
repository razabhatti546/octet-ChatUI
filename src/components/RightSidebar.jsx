import { useState } from "react";
import { FaPlus, FaRegCircleQuestion } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaSortDown } from "react-icons/fa6";

const RightSidebar = ({ contactList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group contacts by their first letter
  const groupedContacts = {};
  filteredContacts.forEach((contact) => {
    const firstLetter = contact.name.charAt(0).toUpperCase();
    if (!groupedContacts[firstLetter]) {
      groupedContacts[firstLetter] = [];
    }
    groupedContacts[firstLetter].push(contact);
  });

  return (
    <div className="w-80 bg-white border-l border-gray-200 h-full">
      {/* Header with help and settings icons */}
      <div className="flex justify-end items-center pr-3 border-b gap-2 border-gray-200 h-[81px]">
        <button className="w-8 h-8 text-gray-400 hover:text-gray-600 flex items-center justify-center">
          <FaRegCircleQuestion className="w-6 h-6" />{" "}
        </button>
        <button className="w-8 h-8 text-gray-400 hover:text-gray-600 flex items-center justify-center">
          <IoSettingsSharp className="w-6 h-6" />{" "}
        </button>
      </div>

      {/* Contact Header */}
      <div className="px-6 pb-4">
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-black ">Contact</span>
          <button className="w-8 h-8 bg-gradient-to-b from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-blue-600">
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Search Contact */}
      <div className="px-6 pb-4">
        <div className="relative">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Contact"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />
        </div>
      </div>

      <div className="flex overflow-hidden">
        {/* Contact List */}
        <div className="flex-1 h-90 overflow-y-auto px-6">
          {Object.keys(groupedContacts)
            .sort()
            .map((letter) => (
              <div key={letter} className="mb-6">
                {/* Letter Header */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-md font-semibold text-gray-400">
                    {letter}
                  </span>
                </div>

                {/* Contacts under this letter */}
                {groupedContacts[letter].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 py-2 hover:bg-gray-100 cursor-pointer rounded-lg px-2 -mx-2"
                  >
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium overflow-hidden">
                      {contact.avatar === "A" && contact.name === "Anna" ? (
                        <img
                          src="/images/user-avatar.jpg"
                          alt={contact.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      ) : (
                        <span>{contact.avatar}</span>
                      )}
                      <div
                        className="w-full h-full bg-purple-100 text-purple-600 rounded-full items-center justify-center text-sm font-medium"
                        style={{ display: "none" }}
                      >
                        {contact.avatar}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">
                        {contact.name}
                      </h3>
                      <p className="text-xs text-gray-500">{contact.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>

        {/* Alphabet Navigation Strip */}
        <div className="flex flex-col items-center justify-center pr-3 py-4 ">
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
            const hasContacts = Object.keys(groupedContacts).includes(letter);
            return (
              <button
                key={letter}
                className={`text-[8px] transition-colors ${
                  hasContacts
                    ? "text-blue-500 hover:text-blue-700"
                    : "text-gray-300"
                }`}
                disabled={!hasContacts}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Section */}
      <div className="border-t border-gray-200 bg-white">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-md font-semibold text-black">Recent</h3>
            <button className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
              <FaSortDown className="pb-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-white">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-md font-semibold text-black">Favourites</h3>
            <button className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
              <FaSortDown className="pb-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
