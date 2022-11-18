import React from 'react'

import { BsHandbagFill } from 'react-icons/bs'

const Button = ({title}) => {
  return (
    <button className='bg-btn text-white p-2 px-4'>
        <p className='flex items-center'>{title} <BsHandbagFill className='ml-2'/></p>
    </button>
  )
}

export default Button