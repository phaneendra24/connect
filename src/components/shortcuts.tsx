import React from "react";

function Shortcuts() {
  return (
    <div className="text-sm w-[30%] rounded-md border-[1px] bg-[#f5f6f9] h-[40vh] mt-4 text-black fixed right-5 bottom-3">
      <ul className="grid grid-cols-2 sm:grid-cols-3 my-2 mx-1 gap-2">
        <li className="w-fit h-fit rounded-full p-1 bg-gradient-to-r from-blue-200 to-pink-200">
          hello!
        </li>
        <li className="w-fit h-fit rounded-full p-1 bg-gradient-to-r from-blue-200 to-pink-200">
          Hai!
        </li>
        <li className="w-fit h-fit rounded-full p-1 bg-gradient-to-r from-blue-200 to-pink-200">
          Have lunch?
        </li>
        <li className="w-fit h-fit rounded-full p-1 bg-gradient-to-r from-blue-200 to-pink-200">
          yeah!
        </li>
        <li className="w-fit h-fit rounded-full p-1 bg-gradient-to-r from-blue-200 to-pink-200">
          all the best
        </li>
      </ul>
    </div>
  );
}

export default Shortcuts;
