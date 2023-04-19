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
    <div className="min-h-screen w-full text-white flex flex-col items-center">
      <Navbar />
      <div className="w-full mt-10">
        <div className="flex flex-col justify-center items-center mx-3 ">
          <Post />
          <div className="w-full flex">
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
