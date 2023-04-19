import React from "react";
import Profile from "./profile";

export default function Navbar() {
  return (
    <div className="bg-[#f5f6f9] min-h-[15vh] w-full flex justify-center ">
      <div className="w-[90%] h-full py-3 text-black sm:flex sm:justify-between">
        <span className="font-semibold  text-3xl w-full" id="name">
          CRUD APP
        </span>
        <Profile />
      </div>
    </div>
  );
}
