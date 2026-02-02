import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";




const addSong = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const album = req.body.album;
    const audioFile = req.files.audio[0];  //save the audio in file array
    const imageFile = req.files.image[0];
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" })
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
    //save the img and audio in cloudinary and it gives path...(secure_path)
    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;
    //3:20 sec


    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration
    }

    const song = songModel(songData);
    await song.save();
    res.json({ success: "true", message: "Song Added" })
  }
  catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }
};

//fetch all songs from the db
const listSong = async (req, res) => {
 try{
  const allSongs = await songModel.find({});
  res.json({success:true , songs:allSongs })
 }catch(error){
    console.log("Error ",error);
    res.status(500).json({error : error.message || "something went wrong"})
 }
}


//delete 
const removeSong = async(req,res)=>{
  try{
    await songModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"song Removed"})

  }catch(error){
    console.log("Error",error);
    res.status(500).json({error :error.message|| "something went wrong!!"})
  }
}

export { addSong, listSong,removeSong }