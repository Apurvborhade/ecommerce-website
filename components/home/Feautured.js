import Image from 'next/image'
import React from 'react'

import styles from "../../styles/Home.module.css"

const Feautured = () => {
    const behanceLoader = ({ src, width, quality }) => {
        return `https://mir-s3-cdn-cf.behance.net//${src}`
      }
    const unsplashLoader = ({ src, width, quality }) => {
        return `https://images.unsplash.com/${src}`
      }
  return (
    <div className='feature grid grid-col-1 lg:grid-cols-2 gap-2 place-content-center p-3'>
                <div className='winter-featured flex justify-center relative'>
                    <div className={`${styles.featured_overlay} p-4 lg:p-10`}>
                        <p className='font-medium'>New Arrivals</p>
                        <p className='lg:text-7xl text-4xl'>Winter '22</p>
                        <button className='shop-now-btn my-6 hover:bg-black hover:text-white border hover:border-black'>Shop Now</button>
                    </div>
                    <Image
                        loader={behanceLoader}
                        src="project_modules/fs/e7b848139247005.622c08e2bbbb8.jpg"
                        alt="Summer"
                        width={1000}
                        height={500}
                    />
                </div>
                <div className='summer-featured flex justify-center relative'>
                    <div className={`${styles.featured_overlay} p-4 lg:p-10`}>
                        <p className='font-medium'>New Arrivals</p>
                        <p className='lg:text-7xl text-4xl'>Winter '22</p>
                        <button className='shop-now-btn my-6 hover:bg-black hover:text-white border hover:border-black'>Shop Now</button>
                    </div>
                    <Image
                        loader={unsplashLoader}
                        src="photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto"
                        alt="Summer"
                        width={1000}
                        height={500}
                    />
                </div>
            </div>
  )
}

export default Feautured