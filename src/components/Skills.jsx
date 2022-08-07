import React from 'react';

const Skills = ({ data }) => {
  const skills = data[0]?.skills?.map((item, i) => {
    const {name, image} = item;

    return (
      <div id='skills' className='shadow-md pt-2 shadow-[#040c16] bg-slate-500 rounded-sm hover:scale-110 duration-500' key={i}>
        <img className='w-20 mx-auto' src={image} alt={name} />
        <p>{name}</p>
      </div>
    );
  });

  return (
    <section className='w-full h-screen text-gray-300'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are technologies I've been working with</p>
        </div>   
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skills}        
        </div>     
      </div>
    </section>
  )
}

export default Skills