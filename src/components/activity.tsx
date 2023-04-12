import React, { useEffect, useState } from "react";
import Eachtweet from "./eachtweet";
import useStore from "../store";
import io from "socket.io-client";
// #1b2630
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
    http://${import.meta.env.VITE_LOCAL}/api/tweets
    `);
    const data = await resp.json();
    if (data.length > 0) {
      setTweets(data);
    }
  };

  useEffect(() => {
    getalltweets();
  }, []);
  const getsocket = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("foo", { user: "phaneedra", msg: "hello there!" });
  };

  return (
    <div className="w-[60%] sm:full h-full flex flex-col items-center gap-5 mt-4">
      {tweets.map((item: tweetsType, index: number) => {
        return (
          <div
            className="App w-[90%] sm:[80%] min-h-[30vh] px-5 py-3 mb-5 flex flex-col items-center justify-between rounded-lg text-black"
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
