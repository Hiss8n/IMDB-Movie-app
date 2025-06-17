import React from 'react'

export const SearchBox = () => {
  return <div className='flex w-full py-2 max-h-[55px] items-center 
  justify-between  font-sm px-14 dark:bg-gray-600 dark:text-slate-white py-4'>
    <input
    type='text'
    placeholder='Search your movie...'
    className='w-full py-1 rounded-sm bg-transparent px-2
    dark:bg-gray-600 dark:text-slate-white 
    focus:outline-none text-slate-700 text-sm font-semibold'
    />
    <button className='text-sm font-sm text-gray-500 text-gray-400 dark:bg-gray-600 dark:text-slate-100'>Search</button>
  </div>
  
}
