import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import Discography from '../components/Discography'
import { DetailsHeader } from '../components'
import DetailsArtistHeader from '../components/DetailsArtistHeader'


const ArtistDetails = () => {

  const location = useLocation()
  
  const { artist } = location.state

  const artistId = artist.id

  const [artistData, setArtistData] = useState()

  useEffect(() => {
    setTimeout(() => {
      const config = {
        headers:{
          "X-RapidAPI-Key": "66978d38aamsh2ad17523d253acep1e954bjsnab8d64fc75f1",
          "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com"
        },
        
      }
      const URL = `https://spotify-scraper.p.rapidapi.com/v1/artist/overview?artistId=${artistId}`
      axios.get(URL, config)
        .then(res => setArtistData(res.data)) 
        .catch(err => console.log(err))
    },500)
  }, [artistId])
  

  const discography = artistData?.discography.singles.items

  console.log(discography)


  return (
    <div className="flex flex-col">
      < DetailsArtistHeader
        artistData={artistData}
      />

      <div className=' flex flex-wrap gap-5 mt-5'>
      {
        discography?.map((song) => ( 
          < Discography  song={song} key={song.id} />
        ))
        }
      </div>


  </div>
  )
}

export default ArtistDetails