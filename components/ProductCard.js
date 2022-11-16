import Image from 'next/image'
import React, { useState } from 'react'

const ProductCard = () => {
    const [productImage, setProductImage] = useState("project_modules/fs/e6c8b0145522059.629fce1b811a7.jpg")
    const behanceLoader = ({ src, width, quality }) => {
        return `https://mir-s3-cdn-cf.behance.net//${src}`
    }

  return (
    <div className='product-card m-5' >
        <div>
            <div className='product-card-overlay absolute p-7'>
                <p className='bg-headercol px-7 py-3'>New</p>
            </div>
            <Image
                loading='lazy'
                loader={behanceLoader}
                src={productImage}
                alt="Summer"
                width={1000}
                height={500}
                onMouseEnter={() => setProductImage("project_modules/1400/f96ba1145522059.629fce1b880eb.jpg")}
                onMouseLeave={() => setProductImage("project_modules/fs/e6c8b0145522059.629fce1b811a7.jpg")}
            /> 
        </div>
        <div className='product-info flex justify-between pt-3'>
            <p className='text-xl'>Organic Colour Jaquard Knitted</p>
            <p className='text-xl'>€ 419.00</p>
        </div>  
    </div>
  )
}

export default ProductCard