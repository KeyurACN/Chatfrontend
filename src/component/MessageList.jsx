import React from "react";
import { FaSearch, FaEllipsisV } from "react-icons/fa";

export const MessageList = ({ selectedChat }) => {

  
  return (
    <>
      <div className="shadow-lg w-full p-2 flex justify-between">
        <div className="w-1/3 flex gap-2 items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abrahmov"
          />
          <span className="text-center">Dan Abrahmov</span>
        </div>

        <div className="w-1/12 flex gap-2 items-center">
          <FaSearch className="text-gray-500 text-xl" />
          <FaEllipsisV className="text-gray-500 text-xl" />
        </div>
      </div>

      {/* -------------------------------------------------- */}

      <div className="h-[72vh]">{/* render */}</div>
    </>
  );
};
