import React, { useState } from 'react'
import Image from 'next/image';

import styles from '../styles/Home.module.css'

// Logo
import logo from '../public/header-logo.svg'

// Constants
import { Menu } from '../app/constants';

import {IoIosCloseCircleOutline} from 'react-icons/io'

const Sidebar = ({isClose,setIsClose}) => {



  return (
    <div className={`sidebar absolute top-0 right-0 flex flex-col lg:hidden lg:pointer-events-none ${styles.sidebar} bg-slate-100 ${isClose && styles.sidebar_close}` }>
        <div className='sidebar-header top-10 flex items-center justify-between mt-10 '>
            <div className='logo'>
                <Image 
                    src={logo} 
                    className="" 
                    alt='Logo'
                    width={150}
                ></Image>
            </div>
            <button className='border-none opacity-70 absolute right-10 hover:bg-slate-200 rounded-lg' onClick={() => setIsClose(true)}>
                <IoIosCloseCircleOutline size={30}/>
            </button>
        </div>
        <div className='links block lg:hidden cursor-pointer mb-72'>
                <ul className='flex flex-col justify-center'>
                    {Menu.map((item) => (
                        <li className='lg:mx-4 text-center my-4 text-2xl'>{item}</li>
                    ))}
                </ul>
        </div>
    </div>
  )
}

export default Sidebar