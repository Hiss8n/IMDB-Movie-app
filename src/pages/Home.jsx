import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBox } from '../components/SearchBox'

export const Home = () => {
  return (
    <> 
    <SearchBox/>
    <div className='min-h-screen flex  w-full bg-gray-600'  >
        <div className='flex flex-wrap mx-auto items-center'> 
        {
            [1,2,3,4,5,6,7,8,9,10,11].map(item=>
                <div className='w-[500] h-[200px]'>
            <Link key={item}>
            <img/>
            <div className=''>{item}</div>
            </Link></div>)
        }
        </div>
    </div>
    </>
  )
}
