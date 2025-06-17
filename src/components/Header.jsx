import { HomeIcon, InfoIcon, Moon, Sun, SunMoon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeSwitch } from './DarkModeSwitch'

export const Header = () => {
    const [dark,setDark]=useState(false)
  return<nav>
    <div className='max-w-screen flex items-center justify-between 
     px-20 shadow text-gray-700 h-[70px] sticky dark:bg-gray-600 dark:text-slate-200'>
        <div className='flex gap-4 text-gray-200 text-xl uppercase text-slate-500 dark:bg-gray-600 dark:text-slate-200'>
            <Link to='/' className='flex justify-center gap-2 text-sm'><HomeIcon size={18}/>Home</Link>
            <Link to='/about' className='flex justify-center gap-2 text-sm'><InfoIcon size={18}/>About</Link>
        </div>
        <div className=''>
        <DarkModeSwitch>

        <div className='flex gap-4'>
            <button className='text-xl'
            onClick={()=>setDark(!dark)}
            >
                {dark?<Moon size={24} color='white'/>:<Sun size={24} color='yellow'/>}
                </button>
            <span className='text-amber-500'>IMDBClone</span>
        </div>
        </DarkModeSwitch>
        
        </div>


    </div>
  </nav>
}
