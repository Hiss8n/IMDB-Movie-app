import { useTheme } from 'next-themes'
import React from 'react'

export const DarkModeSwitch = ({children}) => {
    const {theme ,setTheme}=useTheme();
  return<div
  onClick={ theme==='dark'?()=>setTheme('light'):()=>setTheme('dark')}
  >{children}</div>
}
