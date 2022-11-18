import Image from 'next/image'
import React from 'react'


// Images
import logo from '../public/header-logo-black.svg'
// Icons
import {RiSecurePaymentLine} from 'react-icons/ri'
import { CiDeliveryTruck } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='Footer'>

      <div className='news-letter flex flex-col justify-center items-center border-y border-black border-opacity-80 p-10'>
        <div className='logo'>
            <Image 
                src={logo} 
                className="" 
                alt='Logo'
                width={200}
            ></Image>
        </div>
        <div className='desc'>
          <p className='text-center font-light italic my-6'>Sign up to our newsletter and be the first to know about exclusive offers, product<br/>launches and more.Your email</p>
        </div>
        <div className='form'>
          <form className='flex'>
            <input placeholder='Your Email' className='outline-none border  newsletter-form-input'></input>
            <button className='form-btn'>Submit</button>
          </form>
        </div>
        <div className='socials'></div>
      </div>
    
      <div className='services grid lg:grid-cols-3 grid-cols-1  lg:border-b h-28 border-black'>
        <div className='service flex justify-center flex-col items-center py-4'>
          <CiDeliveryTruck size={30}/>
          <p className='text-xl'>Free Shipping & Returns</p>
          <p>taxes and duties included</p>
        </div>
        <div className='service flex justify-center flex-col sm:border-y lg:border-x border-black items-center py-4'>
          <p className='text-xl'>Free Shipping</p>
          <p>taxes and duties included</p>
        </div>
        <div className='service flex justify-center flex-col items-center py-4'>
          <RiSecurePaymentLine size={30}/>
          <p className='text-xl'>Secure Payments</p>
          <p>Visa, Mastercard, Amex, PayPal & more</p>
        </div>
      </div> 
    </div>
  )
}

export default Footer