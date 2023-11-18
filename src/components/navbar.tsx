import React from "react";
import Profile from "./profile";

export default function Navbar() {
  return (
    <div className="fixed top-0 px-5 sm:px-20 bg-[#1b202d]  w-full flex justify-center items-center py-5">
      <span className="  text-3xl w-full text-blue-500">Public chat</span>
      <Profile />
    </div>
  );
}
