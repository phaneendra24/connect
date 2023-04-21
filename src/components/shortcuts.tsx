import React from "react";
import usestore from "../store";

import submit from "../components/post";

function Shortcuts({ setpost }: any) {
  const setTweets = usestore((state: any) => state.setTweets);
  const Tweets = usestore((state: any) => state.tweets);

  return (
    <div className="text-sm h-full w-full rounded-md border-[1px] bg-[#f5f6f9]  mt-4 text-black overflow-hidden ">
      <ul
        className="grid grid-cols-2 sm:grid-cols-3 my-2 mx-1 gap-2"
        onClick={async (e: any) => {
          let arr = await e.target.innerText;
          await setpost(arr);
        }}
      >
        <li className="w-fit h-fit rounded-full p-1 bg-gradient-to-r from-blue-200 to-pink-200 cursor-pointer">
          hello!
        </li>
        <li className="w-fit h-fit rounded-full p-1 bg-gradient-to-r from-blue-200 to-pink-200 cursor-pointer">
          Hai!
        </li>
        <li className="w-fit h-fit rounded-full p-1 bg-gradient-to-r from-blue-200 to-pink-200 cursor-pointer">
          Have lunch?
        </li>
        <li className="w-fit h-fit rounded-full p-1 bg-gradient-to-r from-blue-200 to-pink-200 cursor-pointer">
          yeah!
        </li>
        <li className="w-fit h-fit rounded-full p-1 bg-gradient-to-r from-blue-200 to-pink-200 cursor-pointer">
          all the best
        </li>
      </ul>
    </div>
  );
}

export default Shortcuts;
