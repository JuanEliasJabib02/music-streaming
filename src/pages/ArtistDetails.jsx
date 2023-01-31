import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"


const ArtistDetails = () => {

  const location = useLocation()
  
  const { artist } = location.state

  const artistId = artist.id
  
  console.log(artistId)

  const [artistData, setArtistData] = useState()

  useEffect(() => {
    setTimeout(() => {

      const config = {
        headers:{
          "X-RapidAPI-Key": "f8d010d7bamsh448713cb42b04d3p1d0a08jsn65d20e8ca833",
          "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com"
        },
        
      }
      const URL = `https://spotify-scraper.p.rapidapi.com/v1/artist/overview?artistId=${artistId}`
      axios.get(URL, config)
        .then(res => setArtistData(res.data)) 
        .catch(err => console.log(err))
    },1000)
  })


  const discography = artistData.discography.singles.items




  return (
    <div>
      <h1>AQUI TOY</h1>
    </div>
  )
}

export default ArtistDetails