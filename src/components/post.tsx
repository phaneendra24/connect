import { FormEvent, useState } from "react";
import { socket } from "../socket";
import usestore from "../store";

export default function Post() {
  const [post, setPost] = useState("");
  const [click, setclick] = useState(false);

  const setTweets = usestore((state: any) => state.setTweets);
  const Tweets = usestore((state: any) => state.tweets);

  const name = usestore((state: any) => state.name);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("stared");
    console.log(post);
    console.log("name", name);

    if (name === "" || post === "") {
      alert("enter the name and tweet first");
    } else {
      try {
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
        console.log(resp);

        const data = await resp.json();
        setTweets(data);
        setPost("");
        socket.emit("tweets", data);
      } catch (err) {
        console.log(err);

        alert("failed to post, try again!");
      }
    }
  };
  return (
    <form
      className="fixed bottom-0 pt-2 pb-10 bg-[#1b202d] w-full  flex justify-center"
      onSubmit={(e) => submit(e)}
    >
      <input
        value={post}
        onChange={(e) => setPost(e.target.value)}
        className="bg-[#3d4354] border-[1px] w-[88%] shadow-md h-24 resize-none  placeholder:text-lg placeholder:   outline-none  rounded-2xl p-2"
        placeholder="Make a tweet"
      />

      <button
        className={`${click ? "send_action" : ""}  absolute right-24 top-6`}
        type="submit"
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
    </form>
  );
}
