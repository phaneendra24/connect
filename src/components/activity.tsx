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
  time: string;
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
    console.log(data);

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
    <div className="w-full flex flex-col gap-5 items-center justify-center">
      {tweets.map((item: tweetsType, index: number) => {
        return <Eachtweet {...item} key={index} />;
      })}
    </div>
  );
};

export default Activity;
