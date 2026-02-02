import React, { useContext, useEffect,useRef } from 'react'
import { Route,Routes,useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

function Display({setShowLogin}) {

  const {albumsData} = useContext(PlayerContext)
  const displayRef = useRef();
  const location = useLocation();//it gives the location of page
  const isAlbum = location.pathname.includes("album");//check we are in album page T?F
  const albumId = isAlbum ? location.pathname.split('/').pop(): "";//save the id from the url 
  const album = isAlbum ? albumsData.find((x) => x._id == albumId) : null;
const bgColor = album ? album.bgColour : "#121212";


useEffect(()=>{
  if(isAlbum){
   displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
  }
  else{
    displayRef.current.style.background = '#121212'
  }
})
  return (
    <div ref={displayRef} className='w-[100%] m-2 px-5 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
     {albumsData.length >0
     ?
      <Routes>
        <Route path='/' element={<DisplayHome setShowLogin={setShowLogin}/>}/>
        <Route path='/album/:id' element={<DisplayAlbum album={albumsData.find((x)=> (x._id == albumId))}/>}/>

      </Routes>
      : null
    }
    </div>
  )
}

export default Display
