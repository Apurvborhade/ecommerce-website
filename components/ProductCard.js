import Image from 'next/image'
import React, { useState } from 'react'

// Icons
import { BsHandbagFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

// Components
import Button from './Button'

const ProductCard = ({isShopPage,isCartPage}) => {
    const [productImage, setProductImage] = useState("project_modules/fs/e6c8b0145522059.629fce1b811a7.jpg")
    const behanceLoader = ({ src, width, quality }) => {
        return `https://mir-s3-cdn-cf.behance.net//${src}`
    }

  return (
    <div className='product-card m-5' >
        <div>
            {isShopPage && (
                <div className='product-card-overlay absolute p-7'>
                    <p className='bg-headercol px-7 py-3'>New</p>
                </div>
            )}
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
        <div className='product-info pt-3'>
            <div className='flex justify-between w-pcent'>
                <p className='text-xl'>Organic Colour Jaquard Knitted</p>
                <p className='text-xl'>€ 419.00</p>
            </div>
            <div className='product-det grid lg:grid-cols-2 gap-x-14 gap-y-2 my-4 text-xs'>
                <div className='flex'>
                    <p className='prod-det-title'>Art.no.</p>
                    <p className=''>11236783</p>
                </div>
                <div className='flex'>
                    <p className='prod-det-title'>Colour:</p>
                    <p className=''>Black</p>
                </div>
                <div className='flex'>
                    <p className='prod-det-title'>Size:</p>
                    <p className=''>XS</p>
                </div>
                <div className='flex'>
                    <p className='prod-det-title'>Total:</p>
                    <p className=''>Rs 1000.00</p>
                </div>
            </div>
        </div>  
        <div className='product-info flex justify-end pt-3'>
            {!isCartPage ? (
                <Button title={"Add To Cart"}/>
            ) : (
                <div className='flex justify-between w-pcent'>
                    <select className='outline-none pr-10 pl-2 py-1 border'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <button className='dlt-btn outline-none'>
                        <AiFillDelete size={20}/>
                    </button>
                </div>
            )}
        </div>  
    </div>
  )
}

export default ProductCard