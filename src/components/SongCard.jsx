import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import PlayPause from "./PlayPause"
import {playPause, setActiveSong} from "../redux/features/playerSlice"
const SongCard = ({ song, activeSong, isPlaying, i, tracks }) => {
  
  const dispatch = useDispatch()

  const artistsSong = song.artists?.map(artist => {
    const artistName = artist.name

    return artistName
  })

  const songData = {
    img: song.album.cover[0].url,
    name: song.name,
    artists: artistsSong
  }



  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, tracks, i }))
    dispatch(playPause(true))
  }

  
 
  
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black 
        bg-opacity-50 group-hover:flex ${activeSong?.title === songData.name ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            handlePauseClick={ handlePauseClick}
            handlePlayClick={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
            songData={songData}
          />
        </div>
        <img src={songData.img} alt="song_img" />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`songs/${song.id}`}>
            {songData.name}
          </Link>
        </p>
        <p>
          {/* Put link to the artist dynamic later */}
          <Link>
            <p className='text-sm truncate text-gray-300 mt-1'>
              {
                songData.artists[0]
              }
              
                {
                  
                songData.artists[1]
                  ? <span> & {songData.artists[1]}</span>
                  : ""
                }
              
            </p>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard