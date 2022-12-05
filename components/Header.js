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
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useRouter } from 'next/router';

const Header = ({isShopPage}) => {
    
   const [isClose, setIsClose] = useState(true)
   const [userAvail, setUserAvail] = useState(false)
   const { user } = useSelector((state) => state.auth)
   const dispatch = useDispatch()
   const router = useRouter()

   useEffect(() => {
    if(user) {
        setUserAvail(true)
    } else {
        setUserAvail(false)
    }
   }, [user])
   
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
        <div className={`header flex justify-between px-10  py-5 ${border && 'border-b-2 border-white'} border-opacity-60 text-${headertext} z-20 bg-${headerColor}`}>
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
                        <Link href={`/collections/${item}`} key={Math.random()}>
                            <li className={`lg:mx-4 text-${headertext}`} >{item}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className='header-cta'>
                <ul className='flex items-center justify-center'>
                    <li className='lg:mx-4 mx-2 text-xl lg:block hidden'>
                        <BsSearch />
                    </li>
                    <Link href={'/cart'}>
                        <li className='lg:mx-4 mx-2 text-xl lg:block '>
                            <BsHandbag />
                        </li>
                    </Link>
                    {userAvail ? (
                        
                            <li className='lg:mx-4 mx-2 text-xl cursor-pointer' onClick={() => {
                                dispatch(logout())
                                router.reload(window.location.pathname)
                            }}>Logout</li>
                    ) : (
                        <Link href={'/auth'}>
                            <li className='lg:mx-4 mx-2 text-xl'>Login</li>
                        </Link>
                    )}
                    <li className='lg:mx-4 ml-3 text-xl lg:hidden block cursor-pointer'>
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