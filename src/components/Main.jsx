import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'
const Main = () => {
  const [movies, setMovies] = useState()
  const movie = movies?.[Math.floor(Math.random() * movies.length)]
  useEffect(()=> {
    axios.get(requests.requestPopular)
    .then((response)=> {
      setMovies(response.data.results)
    })
  },[])
  const truncateString = (str,num) => {
    if(str?.length>num) {
      return str.slice(0,num) + '...'
    }else return str
  }
  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
      <div className='absolute h-[80px] w-full bg-gradient-to-b from-black'></div>
      <div className='absolute h-[600px] w-full bg-gradient-to-t from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
      </div>
      <div className='absolute w-full top-[25%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4'>{movie?.title}</h1>
        <button className='border border-gray-300 py-2 px-5 bg-gray-300 text-black'>Play</button>
        <button className='border border-gray-300 py-2 px-5 ml-4 text-white'>Watch Later</button>
        <p className='text-gray-300 text-sm mt-4'>Release: {movie?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview,150)}</p>
      </div>
    </div>
  )
}

export default Main