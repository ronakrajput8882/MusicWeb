import React, { useContext } from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { PlayerContext } from '../context/PlayerContext'
import { Link } from 'react-router-dom'

function DisplayHome({ setShowLogin }) {
  const { songsData, albumsData } = useContext(PlayerContext)

  return (
    <>
      <Navbar setShowLogin={setShowLogin} />

      {/* Featured Charts Section */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item) => (
            <Link to={`/album/${item._id}`} key={item._id}>
              <AlbumItem
                name={item.name}
                desc={item.desc}
                id={item._id} 
                image={item.image}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Today's biggest hits Section */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item) => (
            <SongItem
              key={item._id || item.id} 
              name={item.name}
              desc={item.desc}
              id={item._id || item.id} 
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
