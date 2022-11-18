import Image from 'next/image'
import React, { useState } from 'react'

// Icons
import { BsHandbagFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

// Redux
import { addToCart,deleteProduct } from '../redux/addToCartSlice'
import { useDispatch } from 'react-redux'

const ProductCard = ({isShopPage,isCartPage,product}) => {
    const { id,name,desc,price,image,altImage,section} = product;
    const [productImage, setProductImage] = useState(product.image)
    const behanceLoader = ({ src, width, quality }) => {
        return `https://mir-s3-cdn-cf.behance.net//${src}`
    }

    // Redux State Mng
    const dispatch = useDispatch();

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
                onMouseEnter={() => setProductImage(image)}
                onMouseLeave={() => setProductImage(altImage)}
            /> 
        </div>
        <div className='product-info pt-3'>
            <div className='flex justify-between w-pcent'>
                <p className='text-xl'>{name}</p>
                <p className='text-xl'>€ {price}</p>
            </div>
            
            {isCartPage && (<div className='product-det grid lg:grid-cols-2 gap-x-14 gap-y-2 my-4 text-xs'>
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
            </div>)}

        </div>  
        <div className='product-info flex justify-end pt-3'>
            {!isCartPage ? (
                <button className='bg-btn text-white p-2 mt-2 px-4 outline-none' onClick={() => dispatch(addToCart(product))}>
                    <p className='flex items-center'>Add To Cart <BsHandbagFill className='ml-2'/></p>
                </button>
            ) : (
                <div className='flex justify-between w-pcent'>
                    <select className='outline-none pr-10 pl-2 py-1 border'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <button className='dlt-btn outline-none' onClick={() => dispatch(deleteProduct(id))}>
                        <AiFillDelete size={20}/>
                    </button>
                </div>
            )}
        </div>  
    </div>
  )
}

export default ProductCard