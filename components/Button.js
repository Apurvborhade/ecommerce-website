import React from 'react'

import { BsHandbagFill } from 'react-icons/bs'

import { addToCart } from '../redux/addToCartSlice'
import { useDispatch } from 'react-redux'
const Button = ({title}) => {
  const dispatch = useDispatch();
  return (
    <button className='bg-btn text-white p-2 mt-2 px-4 outline-none' onClick={() => dispatch(addToCart())}>
        <p className='flex items-center'>{title} <BsHandbagFill className='ml-2'/></p>
    </button>
  )
}

export default Button