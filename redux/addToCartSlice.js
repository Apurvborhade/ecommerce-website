import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
    name:'addtocart',
    initialState:[],
    reducers:{
        addToCart :(state,product) =>{
            state.push(product)
        },
        deleteProduct:(state,id) =>{
            state.splice(state.findIndex(a => a.payload.id === id.payload),1);
        }
    },
});

// Action creators are generated for each case reducer function
export const { addToCart,deleteProduct } = addToCartSlice.actions

export default addToCartSlice.reducer