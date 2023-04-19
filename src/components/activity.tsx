import React, { useEffect, useState } from "react";
import Eachtweet from "./eachtweet";
import useStore from "../store";
import io from "socket.io-client";
import { socket } from "../socket";

type tweetsType = {
  _id: string;
  name: string;
  likes: number;
  dislikes: number;
  tweet: string;
  createdAt: string;
};

const Activity = () => {
  socket.on("disconnect", () => {
    console.log("sockets connected");
  });
  useEffect(() => {
    socket.on("tweets", (payload) => setTweets(payload));
  });

  const tweets = useStore((state: any) => state.tweets);
  const setTweets = useStore((state: any) => state.setTweets);
  const getalltweets = async () => {
    const resp = await fetch(`
      ${import.meta.env.VITE_BACKEND}api/tweets
      `);

    const data = await resp.json();
    if (data.length > 0) {
      setTweets(data);
    }
  };
  useEffect(() => {
    socket.on("tweets", (payload) => setTweets(payload));
  });

  useEffect(() => {
    getalltweets();
  }, []);

  return (
    <div className="w-full sm:w-[60%] sm:full h-full flex flex-col items-center gap-5 mt-4 p-2">
      {tweets.map((item: tweetsType, index: number) => {
        return (
          <div
            className="border-[2px] shadow-sm p-2 bg-[#f5f6f9] w-full  min-h-[30vh] mb-5 flex flex-col items-center justify-between rounded-lg text-black"
            key={index}
          >
            <Eachtweet {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default Activity;
