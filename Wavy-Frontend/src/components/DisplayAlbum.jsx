import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

function DisplayAlbum() {
  const { id } = useParams(); // get album id from URL
  const [albumData, setAlbumData] = useState(null);
  const { playWithId, albumsData, songsData } = useContext(PlayerContext);

  useEffect(() => {
    if (albumsData && albumsData.length > 0) {
      const foundAlbum = albumsData.find((item) => item._id === id);
      setAlbumData(foundAlbum || null);
    }
  }, [id, albumsData]);
  useEffect(() => {
  // console.log("Album ID from URL:", id);
  // console.log("Albums from context:", albumsData);

  if (albumsData && albumsData.length > 0) {
    const foundAlbum = albumsData.find((item) => item._id === id);
    // console.log("Found Album:", foundAlbum);
    setAlbumData(foundAlbum || null);
  }
}, [id, albumsData]);


  if (!albumData) {
    return (
      <div className="text-white p-10">
        <Navbar />
        <p>Loading album...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <img
            src={assets.wavy_logo}
            className="inline-block mb-2"
            style={{ width: "55px" }}
            alt=""
          />
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            • 1,23,323 likes • <b>50 songs,</b>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr />

      {songsData &&
        songsData
          .filter((item) => item.album === albumData.name) // ✅ using albumData
          .map((item, index) => (
            <div
              key={item.id}
              onClick={() => playWithId(item._id)}
              className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
            >
              <p className="text-white">
                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                <img className="inline w-10 mr-5" src={item.image} alt="" />
                {item.name}
              </p>
              <p className="text-[15px]">{albumData.name}</p>
              <p className="text-[15px] hidden sm:block">5 days ago</p>
              <p className="text-[15px] text-center">{item.duration}</p>
            </div>
          ))}
    </>
  );
}

export default DisplayAlbum;
