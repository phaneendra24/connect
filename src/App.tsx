import Activity from "./components/activity";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Post from "./components/post";

function App() {
  return (
    <div className="  min-h-screen w-full text-white flex flex-col items-center">
      <Navbar />
      <div className="mx-10 gap-5 w-full mt-20">
        <div className="w-full flex flex-col justify-center items-center">
          <Post />
          <Activity />
        </div>
      </div>
    </div>
  );
}

export default App;
