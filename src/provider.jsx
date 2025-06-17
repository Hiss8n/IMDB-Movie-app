import { ThemeProvider } from 'next-themes'
import React from 'react'

export const provider = ({children}) => {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className=''>
         {children}
        </div>
        </ThemeProvider>
  )
}
