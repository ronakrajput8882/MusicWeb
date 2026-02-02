import {v2 as cloudinary} from "cloudinary";
import albumModel from "../models/albumModel.js"
import songModel from "../models/songModel.js";

const addAlbum = async (req, res) =>{
 try{
    const name = req.body.name;
    const desc =req.body.desc;
    const bgColor= req.body.bgColor;
    const imagefile = req.file ;
    const imageUpload = await cloudinary.uploader.upload(imagefile.path,{resource_type:"image"})
    
    const albumData= {
       name,
       desc,
       bgColor,
       image:imageUpload.secure_url
    }

    const album = albumModel(albumData);
    await album.save();
    res.json({ success: "true", message: "album Added" })

} catch(error){
    console.log("error",error);
    res.status(500).json({error:error.message || "something went wrong" })
}
}

const listAlbum = async (req ,res)=>{
    try{
       const allAlbums = await albumModel.find({});
       res.json({success:true ,albums: allAlbums })
    }catch(error){
     console.log("error",error);
    res.status(500).json({error:error.message || "something went wrong" })
    }
}
const removeAlbum = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("ID received:", id);

    // check if album exists first
    const album = await albumModel.findById(id);
    if (!album) {
      return res.status(404).json({ success: false, message: "Album not found" });
    }

    await albumModel.findByIdAndDelete(id);

    res.json({ success: true, message: "Album removed" });
  } catch (error) {
    console.error("Error in removeAlbum:", error);
    res.status(500).json({ success: false, error: error.message || "Something went wrong" });
  }
};


export  {addAlbum , listAlbum , removeAlbum}