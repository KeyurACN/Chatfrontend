import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { PiCircleDashedLight } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArchive } from "react-icons/io";

const Userbio = () => {
  return (
    <>
      <div className="h-[10vh] w-full gap-5 p-2 flex">
        {/* -------- Chat box user ------- */}
        <div className="w-1/3 flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abrahmov"
          />
        </div>
        <div className="w-2/3 flex justify-between gap-2 items-center">
          <HiUserGroup className="text-2xl mt-5" />
          <PiCircleDashedLight className="text-2xl mt-5" />
          <MdOutlineMessage className="text-2xl mt-5" />
          <BsThreeDotsVertical className="text-2xl mt-5" />
        </div>
      </div>

      {/* ------------------------  user details  --------------------------  */}
      <div className="h-[15vh] flex flex-col mt-5">
        {/*----------  search bar ------------*/}
        <div className="h-[7vh] w-full rounded-2xl bg-[#e0e0de] flex items-center p-1 gap-2">
          <BsSearch className="ml-2" />
          <input
            className="rounded-lg border-0 p-1 w-full"
            type="text"
            placeholder="Search and Start new Chat"
          />
        </div>
        {/*---------    end of search bar ----------*/}
        <div className="flex flex-row gap-5 p-5 items-center">
          <IoMdArchive className="text-[#00a884] text-xl" />
          <span className="font-medium">Archived</span>
        </div>
      </div>
    </>
  );
};

export default Userbio;
