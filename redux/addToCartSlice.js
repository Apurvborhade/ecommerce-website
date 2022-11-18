import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
    name:'addtocart',
    initialState:[],
    reducers:{
        addToCart :(state) =>{
            state.push({name:"Apurva"})
            console.log(state)
        }
    },
});

// Action creators are generated for each case reducer function
export const { addToCart } = addToCartSlice.actions

export default addToCartSlice.reducer