// src/components/Sidebar.jsx
import React from "react";
import { Music, Disc, LayoutDashboard, Plus } from "lucide-react";


const Sidebar = ({ setPage, page }) => {
const menu = [
 
  { id: "albums", name: "Albums", icon: <Disc /> },
  { id: "songs", name: "Songs", icon: <Music /> },
  { id: "addAlbum", name: "Add Album", icon: <Plus /> },  // ✅ NEW
  { id: "addSong", name: "Add Song", icon: <Plus /> },    // ✅ NEW
];


  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold p-4 border-b border-gray-700">
        🎵 Admin Panel
      </h1>
      <nav className="flex-1">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`flex items-center w-full px-4 py-3 text-left hover:bg-gray-800 ${
              page === item.id ? "bg-gray-800" : ""
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
