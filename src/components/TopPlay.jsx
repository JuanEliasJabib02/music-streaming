import React, { useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import PlayPause from './PlayPause';
import {useGetTopChartsQuery} from "../redux/services/SpootifyScrapping"


const TopChartCard = () => {
  return <h1> Card</h1>
}

const TopPlay = ({}) => {

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const divRef = useRef(null)
    
  const { data, isFetching} = useGetTopChartsQuery();
  
  const splitData = data?.tracks
  const topPlays = []
  
  if (splitData) {
    for (let i = 0;  i <= 4; i++){
      topPlays.push(splitData[i])
    }
  } 
 


  useEffect(() => {
    divRef.current.scrollIntoView({behavior:"smooth"})
  })

  
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, tracks, i }))
    dispatch(playPause(true))
  }

  return (
    <div ref={divRef} className='xl:ml-6 ml-0 xl:mb-6 flex-1
    xl:max-w-[500px] max-w-full flex-col'>
      <div className='w-full flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
          <h2>Top Charts</h2>
          <Link to="/top-charts">
            <p className='text-gray-300 text-base cursor-pointer'>see more</p>
          </Link>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
          {
            topPlays?.map((song, i) => {
             < TopChartCard />
           })
          }
        </div>
      </div>
    </div>
  )
}

export default TopPlay