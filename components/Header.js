import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

// Components
import Sidebar from './Sidebar';

// Images
import logowhite from '../public/header-logo.svg'
import logoblack from '../public/header-logo-black.svg'

// Styles
import styles from '../styles/Home.module.css'

// Icons
import { BsSearch,BsHandbag } from 'react-icons/bs';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

// Constants
import { Menu } from '../app/constants';

const Header = ({isShopPage}) => {

   const [isClose, setIsClose] = useState(true)
   
   //Scroll Events Setup
   const [headerColor, setHeaderColor] = useState(!isShopPage ? "transparent":"headercol")
   const [headertext, SetHeaderText] = useState(!isShopPage ? "white" : "black")
   const [border, SetBorder] = useState(!isShopPage ? true : false)
   const [logo, SetLogo] = useState(!isShopPage ? logowhite : logoblack)
   
   //Scroll Events 
   const listenScrollEvent = () => {
    if(!isShopPage) {
        window.scrollY > 10
          ? setHeaderColor("headercol")
          : setHeaderColor("transparent")
        
        window.scrollY > 10
          ? SetHeaderText("black")
          : SetHeaderText("white")
        
        window.scrollY > 10
          ? SetBorder(false)
          : SetBorder(true)
    
        window.scrollY > 10
          ? SetLogo(logoblack)
          : SetLogo(logowhite)
    } else {
        window.scrollY > 10
          ? setHeaderColor("headercol")
          : setHeaderColor("headercol")
    

    } 
  }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })

  return (
    <>
        <div className={`header flex justify-between px-10 py-5 ${border && 'border-b-2 border-white'} border-opacity-60 text-${headertext} z-10 bg-${headerColor}`}>
            <Link className='logo' href="/">
                <Image 
                    src={logo} 
                    className="" 
                    alt='Logo'
                    width={100}
                ></Image>
            </Link>
            <div className={`links hidden lg:block cursor-pointer text-${headertext}`}>
                <ul className='flex'>
                    {Menu.map((item) => (
                        <Link href="/shop">
                            <li className={`lg:mx-4 text-${headertext}`} key={Math.random()}>{item}</li>
                        </Link>
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
                    <li className='lg:mx-4  text-xl lg:hidden block cursor-pointer'>
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