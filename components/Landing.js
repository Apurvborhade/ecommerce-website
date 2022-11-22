import React from 'react'
import Image from 'next/image'

import styles from "../styles/Home.module.css"
import Banner from './home/Banner'
import Feautured from './home/Feautured'
import ShopByCategory from './home/ShopByCategory'

const Landing = () => {
    
  return (
    <div className='landing'>

        {/* Banner */}
            <Banner />
        {/* Banner */}

        {/* Featured */}
            <Feautured />
        {/* Featured */}
        
        {/* Shop By Category */}
            <ShopByCategory />
        {/* Shop By Category */}
    
    </div>
  )
}

export default Landing