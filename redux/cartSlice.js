import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name:'addtocart',
    initialState:{
        cartProducts:[],
        orderAmount:0
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
        
        setAmount:(state,action) => {
            let updatedProduct = state.cartProducts.map((currElem) => {
                if(currElem.id === action.payload.id) {
                    let Amount = action.payload.productAmount;
                    
                    return {
                        ...currElem,
                        amount:Amount
                    }
                } else {
                    return currElem
                }
            }) 

            return {...state,cartProducts:updatedProduct}
        },

        calcPrice:(state) => {
            state.orderAmount = state.cartProducts.reduce((init,curElem) => {
                const {price,amount} = curElem;

                init = init + price * amount;

                return init;
            },0)
        }
    },
});

// Action creators are generated for each case reducer function
export const { addToCart,deleteProduct,setAmount,calcPrice } = cartSlice.actions

export default cartSlice.reducer