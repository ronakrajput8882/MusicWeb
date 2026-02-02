import { useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";

const AddAlbum = () => {

  const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
    image: null,
    name: "",
    desc: "",
   
  });

  // for text/color inputs
   const handleChange = (e)=>{
    console.log("pmr")
const {name , value} = e.target;
setFormData((prev)=> ({ ...prev , [name]:value}))
   }

  const handleFileChange = (e) => {
    setFormData((prev)=>({...prev ,image : e.target.files[0]}))
  };

  const onSubmitHandler =async (e)=>{
     setLoading(true)
      e.preventDefault();
    try{
        const data = new FormData();
        data.append("name",formData.name)
        data.append("desc",formData.desc)
       
        data.append("image",formData.image)
        
        const response = await axios.post("http://localhost:4000/api/album/add", data);

        if(response.data.success){
            alert("Album added");
            setFormData({
                image:null,
                name:"",
                desc:"",
               
            })
           
        } else{
                alert("failed to add album")
            }
    }catch(error){
        console.error("Error adding album:" ,error)
    }
     setLoading(false);
  }

  
   

  return loading ? 
  <div className="grid place-items-center min-h-[80vh]">
    <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>

  </div>:(
       <form onSubmit={onSubmitHandler} action="" className="flex flex-col items-start gap-8 text-gray-600">
        <div className="flex flex-col gap-4">
            <p>Upload Image</p>
            <input onChange={handleFileChange} type="file" id="image" name="image" accept="image/*" hidden />
            <label htmlFor="image">
                <img className="w-24 cursor-pointer" src={formData.image ? URL.createObjectURL(formData.image) :assets.upload_area} value={formData.image} alt="" />
            </label>
        </div>

        <div className="flex flex-col gap-2.5">
            <p>Album name</p>
            <input onChange={handleChange} value={formData.name} type="text" name="name" className="bg-transparent outline-blue-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]" />
        </div>

        <div className="flex flex-col gap-2.5">
            <p>Album Description</p>
            <input onChange={handleChange} value={formData.desc} type="text" name="desc" className="bg-transparent outline-blue-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]" />
        </div>
     
              <button type="submit" className="text-base bg-black text-white py-2.5 px-14 cursor-pointer">ADD</button>

       </form>
  );
};

export default AddAlbum;
