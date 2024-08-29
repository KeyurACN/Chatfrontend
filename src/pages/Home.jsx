import React from "react";
import HomeNav from "../component/HomeNav";
import Userbio from "../component/Userbio";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { AiFillLock } from "react-icons/ai";
import what from "../Images/what.png";
import whatsappmob from "../Images/whatsappmob.jpg";
import { MessageList } from "./../component/MessageList";

const chats = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: 2,
    name: "Jane Smith",
    lastMessage: "I have sent you the document.",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: 3,
    name: "Ashutosh lakshakar",
    lastMessage: "Hey, how are you?",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: 4,
    name: "Avi bahre",
    lastMessage: "Kaha ho bhai.",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: 5,
    name: "Uday",
    lastMessage: "Hey, how are you?",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: 6,
    name: "Amit",
    lastMessage: "bhai abhi dehradoon hun .",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: 7,
    name: "Vikas",
    lastMessage: "Hey, how are you?",
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    id: 8,
    name: "Amit",
    lastMessage: "bhai abhi dehradoon hun .",
    avatar: "https://bit.ly/dan-abramov",
  },
];

export default function Home() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId);
  };

  return (
    <>
      <HomeNav />
      <div className="w-[98vw] m-auto flex justify-between mt-[-20px] h-[93vh] gap-5 bg-[#F0F2F5] shadow-lg">
        {/* --------------------- Chat box Side ------------------- */}
        <div className="w-[40vw] lg:w-[25vw] flex flex-col border border-gray-300">
          <Userbio />

          <div className="mt-1 shadow-2xl bg-white overflow-scroll h-[65vh] w-[30vw] lg:w-[25vw]">
            <div className="p-4">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className={`flex items-center cursor-pointer p-2 rounded-md mb-2 ${
                    selectedChat === chat.id ? "bg-gray-100" : "bg-transparent"
                  } hover:bg-gray-100`}
                  onClick={() => handleChatClick(chat.id)}
                >
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <div className="font-bold">{chat.name}</div>
                    <div className="text-sm text-gray-500">
                      {chat.lastMessage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --------------------- Web --------------------- */}
        <div className="w-[80vw] lg:w-[75vw] flex">
          {!selectedChat && (
            <div className="w-9/10 h-[88vh] m-auto flex flex-col">
              <div className="w-7/10 m-auto flex gap-5 justify-between h-[40vh]">
                <div className="mt-5">
                  <img
                    src={whatsappmob}
                    alt="WhatsApp Mobile"
                    className="h-[140px] rounded-lg m-auto mt-5"
                  />
                </div>
                <div>
                  <img
                    src={what}
                    alt="WhatsApp"
                    className="rounded-lg m-auto mt-5"
                  />
                </div>
              </div>

              <div className="w-7/10 m-auto h-[30vh]">
                <h2 className="font-light text-center">WhatsApp Web</h2>
                <p className="text-center mt-5">
                  Send and receive messages without keeping your phone online.
                  Use WhatsApp on up to 4 linked devices and 1 phone at the same
                  time.
                </p>
              </div>

              <div className="w-2/5 m-auto flex justify-between">
                <div className="flex items-center mt-10">
                  <AiFillLock />
                </div>
                <div className="flex items-center mt-10">
                  <p className="text-center">End-To-End Encrypted</p>
                </div>
              </div>
            </div>
          )}

          {selectedChat && (
            <div className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto bg-gray-200">
                <MessageList selectedChat={selectedChat} />
              </div>

              <div className="border-t border-gray-300">
                <div className="p-2 flex items-center">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 p-2 rounded-lg border border-gray-300"
                  />
                  <button className="ml-2 p-2 rounded-lg bg-blue-500 text-white">
                    <FiSend />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
