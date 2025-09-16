import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme toggle */}
          <ThemeToggle />
        {/* Background effect */}
          <StarBackground />
        {/* Navbar */}
          <Navbar />
        {/* Main content */}

        {/* Footer */}
    </div>
  )
}

export default Home