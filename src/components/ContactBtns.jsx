import React from 'react'
import {FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactBtns = () => {
  return (
    <div className='lg:hidden'>
        <a 
        className='
        text-white 
          w-32 
          border-2
          hover:bg-pink-600
          hover:border-pink-600
          hover:scale-110
          duration-200
          px-4 
          py-1 
          my-4 
          flex 
          items-center 
          rounded-sm'
          href='https://www.linkedin.com/in/jaroslaw-charchula/'
        >
        Linkedin
        <FaLinkedin size={20} className='ml-2'/>                     
        </a>
        <a 
        className='
          text-white 
          w-32 
          border-2
          hover:bg-pink-600
          hover:border-pink-600
          hover:scale-110 
          duration-200 
          px-4 
          py-1 
          my-4 
          flex 
          items-center 
          rounded-sm'
          href='https://github.com/JarekCh/'
        >
        Github
        <FaGithub size={20} className='ml-5'/>             
        </a>
    </div>
  )
}

export default ContactBtns