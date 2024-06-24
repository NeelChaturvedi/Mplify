import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-[#5356FF] to-[#8360c3]">
      <div className="h-[90%] flex">
        <Display />
        <Sidebar />
      </div>
      <Player />
    </div>
  );
};

export default App;
