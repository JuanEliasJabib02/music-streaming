

import { FaPauseCircle,FaPlayCircle} from "react-icons/fa"
import React from 'react'

const PlayPause = (
{ handlePauseClick,
  handlePlayClick,
  isPlaying,
  activeSong,
    songData
}
) => (
  isPlaying && activeSong?.name === songData.name ?
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePauseClick}
    />
    : (
      <FaPlayCircle
       size={35}
       className="text-gray-300"
       onClick={handlePlayClick} 
      />
    )
)

export default PlayPause

