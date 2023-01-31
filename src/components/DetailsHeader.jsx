import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const DetailsHeader = () => {

  const songData = {
    value: "value",
    value2:"value"
  }
  
  return (
    <div className='relative w-full flex flex-col'>
      <div className='w-full bg-grandient-to-1 sm:4-48 h-28 bg-black ' />
      <div className='absolute insert-0 flex items-center'>
        <img
          src={songData?.img} alt="img-cover"
          className='sm:w-39 w-39 sm:h-38 h-28 rounded-full
          object cover border-2 shadow-xl shadow-black' />
        <div className='ml-5'>
          <p className='font-bold sm:text-3xl text-xl text-white'>
            {songData?.name}
          </p>
          <p className='text-base text-gray-300 mt-2'>
          {
                songData?.artists[0]
              }
              
                {
                  
                  songData?.artists[1]
                  ? <span> & {songData?.artists[1]}</span>
                  : ""
            }
          </p> 
      </div>
      </div>

    </div>
  )
}

export default DetailsHeader