import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DetailsHeader,Error,Loader, RelatedSongs } from '../components'
import { useGetSongLyricQuery } from '../redux/services/SpootifyScrapping'

import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const SongDetails = ({songDataSend}) => {

  const { songid } = useParams();
  const dispatch = useDispatch();

  const [songLyrics, setSongLyrics] = useState()

  const [songMetaData, setSongMetaData] = useState()

  console.log(songDataSend)

  useEffect(() => {
    const config = {
      headers:{
        "X-RapidAPI-Key": "cc62e7ecc1mshc1e4809f5581591p1029c9jsn7b9bb78166de",
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

      <div className='mb-10'>
        <h2 className='text-white text-3xl font-bold'>
          Lyrics:
        </h2>

        <div className='mt-5'>

        </div>
      </div>

    </div>
  )
}

export default SongDetails