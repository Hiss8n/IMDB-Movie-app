import React from 'react'
import { Card } from './Card'

export const Results = () => {
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4 max-w-6xl mx-auto py-3'>

        {results.map((result)=>{<Card key={result.id} result={result}/>})}
    </div>
  )
}
