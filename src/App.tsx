import { useEffect } from "react";
import Activity from "./components/activity";
import Navbar from "./components/navbar";
import Post from "./components/post";
import { useNavigate } from "react-router-dom";
import usestore from "./store";

function App() {
  const name = usestore((state: any) => state.name);

  const navigate = useNavigate();
  const user: any = localStorage.getItem("user");
  console.log(user);
  if (user == null) {
    navigate("/login");
  }
  return (
    <div className="relative min-h-screen w-full text-white flex flex-col items-center bg-[#1b202d] px-5 sm:px-20">
      <Navbar />
      <div className="flex mt-20  flex-col justify-center items-center  w-full">
        <Post />
        <Activity />
      </div>
    </div>
  );
}

export default App;
