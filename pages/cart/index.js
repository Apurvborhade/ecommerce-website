import React from 'react'
import Button from '../../components/Button'

import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
const index = () => {
  return (
    <div>
        <Header isShopPage={true}/>
        <div className='mt-24 grid grid-cols-1 lg:grid-cols-3 lg:gap-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 col-span-2'>
                <ProductCard isShopPage={false}/>
                <ProductCard isShopPage={false}/>
                <ProductCard isShopPage={false}/>
                <ProductCard isShopPage={false}/>
            </div>

            <div className='billing-sections bg-btn lg:mr-10 mt-6 pt-10'>

                <div className='title flex justify-center'>
                    <h2 className='font-medium text-5xl'>Shoping Bag</h2>
                </div>

                <div className='pricing mx-10 mt-20'>
                    <div className=''>
                        <div className='flex justify-between'>
                            <p className=''>Order Value</p>
                            <p className=''>Rs 1,999.00</p>
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

export default index