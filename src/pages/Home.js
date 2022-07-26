import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'

const Home = () => {
  return (
    <div>
      {/* add component header */}
        <Hero />
        <Technologies />
        <About />
    </div>
  )
}

export default Home