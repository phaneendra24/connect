import React from "react";
import Profile from "./profile";

export default function Navbar() {
  return (
    <div className="bg-[#f5f6f9] w-full flex justify-center ">
      <div className="w-[90%] py-3 h-[10%]   text-black sm:flex sm:justify-between">
        <span className="font-semibold text-3xl" id="name">
          CRUD APP
        </span>
        <Profile />
      </div>
    </div>
  );
}
