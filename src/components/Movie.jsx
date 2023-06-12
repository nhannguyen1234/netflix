import React from 'react'
import { useState } from 'react'
import { FaHeart, FaRegHeart}  from 'react-icons/fa'
const Movie = ({movie}) => {
    const [like, setLike] = useState(false)
  return (
    <div className='relative cursor-pointer inline-block p-2 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]'>
                <img className='w-full h-auto block rounded-md' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute top-0 left-0 w-full h-inherit hover:bg-black/80 opacity-0 hover:opacity-100'>
            <p>
                {like ? <FaHeart className='absolute top-4 right-4 text-red-500' onClick={()=> setLike(prev=>!prev)}/> : <FaRegHeart className='absolute top-4 right-4 text-gray-300' onClick={()=> setLike(prev=>!prev)}/>}
            </p>
            </div>
            <div className=' h-[50px] w-[224px] flex justify-center items-center text-center'>
            <p className='text-white break-words whitespace-pre-wrap font-bold text-sm md:text-sm mt-2 ' >{movie?.title}</p>
            </div>
            </div>
  )
}
export default Movie