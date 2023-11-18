import React, { useState } from "react";
import usestore from "../store";
import { socket } from "../socket";

type tweetType = {
  _id: string;
  name: string;
  likes: number;
  dislikes: number;
  tweet: string;
  createdAt: string;
  time: string;
};

function Eachtweet(item: tweetType) {
  const [like, setLike] = useState(false);
  const [dislike, setdisLike] = useState(false);
  const setTweets = usestore((state: any) => state.setTweets);

  const data = { item };

  const deleteTweet = async () => {
    const resp = await fetch(
      `${import.meta.env.VITE_BACKEND}api/tweets/${item._id}`,
      {
        method: "DELETE",
      }
    );
    const data = await resp.json();
    setTweets(data);
    socket.emit("tweets", data);
  };
  return (
    <div className="w-fit bg-[#3d4354] rounded-lg min-w-[70%]  h-full flex justify-between">
      <div className="  p-2 rounded-lg w-fit flex flex-col gap-5">
        <p>{data.item.tweet}</p>
        <p>{data.item.time}</p>
      </div>
      <div className=" flex flex-col  justify-between items-end">
        <h1 className="bg-blue-500 h-fit rounded-b-md  p-1 text">
          {data.item.name}
        </h1>
        <p className=" bg-red-400 w-fit">del</p>
      </div>
    </div>
  );
}

export default Eachtweet;
