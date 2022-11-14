import Image from 'next/image'
import React from 'react'

// Images
import logo from '../public/header-logo.svg'

// Styles
import styles from '../styles/Home.module.css'

// Icons
import { BsSearch,BsHandbag } from 'react-icons/bs';

// Constants
import { Menu } from '../app/constants';

const Header = () => {
  return (
    <div className='header flex justify-between px-10 py-5 border-b-2 border-black border-opacity-10'>
        <div className='logo'>
            <Image 
                src={logo} 
                className="" 
                alt='Logo'
                width={100}
            ></Image>
        </div>
        <div className='links cursor-pointer'>
            <ul className='flex'>
                {Menu.map((item) => (
                    <li className='lg:mx-4'>{item}</li>
                ))}
            </ul>
        </div>

        <div className='header-cta'>
            <ul className='flex items-center'>
                <li className='lg:mx-4 text-xl'>
                    <BsSearch />
                </li>
                <li className='lg:mx-4 text-xl'>
                    <BsHandbag />
                </li>
                <li className='lg:mx-4 text-xl'>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Header