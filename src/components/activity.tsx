import React, { useEffect, useState } from "react";
import Eachtweet from "./eachtweet";
import useStore from "../store";
// #1b2630

type tweetsType = {
  _id: string;
  name: string;
  likes: number;
  dislikes: number;
  tweet: string;
  createdAt: string;
};

const Activity = () => {
  const tweets = useStore((state: any) => state.tweets);
  const setTweets = useStore((state: any) => state.setTweets);
  const getalltweets = async () => {
    const resp = await fetch("http://localhost:5500/api/tweets");
    const data = await resp.json();
    if (data.length > 0) {
      setTweets(data);
    }
  };

  useEffect(() => {
    getalltweets();
  }, []);

  return (
    <div className=" w-full h-full flex flex-col items-center gap-5 mt-10">
      {tweets.map((item: tweetsType, index: number) => {
        return (
          <div
            className="bg-[#1b2730] w-[80%] min-h-[30vh] px-5 py-3 mb-5 flex flex-col items-center justify-between"
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
