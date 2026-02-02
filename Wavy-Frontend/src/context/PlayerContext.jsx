import { createContext , useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";
import axios from "axios"

export const PlayerContext = createContext();

const PlayerContextProvider = (props) =>{
   
   const audioRef = useRef();
   const seekBg = useRef();
   const seekBar = useRef();

   const [songsData , setSongsData] = useState([]);
   const [albumsData , setAlumbsData] = useState([]);

   const [ track , setTrack] = useState(songsData[0])
   const [playStatus , setPlayStatus] = useState(false)
   const [time , setTime ] = useState({
          
        currentTime :{
            second : 0,
            minute : 0
        },
        totalTime : {
            second: 0 ,
            minute: 0
        }
   })
   // volume: 0.0 → 1.0
const [volume, setVolume] = useState(
  parseFloat(localStorage.getItem("playerVolume") ?? "1")
);
const [muted, setMuted] = useState(false);


   const play = ()=>{
         audioRef.current.play();
         setPlayStatus(true)        
   }

   const pause = ()=>{
         audioRef.current.pause();
         setPlayStatus(false)
   }

   const playWithId = async (id) =>{
       await songsData.map((item)=>{
    if(id === item._id){
     setTrack(item)
    }
   })
   await audioRef.current.play();
   setPlayStatus(true)
   }

   const previous = async ()=>{

    songsData.map(async (item,index)=>{

      if (track._id === item._id && index > 0){
        await setTrack(songsData[index-1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    })
   }

   const next = async ()=>{
       songsData.map(async (item,index)=>{
      if (track._id === item._id && index < songsData.length){
        await setTrack(songsData[index+1]);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    })
   }

     const seekSong = async (e) =>{
         audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
     }

     const getSong = async()=>{
      try{
        const response = await axios.get("http://localhost:4000/api/song/list");
        setSongsData(response.data.songs)
          setTrack(response.data.songs[0])
        
      }catch(error){

      }
     }
     const getAlbums = async()=>{
      try{
        const response = await axios.get("http://localhost:4000/api/album/list");
        setAlumbsData(response.data.albums)
         
      }catch(error){

      }
     }


   useEffect(()=>{
         setTimeout(()=>{
            audioRef.current.ontimeupdate = () => {

               seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";

            setTime({
                currentTime:{
                    second : Math.floor(audioRef.current.currentTime % 60),
                    minute : Math.floor(audioRef.current.currentTime / 60)
                } , 
                totalTime: {
                     second : Math.floor(audioRef.current.duration % 60),
                    minute : Math.floor(audioRef.current.duration/ 60)
                }
            })
        }
         },1000)
   },[audioRef])

   useEffect(() => {
  if (!audioRef.current) return;
  audioRef.current.volume = volume;
  if (volume > 0 && muted) {
    setMuted(false); // auto-unmute if slider > 0
  }
  localStorage.setItem("playerVolume", String(volume));
}, [volume]);

useEffect(() => {
  if (!audioRef.current) return;
  audioRef.current.muted = muted;
}, [muted]);

const toggleMute = () => setMuted((m) => !m);


    
   
   const [token, setToken] = useState("");
   const url = "http://localhost:4000";



     useEffect(() => {
      getSong();
      getAlbums();
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);
   
    const contextValue = {
       audioRef,
       seekBar,
       seekBg,
       track,setTrack,
       playStatus,setPlayStatus,
       time , setTime,
       play,pause,
       playWithId,
       next,previous,
       seekSong,
       token,
       setToken,
       url,
       songsData,
       albumsData,
       volume, setVolume,
        muted, toggleMute,

       
    }
    return (
        <PlayerContext.Provider value={contextValue}>
        {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;