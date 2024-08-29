import React from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';

export const Topnav = () => {
  return (
    <div className="w-full h-[30vh] bg-[#00a884]">
      <div className="flex justify-between w-[10%] h-[10vh] ml-[250px] gap-5 items-center">
        <span className="text-2xl mt-5"><FaWhatsappSquare /></span>
        <span className="text-xl mt-5 text-white font-semibold tracking-wider">WHATSAPP</span>
      </div>
    </div>
  );
};
