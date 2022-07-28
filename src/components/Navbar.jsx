import React, {useState} from 'react';
import Logo from '../assets/img/logo.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false)  
  const handleClick = () => setNav((prevValue => !prevValue));
  // TODO: DRY, generate li with func 

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{width: '50px'}} />
      </div>
      {/* menu */}
      <nav className='hidden md:flex'>
        <ul className='flex'>
          <li className='hover:scale-125'>
            <HashLink to='/#hero' smooth>Home</HashLink>          
          </li>
          <li className='hover:scale-125'>
            <HashLink to='/#about' smooth>About</HashLink> 
          </li>
          <li className='hover:scale-125'>
            <HashLink to='/#technologies' smooth>Technologies</HashLink> 
          </li>
          <li className='hover:scale-125'>
            <Link to='/projects'>Projects</Link> 
          </li>
          <li className='hover:scale-125'>
            <Link to='/contact'>Contact</Link> 
          </li>
        </ul>
      </nav>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li onClick={handleClick} className='py-6 text-4xl hover:scale-110'>
            <HashLink to='/#hero' smooth>Home</HashLink> 
          </li>
          <li onClick={handleClick} className='py-6 text-4xl hover:scale-110'>
            <HashLink to='/#about' smooth>About</HashLink> 
          </li>
          <li onClick={handleClick} className='py-6 text-4xl hover:scale-110'>
            <HashLink to='/#technologies' smooth>Technologies</HashLink> 
          </li>
          <li onClick={handleClick} className='py-6 text-4xl hover:scale-110'>
            <Link to='/projects'>Projects</Link> 
          </li>
          <li onClick={handleClick} className='py-6 text-4xl hover:scale-110'>
            <Link to='/contact'>Contact</Link> 
          </li>
        </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/jaroslaw-charchula/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/JarekCh/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/contact'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar