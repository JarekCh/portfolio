import React from 'react';
import tempProjects from '../assets/temp/temp_projects';
import { Link } from 'react-router-dom';

const Projects = () => {  
  // TODO: ADD motion library 
  const projects = tempProjects.map((project) => {
    const {id, name, image } = project;
    return (
    <article 
      style={{backgroundImage: `url(${image})`}}
      className='
        shadow-lg shadow-[#040c16] 
        group 
        container 
        rounded-md 
        flex 
        justify-center 
        items-center 
        mx-auto 
        h-72
        w-72
        lg:h-80
        2xl:h-96        
        2xl:w-80
        content-div' 
      key={id}   
    >
      <div className='opacity-0 group-hover:opacity-100'>        
        <div className='text-2xl font-bold text-white tracking-wider text-center'>
          {name}
        </div>        
        <div className='pt-8 text-center m-2 grid grid-cols-2'>
          <div>
            <a href='/' className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Live
            </a>
          </div>
          <div>
            <a href='/' className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
              Code
            </a >
          </div>
        </div>
        <div className='flex justify-center'>
          <button
              className='w-10/12 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'         
          >
            <Link 
              to={`/projects/${project.id}`}
            >
              More info...
            </Link>
          </button>
        </div>
      </div>
    </article>
  )})

  return (
    <section className='w-full h-full mt-11 text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1600px] mx-auto p-4 flex flex-col items-center w-full h-full'>
        <header className='pb-8 flex flex-col items-center'>
          <title className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</title>
          <p className='py-6'>Check out some of my recent projects</p>
        </header>
        {/* projects container */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4'>
          {projects}
        </div>
      </div>
    </section>
  )
}

export default Projects