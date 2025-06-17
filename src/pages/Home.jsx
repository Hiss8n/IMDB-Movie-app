import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchBox } from '../components/SearchBox'

export const Home = () => {
    const [movie,setMovie]=useState([]);
    const [loading,setIsLoading]=useState(false)
    const [error,setError]=useState(false)

    const fetchMovies=()=>{
        try {
            
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchMovies()

    },[])
  return (
    <> 
    <SearchBox/>
    <div className='min-h-screen flex flex-wrap w-full  dark:bg-gray-600 dark:text-slate-200'  >
        <div className='flex flex-wrap  gap-4 p-2 items-center justify-center'> 
        {
            [1,2,3,4].map((item,index)=>
                <div className='w-[350px] h-[280px]  border-sm shadow-lg border-none border-gray-200' key={index}>
            <Link >
            <img/>
            <div className='flex text-sm font-semibold'>{item}</div>
            </Link></div>)
        }
        </div>
    </div>
    </>
  )
}
