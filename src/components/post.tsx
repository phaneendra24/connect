import React, { useEffect, useRef, useState } from "react";
import usestore from "../store";
import { socket } from "../socket";
import Shortcuts from "./shortcuts";

export default function Post() {
  const [post, setPost] = useState("");
  const [click, setclick] = useState(false);

  const setTweets = usestore((state: any) => state.setTweets);
  const Tweets = usestore((state: any) => state.tweets);

  const name = usestore((state: any) => state.name);

  const submit = async () => {
    console.log("stared");
    console.log(post);

    if (name === "" || post === "") {
      alert("enter the name and tweet first");
    } else {
      try {
        import.meta.env.VITE_BACKEND;
        const resp = await fetch(`${import.meta.env.VITE_BACKEND}/api/tweets`, {
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
        });
        const data = await resp.json();
        setTweets(data);
        setPost("");
        socket.emit("tweets", data);
      } catch (err) {
        alert("failed to post, try again!");
      }
    }
  };
  function handleKeyDown(event: any) {
    if (event.ctrlKey && event.keyCode === 13) {
      console.log("submitting");
      submit();
    }
  }

  return (
    <div className="h-40  flex justify-between  w-full gap-3 my-4">
      <div className="relative h-40 w-full sm:w-[88%] flex flex-col">
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border-[2px] shadow-md h-24 resize-none  w-full placeholder:text-lg text-black  outline-none bg-[#f5f6f9] rounded-2xl p-2"
          placeholder="Make a tweet"
        />

        <button
          className={`${
            click ? "send_action" : ""
          } mt-2 w-14 absolute bottom-0 right-4 text-black bg-[#e8daff] p-2 rounded-full`}
          onClick={() => {
            submit();
            setclick(true);
            setTimeout(() => {
              setclick(false);
            }, 1000);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-10 h-10`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
      <div className="invisible w-0 sm:visible sm:w-fit">
        <Shortcuts setpost={setPost} />
      </div>
    </div>
  );
}
