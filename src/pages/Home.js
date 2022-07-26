import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Technologies from '../components/Technologies'

const Home = () => {
  return (
    <div>
      {/* add component header */}
        <Header />
        <Technologies />
        <About />
    </div>
  )
}

export default Home