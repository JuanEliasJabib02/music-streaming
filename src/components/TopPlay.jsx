import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import PlayPause from './PlayPause';
import {useGetTopArtistQuery, useGetTopChartsQuery} from "../redux/services/SpootifyScrapping"
import { setActiveSong } from '../redux/features/playerSlice';


const TopChartCard = ({ song, i }) => {
  
  
  return (
    <div className='w-full flex flex-row items-center hover:bg-[#4c426e]
    py-2 p-4 rounded cursor-pointer mb-2 '>
      {song.name}
    </div>
  )
}



const TopPlay = () => {

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const divRef = useRef(null)
    
  const { data, isFetching } = useGetTopChartsQuery();

  
  const splitData = data?.tracks
  const topPlays = []
  
  if (splitData) {
    for (let i = 0;  i <= 4; i++){
      topPlays.push(splitData[i])
    }
  } 

  const topArtistsData = useGetTopArtistQuery()
  const topArtist = topArtistsData.data?.artists.slice(0, 5)
  console.log(topArtist)


  useEffect(() => {
    divRef.current.scrollIntoView({behavior:"smooth"})
  })

  
  const handlePauseClick = () => {
    dispatch(PlayPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, tracks, i }))
    dispatch(PlayPause(true))
  }

  return (
    <div ref={divRef} className='xl:ml-6 ml-0 xl:mb-6 flex-1
    xl:max-w-[500px] max-w-full flex-col'>
      <div className='w-full flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
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
        <div className='w-full flex flex-col mt-8'>
          <div className='flex flex-row justify-between items-center'>
            <h2 className='text-white font-bold text-2xl'>Top Artists</h2>
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
          className='"mt-4'
        >
          {
            topArtist?.map((artist, i) => (
              < SwiperSlide
                key={artist?.id}
                style={{ width: "25%", height: "auto" }}
                className='shadow-lg rounded-full animate-slideright '
                               
              >
                {/* Put link to each id */}
                <Link to={`/artist/`}>
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