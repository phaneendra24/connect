import Activity from "./components/activity";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Post from "./components/post";
import Shortcuts from "./components/shortcuts";

function App() {
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
