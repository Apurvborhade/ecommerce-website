import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name:'addtocart',
    initialState:{
        cartProducts:[]
    },
    reducers:{
        addToCart :(state,action) =>{
            if(state.cartProducts.length) 
                state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload.id);
            
            state.cartProducts = [...state.cartProducts,action.payload] 
            
        },
        deleteProduct:(state,action) =>{
            state.cartProducts.splice(state.cartProducts.findIndex(a => a.id === action.payload),1);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart,deleteProduct } = cartSlice.actions

export default cartSlice.reducer