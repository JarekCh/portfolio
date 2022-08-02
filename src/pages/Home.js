import React, { useState, useEffect } from 'react';
import { client } from '../client';
import About from '../components/About';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const Home = () => {
  const [data, setData] = useState([]);  

  useEffect(() =>{
    const query = "*[_type == 'home']{'about': about.body,'hero': hero.body,skills[]{name,'image': icon.asset->url}}"
    
    client.fetch(query)
    .then((data) => {
      setData(data)
    })
    .catch(console.error)    
  }, []);

  return (
    <main>      
        <Hero data={data}/>
        <About data={data}/>
        <Skills data={data}/>        
    </main>
  );
};

export default Home