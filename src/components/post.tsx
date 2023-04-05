import React, { useState } from "react";
import usestore from "../store";
import io from "socket.io-client";

const socket = io("http://localhost:5500/");

function Post() {
  const [post, setPost] = useState("");
  const setTweets = usestore((state: any) => state.setTweets);
  const name = usestore((state: any) => state.name);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name == "") {
      alert("enter the name first");
    } else {
      try {
        const resp = await fetch(
          "https://connectapi-production.up.railway.app/api/tweets/",
          {
            method: "POST",
            headers: {
              Accept: "application.json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              tweet: post,
              likes: 0,
              dislikes: 0,
            }),
          }
        );
        const data = await resp.json();
        setTweets(data);
        setPost("");
      } catch (e) {
        alert("failed to post, try again!");
      }
    }
  };

  return (
    <div className="w-full rounded-md bg-[#1b2730] ">
      <form
        className="w-full h-full relative flex flex-col items-center justify-center"
        onSubmit={(e) => submit(e)}
      >
        <input
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="w-[70%] sm:w-[80%]  outline-none bg-[#28353e] rounded-sm p-2"
          placeholder="make a tweet"
        />
        <button className="absolute bottom-2 right-0 sm:right-6">POST</button>
      </form>
    </div>
  );
}

export default Post;
