import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import {  useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useGetTopChartsQuery} from "../redux/services/SpootifyScrapping"
import axios from "axios"

const TopChartCard = ({ song, i}) => {

  const artistsSong = song.artists?.map(artist => {
    const artistName = artist?.name

    return artistName
  })



  const songData = {
    id: song?.id,
    img: song?.album.cover[0].url,
    name: song?.name,
    artists: artistsSong
  }



  
  return (
     <div  className=' w-full flex flex-row items-center hover:bg-[#4c426e]
    py-2 p-4 rounded cursor-pointer mb-2 '>
      <h3 className='font-bold text-base text-white mr-3'>{i + 1}.</h3>
      <div className='flex-1 flex flex-row justify-between items-center'>
        <img
          className='w-12 h-13 rounded-lg'
          src={songData.img} alt="cover-art"
        />
        <div className='flex-1 flex flex-col justify-center mx-3'>
          <Link to={`/songs/${songData.id}`} state={{song}}>
            <p className='text-l font-bold text-white'>
              {songData.name}
            </p>
          </Link>
          <Link to={`/artists/${songData.artists[0]}`} state={{artist:songData?.artists[0]}}>
            <p className='text-xs text-gray-300 mt-1'>
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
        </div>
      </div>
    </div>
  )
}



const TopPlay = ({setSongDataSend}) => {

  const dispatch = useDispatch();
  const divRef = useRef(null)
    
  const { data } = useGetTopChartsQuery();

  

  const splitData = data?.tracks
  const topPlays = []


  
  if (splitData) {
    for (let i = 0;  i <= 4; i++){
      topPlays.push(splitData[i])
    }


  } 
  
  const [topArtistsData, setTopArtistsData] = useState()

  
  useEffect(() => {
    setTimeout(() => {
      const config = {
        headers:{
          "X-RapidAPI-Key": "f8d010d7bamsh448713cb42b04d3p1d0a08jsn65d20e8ca833",
          "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com"
        }
      }
      const URL = `https://spotify-scraper.p.rapidapi.com/v1/chart/artists/top`
      axios.get(URL, config)
        .then(res => setTopArtistsData(res.data)) 
        .catch(err => console.log(err))
    }, 2000);
  },[])

  const topArtist = topArtistsData?.artists.slice(0, 5)



  useEffect(() => {
    divRef.current.scrollIntoView({behavior:"smooth"})
  })

  

  return (
    <div ref={divRef} className='xl:ml-6 ml-0 xl:mb-6 flex-1
    xl:max-w-[400px] max-w-full flex-col'>
      <div className='w-full flex flex-col '>
        <div  className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>Top Charts</h2>
          <Link to="/top-charts">
            <p className='text-gray-300 text-base cursor-pointer'>see more</p>
          </Link>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
        {
          topPlays?.map((song, i) => (
            < TopChartCard
              song={song}
              i={i}
              key={song.id}
            />
          ))   
        }
        </div>
        <div className='w-full flex flex-col mt-3'>
          <div className='flex flex-row justify-between items-center '>
            <h2 className='text-white font-bold text-2xl '>Top Artists</h2>
            <Link to="/top-charts">
              <p className='text-gray-300 text-base cursor-pointer'>see more</p>
            </Link>
          </div>
        </div>

          < Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className='"mt-4 mb-4'
        >
          {
            topArtist?.map((artist, i) => (
              < SwiperSlide
                key={artist?.id}
                style={{ width: "17%", height: "auto" }}
                className='shadow-lg rounded-full animate-slideright '
               
                               
              >
                {/* Put link to each id */}
                <Link to={`/artists/${artist.id}`} state={{ artist:artist}} >
                  <img
                    src={artist?.visuals.avatar[0].url}
                    alt="artist"
                    className='w-full h-full object-cover rounded-full'
                    
                  />
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default TopPlay