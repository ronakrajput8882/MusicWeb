import express from "express"
import cors from "cors"
import "dotenv/config"
import songRouter from "./src/Routes/songRoute.js";
;
import connectDB from "./src/Config/mongodb.js";
import connectCloudinary from "./src/Config/cloudinary.js";
import albumRouter from "./src/Routes/albumRoute.js";
import userRouter from "./src/Routes/userRoute.js";
import bodyParser from "body-parser";



const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // optional
const PORT = process.env.PORT  || 4000 ;
connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());
app.use("/api/song",songRouter);
app.use("/api/album",albumRouter);
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})


app.listen(PORT, ()=>console.log( `app is ready on ${PORT}`))
