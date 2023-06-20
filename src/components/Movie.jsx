import React from 'react';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movie = ({ movie, id, rowID }) => {
    const [like, setLike] = useState(false);
    const [hoverItem, setHoverItem] = useState(null);
    return (
        <div
            key={movie.id}
            className={`relative cursor-pointer inline-block p-3 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] ${
                hoverItem === id ? 'opacity-100' : 'opacity-80'
            } ${rowID === '1' ? 'h-[400px] ' : ''}`}
            onMouseEnter={() => setHoverItem(id)}
            onMouseLeave={() => setHoverItem(null)}
        >
            <img
                className={`w-full h-[80%] block rounded-md hover:opacity-100 hover:scale-110 duration-300 object-cover mb-8 `}
                src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                alt={movie?.title}
            />
            <div className="absolute top-0 left-0 w-full h-inherit hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p>
                    {like ? (
                        <FaHeart
                            className="absolute top-4 right-4 text-red-500"
                            onClick={() => setLike((prev) => !prev)}
                        />
                    ) : (
                        <FaRegHeart
                            className="absolute top-4 right-4 text-gray-300"
                            onClick={() => setLike((prev) => !prev)}
                        />
                    )}
                </p>
            </div>
            <div className=" h-[50px] w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] flex justify-center text-center">
                <p className="text-white break-words whitespace-pre-wrap font-bold text-sm md:text-sm mt-2 ">
                    {movie?.title}
                </p>
            </div>
        </div>
    );
};
export default Movie;
