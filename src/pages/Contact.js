import React from 'react';
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, useTime  } from 'framer-motion';
import { duration } from '@mui/material';

const Contact = () => {
  const rowsResize = () => {
    if(window.innerWidth < 450) return "3";
    if(window.innerWidth > 450) return "10";
  };    
  
  return (
    <section className='w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
        <div className='flex flex-col items-center mt-11'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4 text-center'>
            Submit the form below or shoot me an email - charchula@gmail.com
          </p>
        </div>
        {/* button container */}
        <div className='lg:hidden'>
          <a 
            className='text-white w-32 border-2 hover:bg-pink-600 hover:border-pink-600 hover:scale-110 duration-200 px-4 py-1 my-4 flex items-center'
            href='https://www.linkedin.com/in/jaroslaw-charchula/'
          >
            Linkedin
            <FaLinkedin size={20} className='ml-2'/>                     
          </a>
          <a 
            className='text-white w-32 border-2 hover:bg-pink-600 hover:border-pink-600 hover:scale-110 duration-200 px-4 py-1 my-4 mx-auto flex items-center'
            href='https://github.com/JarekCh/'
          >
            Github
            <FaGithub size={20} className='ml-5'/>             
          </a>
        </div>
        <form className='flex flex-col max-w-[900px] w-full'>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows={rowsResize()}  placeholder='Message'></textarea>
          <motion.button 
            className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 hover:scale-110 duration-200 px-4 py-3 my-8 mx-auto flex items-center' 
          >
            Let's Collaborate
          </motion.button>
        </form>
    </section>
  )
}

export default Contact