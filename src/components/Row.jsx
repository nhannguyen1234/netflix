import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie'
const Row = ({title, fetchURL, rowID}) => {
  const [movies, setMovies] = useState([])
  useEffect(()=> {
    axios.get(fetchURL)
    .then((response)=> {
        setMovies(response.data.results)
    })
  },[fetchURL])
  const sliderLeft = () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const sliderRight = () => {
    var slider = document.getElementById('slider'+ rowID)
    slider.scrollLeft = slider.scrollLeft +500
  }
    return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>
      {title}
    </h2>
    <div className='relative flex items-center group'>
      <MdChevronLeft 
      onClick={sliderLeft}
      className='bg-white top-[54px] rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer left-0 hidden group-hover:block' 
      size={36}/>
        <div id={'slider'+ rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {movies.map((movie,id)=> (
            <Movie  key={id} movie={movie}/>
        ))}
        </div>
      <MdChevronRight 
      onClick={sliderRight}
      className='bg-white top-[54px] rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer right-0 hidden group-hover:block' 
      size={36}/>  
    </div>
    </>
  )
}

export default Row