import React, { useEffect, useState } from 'react'

// Routing
import {useRouter} from 'next/router'

// Components
import Header from "../../components/Header"

// Constants
import { filters, Menu } from '../../app/constants'
import products from '../../app/products.json'

// Icons
import { IoIosArrowDown } from 'react-icons/io'
import Image from 'next/image'
import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Footer'

const index = () => {
    const [isShopPage, setIsShopPage] = useState(true);
    const [isFilterOn, setIsFilterOn] = useState(false);
    
    // Get Routes
    
    const router = useRouter()
    const collectionSection = router.query.name;
    const filteredProuducts = products.filter((item) => item.section === collectionSection);
    
    // Router Push to 404 if section not found
    useEffect(() =>{
        if (
            collectionSection == "Women" || 
            collectionSection == "Men"   ||
            collectionSection == "Kids"   ||
            collectionSection == "Sale"   ||
            collectionSection == "Accessories" ||
            collectionSection == undefined  
        ){} else {
            router.push("/");
            console.log(collectionSection)
        }
    },[collectionSection])
        
        return (
    <>
        <Header isShopPage={isShopPage}/>
        <div className='mb-20'>
            <div className='text-black mt-28 p-10'>
                <h2 className='text-7xl'>All {collectionSection}'s</h2>
                <p className=' text-2xl font-light my-5'>The {collectionSection}swear styles are purposefully designed to create wardrobe <br/> essentials that will last a lifetime.</p>
            </div>
            
            <div className='controls mt-20 flex justify-between items-center sticky z-10'>
                <div className='filter flex'>
                    {filters.map((item) => (
                        <button onClick={() => setIsFilterOn(!isFilterOn)} className='mx-10 text-2xl flex items-center justify-center outline-none'>{item.title} <IoIosArrowDown  className='mx-3'/></button>
                    ))}
                </div>

                <div className={`w-100 control-settings absolute top-20 bg-headercol p-10 border-t ${!isFilterOn && 'opacity-0 pointer-events-none'}`}>
                    <form className='grid grid-cols-3'>
                        <div className='flex justify-start my-5'>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ width:'30px',}}/>
                            <label for="vehicle1" className='text-xl mx-2'> Blanket</label><br/>
                        </div>
                        <div className='flex justify-start my-5'>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ width: 30 + 'px'}} />
                            <label for="vehicle1" className='text-xl mx-2'> I have a bike</label><br/>
                        </div>
                        <div className='flex justify-start my-5'>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ width: 30 + 'px'}} />
                            <label for="vehicle1" className='text-xl mx-2'> I have a bike</label><br/>
                        </div>
                        <div className='flex justify-start my-5'>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ width: 30 + 'px'}} />
                            <label for="vehicle1" className='text-xl mx-2'> I have a bike</label><br/>
                        </div>
                        <div className='flex justify-start my-5'>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ width: 30 + 'px'}} />
                            <label for="vehicle1" className='text-xl mx-2'> I have a bike</label><br/>
                        </div>
                    </form>
                </div>
            </div>
            {/* Controls End */}

            {/* Products */}
            <div className='products mt-0 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 p-10'>
                {filteredProuducts.length ? filteredProuducts.map((product) => (
                   <ProductCard key={product.id} isShopPage={true} product={product}/>     
                )) :(
                    <div className='flex justify-center w-100 py-40 text-3xl pr-24 '>No Product Found  ¯\_(ツ)_/¯</div>
                )}
            </div>
        </div>
        <Footer />
    </>
  )
}

export default index