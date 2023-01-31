import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DetailsHeader } from '../components'



import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const SongDetails = () => {

  const { songid } = useParams();
  const dispatch = useDispatch();


  const [songLyrics, setSongLyrics] = useState()
  
  useEffect(() => {
    const config = {
      headers:{
        "X-RapidAPI-Key": "e551743d2dmshdfa4b326d4ec95cp10667ejsn489eed3c6f23",
        "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com"
      }
    }
    const URL = `https://spotify-scraper.p.rapidapi.com/v1/track/lyrics?trackId=${songid}`
    axios.get(URL, config)
      .then(res => setSongLyrics(res.data)) 
      .catch(err => console.log(err))
  }, [songid])


  


  console.log(songLyrics)

  return (
    <div className='flex flex-col'>
      {/* < DetailsHeader songid={songid}/> */}

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