import React from 'react';
import Exp from '../assets/temp/temp_epx';

const Technologies = () => {
  const skills = Exp.map((item) => {
    const {id, name, image} = item;

    return (
      <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' key={id}>
        <img className='w-20 mx-auto' src={image} alt={name} />
        <p>{name}</p>
      </div>
    );
  });

  return (
    <section className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are technology I've working with</p>
        </div>   
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skills}        
        </div>     
      </div>
    </section>
  )
}

export default Technologies