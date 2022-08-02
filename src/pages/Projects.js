import React, { useState, useEffect } from 'react';
import tempProjects from '../assets/temp/temp_projects';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {client} from '../client';

const Projects = () => {  
  const [test, setTest] = useState([]);
  console.log("🚀 ~ file: Projects.js ~ line 9 ~ Projects ~ test", test)
  
  useEffect(() => {
    const query = '*[_type == "projects"]{_id, name, codeLink, projectLink, slug,"techIcons":techIcons[]{name, "url":icon.asset->url}}';
    

    client.fetch(query)
      .then((data) => {
        setTest(data)
      })
  }, []);

//     *[_type == 'projects']{
//   _id,
//   slug,
//   'techIcons':techIcons[]{
//   name,
//   'url':icon.asset->url
// }

// }

  const projects = tempProjects.map((project) => {
    const {id, name, image } = project;
    return (
    <motion.article 
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
      animate={{scale: 1}}
      initial={{scale: 0}} 
      transition={{duration: 0.7}}  
    >
      <div className='opacity-0 group-hover:opacity-100'>        
        <div className='text-2xl font-bold text-white tracking-wider text-center'>
          {name}
        </div>        
        <div className='pt-8 text-center m-2 grid grid-cols-2'>
          <Link 
            to={'/'}
            className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
          >
            Live
          </Link>
          <Link 
            to={'/'}
            className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
          >
            Code
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link
              className='w-10/12 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'
              to={`/projects/${project.id}`}     
          >
            More info...
          </Link>
        </div>
      </div>
    </motion.article>
  )})

  return (
    <section className='w-full h-full text-gray-300 '>
      <div className='max-w-[1600px] mx-auto p-4 flex flex-col items-center w-full h-full'>
        <header className='pb-8 flex flex-col items-center'>
          <title className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 mt-20'>Projects</title>
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