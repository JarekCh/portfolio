import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { MdLiveTv } from 'react-icons/md';
import { motion } from 'framer-motion';
import { client } from '../client';
import Loading from '../components/Loading';
import tempImg from '../assets/img/tempImg.png'

const SingleProject = () => {
  const [isLoading, setLoading] = useState(true); 
  const [singleProject, setSingleProject] = useState(null); 
  const { slug } = useParams();

  useEffect(() => {
    const query = `*[slug.current == "${slug}"]{ 
        _id, 
        date, 
        title, 
        codeLink, 
        projectLink, 
        slug,
        "techIcons":techIcons[]{name, "url":icon.asset->url}, 
        "imageUrl":imgUrl{"url":asset->url},
        projectInfo,
        inProgres
      }`;    

    client.fetch(query)
    .then((data) => {
      setSingleProject(data[0])
      setLoading(false); 
    })
    .catch(console.error);
  }, [slug]);

  if (isLoading) return <Loading />;
  
  return (
    <main className='w-full h-[calc(100%-80px)] text-gray-300  flex justify-center box-content'>      
      <motion.article 
        className='shadow-inner shadow-slate-200 flex flex-col bg-slate-500 max-w-[900px] max-h-[1400px] rounded-lg m-3 mt-20'
        animate={{scale: 1}}
        initial={{scale: 0}} 
        transition={{duration: 0.7}}  
      >
        <div 
          className='p-4 w-full text-center md:text-4xl font-bold'
        >
          {singleProject.title}
        </div>
        <div className='flex flex-col items-center'>
          <img 
            src={singleProject?.imageUrl?.url || tempImg} 
            alt={singleProject.title} 
            className='w-7/12 rounded-md'
          /> 
          {/* techStack container */}
          <div className='p-4 lg:w-9/12 sm:w-full grid grid-cols-2 md:grid-cols-3 max-w-lg'>
            {singleProject.techIcons.map((icon, i) => {
                  return (
                          <div key={i} className='flex items-center gap-2 mr-2 ml-2'>
                            <img className='w-6' src={icon.url} alt={icon.title}/>
                            <p className='mr-2 text-sm md:text-lg'>{icon.name}</p>
                          </div>
                        );
            })}
          </div>
        </div>
        <p className='p-4 mx-5 text-sm sm:text-lg'>{singleProject.projectInfo}</p>
        {/* btn container */}
        <div className='flex justify-evenly mb-2'>   
          <div>
            <a 
              className='text-white w-32 border-2 hover:bg-pink-600 hover:border-pink-600 hover:scale-110 duration-200 px-4 py-1 my-4 flex justify-center'
              href={singleProject.projectLink}
            >
              {!singleProject.inProgres ? (singleProject.title === "Portfolio" ? "N/A" : "Live") : "N/A"}
              <MdLiveTv size={20} className='ml-2'/>                     
            </a>
          </div>   
          <div>
            <a 
              className='text-white w-32 border-2 hover:bg-pink-600 hover:border-pink-600 hover:scale-110 duration-200 px-4 py-1 my-4 flex justify-center'
              href={singleProject.codeLink}
            >
              Github
              <FaGithub size={20} className='ml-2'/>             
            </a>
          </div>    
        </div>      
      </motion.article>
    </main>
  )
}

export default SingleProject

