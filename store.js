import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from './redux/addToCartSlice'

export const store = configureStore({
    reducer:{
        addtocart:addToCartReducer
    }
})