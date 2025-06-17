import React from 'react'

export const SearchBox = () => {
  return <div className='flex w-full py-2 max-h-[55px] items-center 
  justify-between bg-gray-600 font-sm px-14'>
    <input
    type='text'
    placeholder='Search your movie...'
    className='w-full py-1 rounded-sm bg-transparent px-2 focus:outline-none text-gray-200 text-sm font-semibold'
    />
    <button className='text-sm font-sm text-gray-400'>Search</button>
  </div>
  
}
