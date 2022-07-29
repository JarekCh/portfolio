import React from 'react';
import tempProjects from '../assets/temp/temp_projects';
import { useParams } from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import {MdLiveTv } from 'react-icons/md';

const SingleProject = () => {
  const { projectId } = useParams();
  const project = tempProjects.find((project) => project.id === projectId);
  
  // TODO: with backend add key prop
  const techStack = project.stack.map((item, i) => {    
    return (
      <div key={i} className='flex items-center gap-2 mr-2 ml-2'>
        <FaGithub size={20}/>
        <p className='mr-2 text-md md:text-lg'>{item.name}</p>
      </div>
    );
  });  
  
  return (
    <main className='w-full h-full 2xl:h-screen px-2 pt-10 pb-40 text-gray-300 bg-[#0a192f] flex justify-center box-content'>      
      <article className='shadow-inner shadow-slate-200 flex flex-col bg-slate-500 max-w-[900px] max-h-[1400px] rounded-lg m-3 mt-16 '>
        <div 
          className='p-4 w-full text-center md:text-4xl font-bold'
        >
          {project.name}
        </div>
        <div className='flex flex-col items-center'>
          <img src={project.image} alt={project.name} className='w-9/12 p-4'/> 
          {/* techStack container */}
          <div className='p-4 lg:w-9/12 sm:w-full grid grid-cols-2 md:grid-cols-3 max-w-lg'>
            {techStack}
          </div>
        </div>
        <p className='p-4 mx-5 text-md sm:text-lg'>{project.description}</p>
        {/* btn container */}
        <div className='flex justify-evenly mb-2'>   
          <div>
            <a 
              className='text-white w-32 border-2 hover:bg-pink-600 hover:border-pink-600 hover:scale-110 duration-200 px-4 py-1 my-4 flex justify-center'
              href='/'
            >
              Live
              <MdLiveTv size={20} className='ml-2'/>                     
            </a>
          </div>   
          <div>
            <a 
              className='text-white w-32 border-2 hover:bg-pink-600 hover:border-pink-600 hover:scale-110 duration-200 px-4 py-1 my-4 flex justify-center'
              href='/'
            >
              Github
              <FaGithub size={20} className='ml-2'/>             
            </a>
          </div>    
        </div>
      </article>
    </main>
  )
}

export default SingleProject