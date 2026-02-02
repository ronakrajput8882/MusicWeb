import mongoose from "mongoose";
const URI=process.env.MONGO_URI;

const connectDB =async()=>{
    mongoose.connection.on("connected",()=>{
        console.log("DB is connected")
    })
   await  mongoose.connect(URI);
}

export default connectDB;