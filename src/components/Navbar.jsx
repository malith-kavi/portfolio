import React from 'react';
import logo from "../assets/malithLogoN.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <a 
          href='https://www.linkedin.com/in/malithkavinda'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='hover:text-gray-500'
          >
            <FaLinkedin/>
        </a>

        <a 
          href='https://github.com/malith-kavi'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='hover:text-gray-500'
          >
            <FaGithub/>
        </a>

        {/* <a 
          href=''
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
          className='hover:text-gray-500'
          >
            <FaInstagram/>
        </a> */}

        
        
    </div>
  </nav>;
};
