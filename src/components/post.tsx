import React, { useState } from "react";
import usestore from "../store";

function Post() {
  const [post, setPost] = useState("");
  const setTweets = usestore((state: any) => state.setTweets);
  const name = usestore((state: any) => state.name);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:5500/api/tweets", {
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
    } catch (e) {
      alert("failed to post, try again!");
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
          className="w-[80%]  outline-none bg-[#28353e] rounded-sm p-2"
          placeholder="search"
        />
        <button className="absolute bottom-2 right-6">POST</button>
      </form>
    </div>
  );
}

export default Post;
