import React, { useEffect, useRef, useState } from "react";
import usestore from "../store";
import { socket } from "../socket";

function Post() {
  const [post, setPost] = useState("");
  const [click, setclick] = useState(false);
  const tweets = usestore((state: any) => state.tweets);

  const setTweets = usestore((state: any) => state.setTweets);
  const name = usestore((state: any) => state.name);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name == "") {
      alert("enter the name first");
    } else {
      try {
        import.meta.env.VITE_BACKEND;
        const resp = await fetch(`${import.meta.env.VITE_BACKEND}api/tweets`, {
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
      } catch (e) {
        alert("failed to post, try again!");
      }
    }
  };
  function handleKeyDown(event: any) {
    if (event.ctrlKey && event.keyCode === 13) {
      submit(event);
    }
  }

  return (
    <div className="relative h-40  flex flex-col  w-[90%] ">
      <textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        onKeyDown={handleKeyDown}
        className="h-24 resize-none  w-full placeholder:text-lg text-black  outline-none bg-[#f5f6f9] rounded-2xl p-2"
        placeholder="Make a tweet"
      />
      <button
        className={`${
          click ? "send_action" : ""
        } mt-2 absolute bottom-0 right-5  text-black bg-[#e8daff] p-2 rounded-full`}
        onClick={() => {
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
          className={` w-10 h-10`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Post;
