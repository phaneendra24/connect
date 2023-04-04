import React from "react";
import usestore from "../store";

export default function Profile() {
  const name = usestore((state: any) => state.name);
  const setName = usestore((state: any) => state.setName);
  return (
    <div className=" w-[50vh] bg-[#1b2730] flex flex-col h-fit p-10 mb-10 rounded-lg">
      <span className="text-ellipsis font-bold text-2xl ">Username:</span>
      <header className="text-center text-xl text-blue-600">{name}</header>
      <div className="w-full flex justify-center">
        <form
          className="flex flex-col justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            value={name}
            className="bg-[#05141c] py-2  mt-10 outline-none"
            placeholder="enter your username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            type="submit"
            className="min-w-fit min-h-fit bg-[#05141c] mt-10"
          >
            set
          </button>
        </form>
      </div>
    </div>
  );
}
