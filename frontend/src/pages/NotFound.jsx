import { Link } from 'react-router-dom'
import React from 'react'

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center gap-y-10  items-center bg-background text-foreground overflow-x-hidden'>
      
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>404</h1>
      
        <p>Ooops! Something went wrong. Page Not Found</p>

        <Link to={'/'} className='cosmic-button'>Let's Get Back</Link>
    </div>
  )
}

export default NotFound