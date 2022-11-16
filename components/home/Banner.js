import React from 'react'

import styles from "../../styles/Home.module.css"

const Banner = () => {
  return (
    <div>
        <div className='banner'>
                <div className={styles.overlay} >
                    <div className='landing-cta flex flex-col items-center'>
                        <h1 className='lg:text-9xl text-7xl'>Pre-Black Sale</h1>
                        <p className='text-6xl overflow-hidden my-16'>Up to 70%</p>
                        <div className='cta-btns font-medium'>
                            <button className='cta-btn'>Shop Women</button>
                            <button className='cta-btn'>Shop Men</button>
                        </div>
                    </div>
                </div>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/c62e48148959069.62df041aebef4.jpg' className={`${styles.banner_img}`}></img>
            </div>
    </div>
  )
}

export default Banner