import React, { useEffect, useState } from 'react'

// Routing
import {useRouter} from 'next/router'

// Components
import Header from "../../components/Header"

// Constants
import { filters,filterOptions} from '../../app/constants'

// Icons
import { IoIosArrowDown } from 'react-icons/io'

import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Footer'
import { useDispatch } from 'react-redux'



const Index = ({ products }) => {
    const [isShopPage, setIsShopPage] = useState(true);
    const [isFilterOn, setIsFilterOn] = useState(false);
    const [currentFilter, setCurrentFilter] = useState('');
    const [options, setOptions] = useState([]);
    const [filter,setFilter] = useState([]) 

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
            router.push("/404");
        }
    },[collectionSection])

    

    // handle filter dropdown
    const filterHandle = (item) => {
        setIsFilterOn(!isFilterOn)
        setCurrentFilter(item)
    }
    // filterOptions

    useEffect(() => {
        setOptions(filterOptions.filter((item) => item.title === currentFilter.title))
    }, [currentFilter])
    

    

        return (
    <>
        <Header isShopPage={isShopPage}/>
        <div className='mb-20'>
            <div className='text-black mt-28 p-10'>
                <h2 className='text-7xl'>All {collectionSection}'s</h2>
                <p className=' text-2xl font-light my-5'>The {collectionSection}swear styles are purposefully designed to create wardrobe <br/> essentials that will last a lifetime.</p>
            </div>

            <div className='controls mt-20 flex justify-between items-center sticky z-10 '>
                <div className='filter flex overflow-x-scroll overflow-y-hidden lg:overflow-hidden pb-3'>
                    {filters.map((item) => (
                        <button onClick={() => filterHandle(item)} key={item.title} className='mx-10 text-2xl flex items-center justify-center outline-none'>{item.title} <IoIosArrowDown  className='mx-3'/></button>
                    ))}
                </div>
                        
                <div className={`w-pcent control-settings absolute top-20 bg-headercol p-10 border-t ${!isFilterOn && 'opacity-0 pointer-events-none'}`}>
                    <form className='grid grid-cols-3'>
                            {options.length && options[0].options.map((option) => (
                                <div className='flex justify-start my-5' key={option}>
                                    <input type="checkbox" id={option} name={option} value={option} style={{ width:'30px',}} onChange={() => handleCheckBox(value.id)}/>
                                    <label for={option} className='text-xl mx-2'>{option}</label><br/>
                                </div>
                            )) 
                        }
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

export async function getServerSideProps() {

    const res = await fetch('http://localhost:5000/api/products')
    const products = await res.json()
    
    return {
      props: {
        products,
      },
    }
  }


export default Index