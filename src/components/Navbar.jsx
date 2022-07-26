import React, {useState} from 'react';
import Logo from '../assets/img/logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false)  
  const handleClick = () => setNav((prevValue => !prevValue));

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{width: '50px'}} />
      </div>
      {/* menu */}
      <nav className='hidden md:flex'>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Technologies</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>

      {/* social icons */}
      <div className='hidden'></div>
    </div>
  )
}

export default Navbar