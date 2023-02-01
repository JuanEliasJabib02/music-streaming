import React from 'react'

const Discography = ({ song }) => {
  

  const songData = {
    img: song?.cover[0].url,
    name: song?.name,
    label: song?.label
  }


  console.log(song)
  return (
    <div>
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <img src={songData.img} alt="song_img" />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
            {songData.name}
          </p>
        <p className='font-semibold text-lg text-gray-300 truncate'>
            {songData.label}
        </p>
      </div>
      </div>
      </div>
   
  )
}

export default Discography