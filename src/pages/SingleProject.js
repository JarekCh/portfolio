import React from 'react';
import tempProjects from '../assets/temp/temp_projects';
import { useParams } from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import {MdLiveTv } from 'react-icons/md';

const SingleProject = () => {
  const { projectId } = useParams();
  const project = tempProjects.find((project) => project.id === projectId);

  console.log("🚀 ~ file: SingleProject.js ~ line 8 ~ SingleProject ~ project", project)

  const techStack = project.stack.map((item) => {    
    return (
      <div key={item.index} className='flex items-center gap-2 mr-2 ml-2'>
        <FaGithub size={20}/>
        <p className='mr-2'>{item.name}</p>
      </div>
    );
  });  
  
  return (
    <section className='w-full sm:h-full md:h-screen mt-14 pb-2 pl-2 pr-2 pt-10 text-gray-300 bg-[#0a192f] flex justify-center items-top'>      
      <article className='shadow-xl flex flex-col  bg-slate-500 max-w-[900px] max-h-[1100px] rounded-lg m-3'>
        <div 
          className='p-4 w-full text-center text-4xl font-bold'
        >
          {project.name}
        </div>
        <div className='flex flex-col items-center'>
          <img src={project.image} className='w-10/12 p-4'/> 
          {/* techStac container */}
          <div className='p-4 lg:w-9/12 sm:w-full grid grid-cols-2 md:grid-cols-3 max-w-lg'>
            {techStack}
          </div>
        </div>
        <p className='p-4'>{project.description}</p>
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
    </section>
  )
}

export default SingleProject