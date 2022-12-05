import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

// Icons
import { BsHandbagFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'

// Redux
import {setCartItems, getCartItems,reset, deleteCartItems, updateCartItems } from '../redux/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Link from 'next/link'

const ProductCard = ({isShopPage,isCartPage,product}) => {
    const imageLoader = ({ src, width, quality }) => {
        return `https://mir-s3-cdn-cf.behance.net//${src}`
    }

    const { id,name,desc,price,image,altImage,section} = product;

    const state = useSelector((state) => state.cart);
    
    // Variables
    const [productImage, setProductImage] = useState(product.image)
    const [totalPrice, setTotalPrice] = useState(product.info ? product.info.totalPrice : price)
    const [productAmount, setProductAmount] = useState(product.info ? product.info.totalAmount : 1);
    const [btnVisible,setBtnVisible] = useState(true)
    const firstUpdate = useRef(true)

    const UpdateData = {
        id,
        productAmount,
        totalPrice
    }
    
    
    // Redux State Mng
    const dispatch = useDispatch();
    
    const item = Object.assign({},product,{amount:productAmount});
    
    
    
    const { isLoading,isError,isSuccess,message } = useSelector((state) => state.auth)
    
    useEffect(() => {
        // Stops UseEffect at First Render
        if(firstUpdate.current) {
            firstUpdate.current = false
            return
        }
        
        dispatch(updateCartItems(UpdateData))
        
        dispatch(getCartItems(1))

    }, [productAmount])
    
    
    // Get Cart Items for comparing whether in cart
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('user'))) {
            dispatch(getCartItems(1))
        }

    },[state.cartProducts.length])
    
    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
    },[isError])

    // Checks Product Already in Cart Then diplay Btn
    useEffect(() => {
        if(state.cartProducts.length) {
            state.cartProducts.forEach((p) => {
                if(p.id === item.id) {
                    setBtnVisible(false)       
                }
            }) 
        }
    }, [state.cartProducts])

    // Handle Add to cart
    const AddToCart = () => {
        if(JSON.parse(localStorage.getItem('user'))) {
            dispatch(setCartItems(item.id))
        } else {
            toast.error('User Not Logged in')
        }
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
                loading='eager'
                loader={imageLoader}
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
                <p className='text-xl'>Rs. {price}</p>
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
                    <p className=''>Rs {totalPrice}</p>
                </div>
            </div>)}

        </div>  
        <div className='product-info flex justify-end pt-3'>
            {!isCartPage ? (
                <button className='bg-btn text-white p-2 mt-2 px-4 outline-none' onClick={() => {
                        if(btnVisible) {
                            AddToCart()
                        }
                    }}>
                        {btnVisible ? (
                            <p className='flex items-center'>Add To Cart <BsHandbagFill className='ml-2'/></p>
                            ) : (
                            <p className='flex items-center'>Added To Cart</p>
                        )}
                </button>
            ) : (
                <div className='flex justify-between w-pcent'>
                    <select className='outline-none pr-10 pl-2 py-1 border' value={productAmount} onChange={(e) => {
                        setProductAmount(Number(e.currentTarget.value))
                        setTotalPrice((Number(e.currentTarget.value) * 100))
                    }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <button className='dlt-btn outline-none' onClick={() => {
                        dispatch(deleteCartItems(id))
                    }}>
                        <AiFillDelete size={20}/>
                    </button>
                </div>
            )}
        </div>  
    </div>
  )
}

export default ProductCard