// src/pages/Albums.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

   const fetchAlbums = async ()=>{
     try{
        const response = await axios.get("http://localhost:4000/api/album/list");

        if (response.data.success){
            setAlbums(response.data.albums)
        }
       }
        catch(error){
             console.log("fetch album problem")  
        }
     
}


  const deleteAlbum = async (id) => {
    try {
  const response= await axios.post(`http://localhost:4000/api/album/remove`,{id});
   if(response.data.success){
         console.log("delete album")    
       await fetchAlbums();
   }
}
   catch(error){
              console.log("error in deleting")
   }
  };
    
  useEffect(() => {
  
      fetchAlbums();
   
  }, []);


  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Albums</h2>
      <table className="w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3">Image</th>
            <th className="p-3">Title</th>
            <th className="p-3">Description</th>
           
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((item , index) => (
            <tr key={index} className="border-b">
              <td className="p-3"><img className="w-20"  src={item.image} alt="" /></td>
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.desc}</td>
             
            
              <td className="p-3">
                <button
                  onClick={() => deleteAlbum(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
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

export default Albums;
