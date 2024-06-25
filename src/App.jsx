import { useContext } from "react";
import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {

  const {audioRef,track} = useContext(PlayerContext);
  return (
    <div className="h-screen bg-gradient-to-r from-[#5356FF] to-[#8360c3]">
      <div className="h-[90%] flex">
        <Display />
        <Sidebar />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
