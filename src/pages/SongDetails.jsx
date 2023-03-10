import React from 'react'
import {  useLocation, useParams } from 'react-router-dom'
import { DetailsHeader } from '../components'


import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const SongDetails = () => {

  const { songid } = useParams();

  const location = useLocation()

  const { song } = location.state
  const [songLyrics, setSongLyrics] = useState()

  useEffect(() => {
    const config = {
      headers:{
        "X-RapidAPI-Key": "66978d38aamsh2ad17523d253acep1e954bjsnab8d64fc75f1",
        "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com"
      }
    }
    const URL = `https://spotify-scraper.p.rapidapi.com/v1/track/lyrics?trackId=${songid}`
    axios.get(URL, config)
      .then(res => setSongLyrics(res.data)) 
      .catch(err => console.log(err))
  }, [songid])


  


  

  return (
    <div className='flex flex-col'>
      < DetailsHeader song={song} /> 
  
      <div className='mb-10 mt-5'>
        <h2 className='text-white text-3xl font-bold '>
          Lyrics:
        </h2>

        <div className='mt-5 '>
          <p className='whitespace-pre-line text-gray-300 text-base my-1'>
            {songLyrics}
          </p>
        </div>
      </div>

    </div>
  )
}

export default SongDetails