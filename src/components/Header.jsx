import { Moon, Sun, SunMoon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    const [dark,setDark]=useState(false)
  return<nav>
    <div className='max-w-screen flex items-center justify-between  px-20 bg-gray-600 shadow  h-[70px] sticky'>
        <div className='flex gap-4 text-slate-200 text-xl uppercase'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
        <div className='flex gap-4'>
            <button className='text-xl'
            onClick={()=>setDark(!dark)}
            >
                {dark?<Moon size={24} color='white'/>:<Sun size={24} color='yellow'/>}
                </button>
            <span className='text-amber-500'>IMDBClone</span>
        </div>

    </div>
  </nav>
}
