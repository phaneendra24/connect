import React from "react";
import usestore from "../store";

function Login() {
  const name = usestore((state: any) => state.name);
  const setName = usestore((state: any) => state.setName);
  console.log(name);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name != "") {
      localStorage.setItem("user", name);
      window.location.href = "/";
    }
  };

  return (
    <div className="w-screen h-screen bg-purple-600 flex justify-center items-center">
      <div className="bg-white w-[40%]  rounded-lg">
        <form action="" onSubmit={(e) => submit(e)}>
          <input
            type="text"
            className="border-[2px] outline-none"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <button className="" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
