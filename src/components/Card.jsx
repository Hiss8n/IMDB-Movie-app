import React from 'react'
import { Link } from 'react-router-dom'
import { TiThumbsUp } from "react-icons/ti";

export const Card = ({result}) => {
   console.log(result) 

  return (
    <div className='group cursor-pointer sm:hover:hover-slate-500 sm:shadow-md
    rounded-lg sm:border sm:border-slate-400 sm:m-2 transition duaration-200 bg-red
    dark:bg-gray-600 dark:text-slate-200
    '>
        <Link to={`/movie/${result.id}`} key={result.id}>
        <img
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
        width={430}
        height={300}
        className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 '
        
        >
        </img>
        <div className='p-2'>
            <p className='line-clamp-2 text-sm'>{result.overview} </p>
            <h2 className='text-sm font-bold truncate'>{result.title || result.name}</h2>
            <p className='flex items-center'>
            {result.release_date || result_air_date} 
            <TiThumbsUp className='h-5 mr-1 ml-3'/>
            {result.vote_count}

            </p>
        </div>
        
        </Link>
    </div>
  )
}
