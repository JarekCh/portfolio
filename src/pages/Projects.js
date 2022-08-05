import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { client } from '../client';
import tempImg from '../assets/img/tempImg.png'
import Loading from '../components/Loading';


const Projects = () => {  
  const [isLoading, setLoading] = useState(true); 
  const [projectsData, setProjectsData] = useState([]);   
  console.log("🚀 ~ file: Projects.js ~ line 12 ~ Projects ~ projectsData", projectsData)
  
  useEffect(() => {
    const query = `*[_type == "projects"]
    { date,
      title, 
      codeLink,
      projectLink, 
      slug,       
      "imageUrl":imgUrl{"url":asset->url},
      inProgres,
      projectInfo,      
    }`;    

  client.fetch(query)
    .then((data) => {
      const sortedData = data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
       })
      setProjectsData(sortedData)
      setLoading(false);
    })
    .catch(console.error)
  }, []);

  if (isLoading) return <Loading />;

  const projects = projectsData.map((projects, i) => {
    const {title, codeLink, projectLink, imageUrl, slug, date, projectInfo, inProgres } = projects;
    return (
    <motion.article 
      style={{backgroundImage: !inProgres ? `url(${imageUrl.url})` : `url(${tempImg})`}}
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
      key={slug.current}
      animate={{scale: 1}}
      initial={{scale: 0}} 
      transition={{duration: 0.7}}  
    >
      <main className='flex flex-col first-layer content-start gap-3 w-full h-full p-4 text-orange lg:text-lg font-normal bg-black/60'>
          <div className='text-center font-bold'>          
            {title}
          </div>
        {!inProgres ? <>
          <div>
            <p>{`Finished on: ${new Date(date).toLocaleDateString()}`}</p>            
          </div>
          <section className='pt-8'>
            <div>Description:</div>
            <p className='text-sm'>
              {projectInfo.length > 120 ? `${projectInfo.substring(0, 120)}...` : projectInfo}
            </p>
          </section>
        </>
        :
        <div className='text-2xl lg:text-4xl relative top-14 -right-3 -rotate-45 opacity-40 text-red-600 font-bold'>Under Developement</div>}
      </main>
      <div className='hidden group-hover:block opacity-0 group-hover:opacity-100'>        
        <div className='text-2xl m-2 font-bold text-white tracking-wider text-center'>
          {title}
        </div>        
        <div className='pt-8 text-center m-2 grid grid-cols-2'>
          <a 
            href={projectLink}
            className='text-center w-28 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200'
          >
            {!inProgres ? (title === "Portfolio" ? "N/A" : "Live") : "N/A"}
          </a>
          <a 
            href={codeLink}
            className='text-center w-28 rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200'
          >
            Code
          </a>
        </div>
        <div className='flex justify-center'>
          <Link
              className='w-52 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-200'
              to={`/projects/${projects.slug.current}`}     
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
          <p className='py-6'>Check out some of my recent projectss</p>
        </header>
        {/* projectss container */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4'>
          {projects}
        </div>
      </div>
    </section>
  )
}

export default Projects