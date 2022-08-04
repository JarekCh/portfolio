import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Hero = ({ data }) => {  
  return (
    <section id='hero' className='bg-[#0a192f] w-full h-screen'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <motion.p 
          className='text-pink-600 '
          animate={{scale: 1}}
          initial={{scale: 0}} 
          transition={{duration: 1.5}}
        >
          Hello, my name is
        </motion.p>
        <motion.h1 
          className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'
          animate={{            
            x: [1000, 0 ],
            scale: 1
          }}
          initial={{scale: 0}}  
          transition={{
            repeat: 0,
            duration: 1.5,            
          }}
        >
          Jarosław Charchuła
        </motion.h1>
        <motion.h2 
          className='text-4xl sm:text-7xl font-bold text-[#8892b0]'
          animate={{            
            x: [-1000, 0 ],
            scale: 1
          }}
          initial={{scale: 0}}  
          transition={{
            repeat: 0,
            duration: 1.5,            
          }} 
        >
          I'm Junior Frontend Developer.
        </motion.h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>{data[0]?.hero}</p>
        <Link to='/projects'>          
          <button className='
          text-white 
          group border-2 
          px-6 
          py-3 
          my-2 
          flex 
          items-center
          hover:bg-pink-600
          hover:border-pink-600 
          rounded-sm 
          hover:scale-110 
          duration-200'>
            View Projects 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>            
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Hero