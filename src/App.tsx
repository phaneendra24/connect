import Activity from "./components/activity";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Post from "./components/post";

function App() {
  return (
    <div className="App bg-[#05141c] min-h-screen w-full text-white">
      <Navbar />
      <div className="mx-10 mt-10  gap-5 sm:flex">
        <Profile />
        <div className="w-full flex flex-col">
          <Post />
          <Activity />
        </div>
      </div>
    </div>
  );
}

export default App;
