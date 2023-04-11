import React from "react";
import Profile from "./profile";

export default function Navbar() {
  return (
    <div className="bg-[#f5f6f9] w-full flex justify-center fixed z-[1]">
      <div className="w-[90%] py-3 h-[10%]   text-black flex justify-between ">
        <span className="font-extrabold text-2xl">CRUD APP</span>
        <Profile />
      </div>
    </div>
  );
}
