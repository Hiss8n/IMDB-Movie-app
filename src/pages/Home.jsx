import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchBox } from '../components/SearchBox'

export const Home = ({searchParams}) => {

    const [movies,setMovies]=useState([]);
    const [loading,setIsLoading]=useState(true)
    const [error,setError]=useState(false)

    const fetchMovies=async()=>{
        setIsLoading(true)
        try {
            const res= await fetch('https://dummyjson.com/products')

            const result= await res.json();
            setMovies(result.products)
          

        console.log(result.products);

        } catch (error) {
            setIsLoading(false)
            console.error('Error',error)
            
        }
    }
    useEffect(()=>{
        fetchMovies()
    },[])

  
   /*  if(setIsLoading) return <h3>Loading data...</h3> */
  return (
    <> 
    <SearchBox/>
    <div className='min-h-screen flex flex-wrap w-full  dark:bg-gray-600 dark:text-slate-200'  >
        <div className='flex flex-wrap  gap-4 p-2 items-center justify-center'> 
        {
           movies.map((movie)=>
                <div className='w-[350px] h-[280px]  border-sm shadow-lg border-none border-gray-200' key={movie.id}>
            <Link >
            <img
            src={movie.images}
            width={200}
            />
            <div className='flex text-sm font-semibold mt-1 flex-col'>
                <h3 className='text-md font-bold ml-1'>movie.title</h3>
                <p className='text-sm overflow-hidden text-ellipsis 
                whitespace-nowrap trancate line-clap-3'>{movie.description}</p>
              
                <div className='flex justify-between items-center mx-4'>
                      <small className='text-sm text-red-400'>{movie.price}</small>
                      <button className='py-1 bg-green-400 shadow rounded'>AddTo card</button>
                </div>
                </div>
            </Link></div>)
        }
        </div>
    </div>
    </>
  )
}
