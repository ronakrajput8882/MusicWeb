// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

import Albums from "./pages/Albums";
import Songs from "./pages/Songs";
import AddAlbum from "./pages/addAlbum";
import AddSong from "./pages/addSong";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar setPage={setPage} page={page} />

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
       
        {page === "albums" && <Albums />}
        {page === "songs" && <Songs />}
        {page === "addAlbum" && <AddAlbum />}
        {page === "addSong" && <AddSong />}
      </div>
    </div>
  );
}

export default App;
