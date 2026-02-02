import multer from "multer";
import { addSong ,listSong, removeSong } from "../Controllers/songController.js";
import express from "express"
import upload from "../Middlewares/multer.js";
const songRouter =express.Router();

songRouter.post('/add',upload.fields([{name:'image',maxCount:1},{name:"audio",maxCount:1}])

,(req, res, next) => {
  console.log("FILES:", req.files);
  console.log("BODY:", req.body);
  next();
},addSong);
songRouter.get("/list",listSong);
songRouter.post("/remove",removeSong)

export default songRouter;
