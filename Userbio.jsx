import React, { useEffect, useState } from "react";
import { HiUserGroup } from "react-icons/hi";
import { PiCircleDashedLight } from "react-icons/pi";
import { MdOutlineMessage } from "react-icons/md";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArchive } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GetUserDetails } from "../Redux/UserDetailsReducer/Action";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-dropdown-select";

const Userbio = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const getUserDetails = useSelector(
    (state) => state.UserDetailsReducer.getUserDetails
  );

  const userNames = getUserDetails.users?.map((users) => ({
    label: users.name,
    value: users.name
  }));
  console.log(userNames, "111111");

  useEffect(() => {
    dispatch(GetUserDetails());
  }, [dispatch]);

  // console.log("User Deatils", getUserDetails.users);

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
          {/* <HiUserGroup className="text-2xl mt-5" />
          <PiCircleDashedLight className="text-2xl mt-5" />
          <MdOutlineMessage className="text-2xl mt-5" /> */}
          <IoIosAddCircleOutline onClick={()=> setDropDown(true)} />
          {/* <BsThreeDotsVertical className="text-2xl mt-5" /> */}
        </div>
      </div>
      {dropDown && (
        <Select
        options={userNames}
          //value={props.selectedLocation}
          //onChange={props.handleLocationChange}
          isSearchable={true}
          placeholder="Search"
          className="w-full  focus:border-blue-500 focus:ring-blue-500 mb-2 mr-2"
        />
      )}

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
