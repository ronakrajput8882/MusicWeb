import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import LoginPopup from "./components/loginPopUp";

function App() {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className="h-screen bg-black">
        {songsData.lenght !== 0 ? (
          <>
            <div className="h-[90%] flex">
              <Sidebar />
              <Display setShowLogin={setShowLogin} />
            </div>
            <Player />
          </>
        ) : null}

      {track && (
  <audio ref={audioRef} src={track.file} preload="auto"></audio>
)}

      </div>
    </>
  );
}

export default App;
