import Image from 'next/image'
import React from 'react'

import styles from "../../styles/Home.module.css"


const ShopByCategory = () => {
    const behanceLoader = ({ src, width, quality }) => {
        return `https://mir-s3-cdn-cf.behance.net//${src}`
      }
    const unsplashLoader = ({ src, width, quality }) => {
        return `https://images.unsplash.com/${src}`
      }
  return (
    <div>
        <div className='shop-by-category py-10'>
                <div className='title p-5'>
                    <h2 className='text-7xl'>Shop by Category</h2>
                    <p className='font-light mt-7 text-xl'>Discover our collection of cashmere for a relaxed yet luxurious everyday style</p>
                </div>
                <div className='categories-sect'>
                    <div className='feature grid lg:grid-cols-4 grid-cols-2 gap-2 place-content-center p-3'>
                        <div className='flex justify-center relative'>
                            <div className={`${styles.featured_overlay} p-4 lg:p-10`}>
                                <p className='lg:text-7xl text-4xl'>Sweaters</p>
                                <button className='shop-now-btn my-6 hover:bg-black hover:text-white border hover:border-black'>Shop Now</button>
                            </div>
                            <Image
                                loader={unsplashLoader}
                                src="photo-1601379327928-bedfaf9da2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                                alt="Summer"
                                width={1000}
                                height={500}
                            />
                        </div>
                        <div className='flex justify-center relative'>
                            <div className={`${styles.featured_overlay} p-4 lg:p-10`}>
                                <p className='lg:text-7xl text-4xl'>V-Neck</p>
                                <button className='shop-now-btn my-6 hover:bg-black hover:text-white border hover:border-black'>Shop Now</button>
                            </div>
                            <Image
                                loader={unsplashLoader}
                                src="photo-1578932750294-f5075e85f44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
                                alt="Summer"
                                width={1000}
                                height={500}
                            />
                        </div>
                        <div className='flex justify-center relative'>
                            <div className={`${styles.featured_overlay} p-4 lg:p-10`}>
                                <p className='lg:text-7xl text-4xl'>Blazers</p>
                                <button className='shop-now-btn my-6 hover:bg-black hover:text-white border hover:border-black'>Shop Now</button>
                            </div>
                            <Image
                                loader={unsplashLoader}
                                src="photo-1600091166971-7f9faad6c1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                                alt="Summer"
                                width={1000}
                                height={500}
                            />
                        </div>
                        <div className='flex justify-center relative'>
                            <div className={`${styles.featured_overlay} p-4 lg:p-10`}>
                                <p className='lg:text-7xl text-4xl'>T-Shirts</p>
                                <button className='shop-now-btn my-6 hover:bg-black hover:text-white border hover:border-black'>Shop Now</button>
                            </div>
                            <Image
                                loader={unsplashLoader}
                                src="photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                                alt="Summer"
                                width={1000}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ShopByCategory