import React from 'react';
import { Loader, Error, SongCard } from '../components';
import { genres } from "../assets/constants";
import {useGetTopChartsQuery} from "../redux/services/SpootifyScrapping.js"
import { useDispatch, useSelector } from 'react-redux';


const Discover = () => {

  const dispatch = useDispatch()

  const { activeSong, isPlaying } = useSelector(state => state.player)
  


  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return < Loader title="loadingsongs" />
  
  if (error) return < Error />;
  
  const splitData = data?.tracks

  const tracks = []

  for (let i = 0;  i <= 30; i++){
    tracks.push(splitData[i])
  }



  const genreTitle ="Trap"
  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center
      sm:flex-row flex-col mt-4 mb-10'>
        <h2 className='font-bold text-3xl text-white text-left'>
          Discover { genreTitle}</h2>
        <select
          onChange={() => { }}
          value=""
          className='bg-black text-gray-300 p-3 text-sm rounded-lg
          outline-none sm:mt-0 mt-5'
        >
        {
          genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title }</option>)
        }
        </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {
          tracks?.map((song,i) => (
            < SongCard
              activeSong={activeSong}
              isPlaying={isPlaying}
              song={song}
              key={song.id}
              i={i}
              tracks={tracks}
            />
          ))
        }

      </div>
    </div>
  );
};

export default Discover;
