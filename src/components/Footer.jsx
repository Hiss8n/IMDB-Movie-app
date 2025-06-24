import React from 'react'

export const Footer = () => {
  return (
    <div className='dark:bg-gray-700 dark:text-slate-400 w-full max-w-7xl'>
      <div className='flex flex-grow items-between justify-between px-4 text-sm'>
        <div>
          <h3 className='upercase my-2'>Our service</h3>
          <ul>
            <li>New Release</li>
            <li>Top Rated</li>
            <li>Netflex</li>
          </ul>
        </div>

          <div>
          <h3 className='upercase my-2'>Genre</h3>
          <ul>
            <li>Adventure</li>
            <li>Horror</li>
            <li>Action</li>
          </ul>
        </div>
        
          <div>
          <h3 className='upercase my-2'>FAQ</h3>
          <ul>
            <li>Affiliate</li>
            <li>Location</li>
            <li>Contacts</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
