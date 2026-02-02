import React, { useContext } from "react";
import { assets } from "../assets/assets";
import wavy_logo from "../assets/wavy_logo.png";
import { useNavigate } from "react-router-dom";
import LoginPopup from "./loginPopUp";
import { PlayerContext } from "../context/PlayerContext";

function Navbar({ setShowLogin }) {
  const navigate = useNavigate();
  const { url, setToken, token } = useContext(PlayerContext);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <>
      <div className="w-full flex justify-between items-center sticky top-0 z-10 bg-[#121212] font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-center"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-center"
            src={assets.arrow_right}
            alt=""
          />
        </div>
         <img
            src={wavy_logo}
            className="inline-block"
            style={{ width: "55px" }}
            alt=""
          />
        <div className="flex items-center gap-4">
         
        
          {!token ? (
            <button onClick={() => setShowLogin(true)}>
              {" "}
              <a href="#home">sign in</a>
            </button>
          ) : (
            <div onClick={logout}  class="relative group inline-block cursor-pointer">
              <button class="p-2 rounded-full hover:bg-[#1db954] hover:text-black transition text-white">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7"
                  />
                </svg>
              </button>

              <span class="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                Logout
              </span>
          </div>
          )}
       </div>
      </div>
      <div className="flex items-center gap-2 mt-4 cursor-pointer">
        <p className="bg-white text-black px-4 py-1 rounded-2xl ">All</p>
        <p className="bg-black px-4 py-1 rounded-2xl">Music</p>
      </div>
    </>
  );
}

export default Navbar;
