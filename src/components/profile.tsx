import React, { useEffect, useRef } from "react";
import usestore from "../store";
import { Link } from "react-router-dom";

export default function Profile() {
  const name = usestore((state: any) => state.name);
  const setName = usestore((state: any) => state.setName);
  const inputRef: any = useRef();
  if (name != "" && localStorage.getItem("user") != null) {
    localStorage.setItem("user", name);
  } else {
    setName(localStorage.getItem("user"));
  }
  return (
    <div className="w-[70%] sm:w-full sm:flex sm:justify-end sm:items-center sm:right-0 ">
      <span className="mr-2 font-semibold">Username:</span>
      <form
        className="flex justify-center items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex relative mr-1   w-[95%]">
          <input
            type="text"
            value={name}
            className="border-[2px] bg-[#f5f6f9] outline-none w-[100%] p-1 focus:underline focus:underline-offset-4 decoration-[#b695eb] pr-6 "
            placeholder="enter your username"
            onChange={(e) => {
              setName(e.target.value);
            }}
            ref={inputRef}
          />
          <Link to={"/login"}>
            <span
              className={`absolute right-0 top-2 ${
                name === ""
                  ? "hidden"
                  : "visible transition-all ease-in duration-1000"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </form>
    </div>
  );
}
