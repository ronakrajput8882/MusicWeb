import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

function Player() {
  const {
    seekBg,
    seekBar,
    play,
    pause,
    playStatus,
    track,
    time,
    next,
    previous,
    seekSong,
    volume,
    setVolume,
    muted,
    toggleMute,
  } = useContext(PlayerContext);
  return track ? (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            src={assets.shuffle_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
          <img
            onClick={previous}
            src={assets.prev_icon}
            alt=""
            className="w-4 cursor-pointer"
          />

          {playStatus ? (
            <img
              onClick={pause}
              src={assets.pause_icon}
              alt=""
              className="w-4 cursor-pointer"
            />
          ) : (
            <img
              onClick={play}
              src={assets.play_icon}
              alt=""
              className="w-4 cursor-pointer"
            />
          )}

          <img
            onClick={next}
            src={assets.next_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
          <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75 ">
        {/* Mute / Unmute button */}
        <button
          onClick={toggleMute}
          className="p-2 rounded-full hover:bg-[#ffffff26] hover:text-white transition text-white"
        >
          {muted || volume === 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5v14l10-7L9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-4 4m0-4l4 4"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5L6 9H2v6h4l5 4V5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
              />
            </svg>
          )}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={muted ? 0 : volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-28 accent-[#1db954]"
        />
      </div>
    </div>
  ) : null;
}

export default Player;
