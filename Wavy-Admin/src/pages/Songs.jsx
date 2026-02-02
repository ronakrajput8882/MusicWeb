// src/pages/Songs.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Songs = () => {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async ()=>{
     try{
        const response = await axios.get("http://localhost:4000/api/song/list");

        if (response.data.success){
            setSongs(response.data.songs)
        }
       }
        catch(error){
             console.log("fetch song problem")  
        }
     
}

  const deleteSong = async (id) => {
    try {
  const response= await axios.post(`http://localhost:4000/api/song/remove`,{id});
   if(response.data.success){
         console.log("delete song")    
       await fetchSongs();
   }
}
   catch(error){
              console.log("error in deleting")
   }
  };
   
  useEffect(() => {
   fetchSongs();
  }, []);


  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Songs</h2>
      <table className="w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Album</th>
            <th className="p-3">Duration</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((item , index) => (
            <tr key={index} className="border-b">
              <td className="p-3 "><img className="w-20" src={item.image} alt="" /></td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.album}</td>
              <td className="p-3">{item.duration}</td>
              <td className="p-3">
                <button
                  onClick={() => deleteSong(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Songs;
