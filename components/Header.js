import Image from 'next/image'
import React, { useState } from 'react'

// Components
import Sidebar from './Sidebar';

// Images
import logo from '../public/header-logo.svg'

// Styles
import styles from '../styles/Home.module.css'

// Icons
import { BsSearch,BsHandbag } from 'react-icons/bs';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

// Constants
import { Menu } from '../app/constants';

const Header = () => {

   const [isClose, setIsClose] = useState(true) 

  return (
    <>
    
        <div className='header flex justify-between px-10 py-5 border-b-2 border-black border-opacity-10'>
            <div className='logo'>
                <Image 
                    src={logo} 
                    className="" 
                    alt='Logo'
                    width={100}
                ></Image>
            </div>
            <div className='links hidden lg:block cursor-pointer'>
                <ul className='flex'>
                    {Menu.map((item) => (
                        <li className='lg:mx-4'>{item}</li>
                    ))}
                </ul>
            </div>

            <div className='header-cta'>
                <ul className='flex items-center'>
                    <li className='lg:mx-4 mx-2 text-xl lg:block hidden'>
                        <BsSearch />
                    </li>
                    <li className='lg:mx-4 mx-2 text-xl lg:block hidden'>
                        <BsHandbag />
                    </li>
                    <li className='lg:mx-4 mx-2 text-xl'>Login</li>
                    <li className='lg:mx-4 ml-1 text-xl lg:hidden block cursor-pointer'>
                        <HiOutlineMenuAlt1 onClick={() => setIsClose(false)}/>
                    </li>
                </ul>
            </div>
        </div>
        <Sidebar isClose={isClose} setIsClose={setIsClose} />
    </>
  )
}

export default Header