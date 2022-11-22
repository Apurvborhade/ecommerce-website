import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from './redux/cartSlice'

export const store = configureStore({
    reducer:{
        addtocart:addToCartReducer
    }
})