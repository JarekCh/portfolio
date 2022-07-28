import React from 'react';
import tempProjects from '../assets/temp/temp_projects';
import { useParams } from 'react-router-dom';

const SingleProject = () => {
  const { projectId } = useParams();
  const project = tempProjects.find((project) => project.id === projectId);
  
  return (
    <section className='w-full h-full mt-11 text-gray-300 bg-[#0a192f]'>
      <article>
        <title></title>
        <img></img>

      </article>
    </section>
  )
}

export default SingleProject