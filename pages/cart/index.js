import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'

import { useDispatch, useSelector } from 'react-redux'
import { calcPrice } from '../../redux/cartSlice'

const Index = () => {

    const state = useSelector((state) => state.addtocart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calcPrice())
    },[])
    
    console.log(state.orderAmount)
    return (
    <div>
        <Header isShopPage={true}/>
        <div className='mt-24 grid grid-cols-1 lg:grid-cols-3 lg:gap-20'>
            {state.cartProducts.length ? (
                <div className='grid grid-cols-1 lg:grid-cols-3 col-span-2'>
                    {state.cartProducts.map((product) => (
                        <ProductCard isShopPage={false} isCartPage={true} product={product} key={product.name}/> 
                    ))}
                </div>
            ) : (
            <div className='flex justify-center w-pcent items-center empty-cart col-span-2'>
                <p className='lg:text-3xl p-10'>Your Shoppings Bag is Empty ¯\_(ツ)_/¯</p>
            </div>
            )}

            <div className='billing-sections lg:mr-10 mt-6 pt-10'>

                <div className='title flex justify-center'>
                    <h2 className='font-medium text-5xl'>Shoping Bag</h2>
                </div>

                <div className='pricing mx-10 mt-20'>
                    <div className=''>
                        <div className='flex justify-between'>
                            <p className=''>Order Value</p>
                            <p className=''>Rs {state.orderAmount}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className=''>Delivery</p>
                            <p className=''>Rs 199.00</p>
                        </div>
                    </div>
                    <div className='total border-t mt-5'>
                        <div className='flex justify-between mt-3'>
                            <p className='font-medium'>Total</p>
                            <p className='font-medium'>Rs 2999.00</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-10 w-pcent px-10'>
                    <button className='bg-black flex justify-center text-white py-3 px-4 w-pcent'>
                        <p className='flex items-center text-center text-2xl'>Proceed To Checkout</p>
                    </button>
                </div>
                <div className='flex justify-center mt-10 w-pcent px-10'>
                    We accept <br />
                    Cash on Delivery <br />
                    Prices and delivery costs are not confirmed until you've reached the checkout.
                    <br />
                    30 days withdrawal and free returns. Read more about return and refund policy.
                    <br />
                    Customers would receive an SMS/WhatsApp notifications regarding deliveries on the registered phone number
                </div>
            </div>


        </div>
    </div>
  )
}

export default Index