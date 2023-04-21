import React from "react";
import usestore from "../store";
import { useNavigate } from "react-router-dom";

function Login() {
  const name = usestore((state: any) => state.name);
  const setName = usestore((state: any) => state.setName);
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name !== null && name !== "") {
      localStorage.setItem("user", name);
      navigate("/");
    }
  };

  return (
    <div className="loginBg  w-full backdrop:blur-sm h-screen bg-lockbg bg-no-repeat flex justify-center items-center overflow-hidden">
      <div className="w-[70%] rounded-xl sm:w-[60%] md:w-[40%] flex flex-col justify-center items-center">
        <div className=" relative blur-sm w-full h-[30vh] bg-lockbg text-white text-3xl ">
          <span className="absolute">Welcome</span>
        </div>
        <div className="bg-white h-[30vh] w-full ">
          <form
            action=""
            onSubmit={(e) => submit(e)}
            className="h-full flex flex-col justify-evenly items-center"
          >
            <div className="relative w-[80%] flex justify-center">
              <input
                type="text"
                required
                className="border-[2px] outline-none py-2 px-2 pr-6 rounded-lg w-full"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute right-0 top-[30%]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <button
              className="w-fit p-2 px-8 rounded-xl bg-violet-600 text-white"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
