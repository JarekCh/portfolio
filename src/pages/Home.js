import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';

const Home = () => {
  return (
    <main>      
        <Hero />
        <About />
        <Technologies />        
    </main>
  );
};

export default Home