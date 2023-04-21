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
    <div className="loginBg  w-full  h-screen bg-lockbg bg-no-repeat flex justify-center items-center overflow-hidden">
      <div className=" w-[80%] rounded-xl sm:w-[60%] md:w-[40%] flex flex-col justify-center items-center">
        <div className=" relative w-full h-[30vh] bg-lockbg text-white text-3xl sm:text-5xl ">
          <span className="absolute left-[30%] top-[50%] font-semibold ">
            Welcome
          </span>
        </div>
        <div className="bg-white h-[30vh] w-full ">
          <form
            action=""
            onSubmit={(e) => submit(e)}
            className="h-full flex flex-col justify-evenly items-center"
          >
            <div className="relative w-[80%] flex flex-col justify-evenly items-start ">
              <span className="my-2 text-sm">username</span>
              <input
                type="text"
                required
                className="lg-input  outline-none py-2 pl-3 pr-8  w-full focus:border-[2px] focus:border-purple-500"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                className="w-6 h-6 absolute right-2 top-[53%]"
              >
                <path
                  stroke-linecap="round"
                  fill="#d89aff"
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
