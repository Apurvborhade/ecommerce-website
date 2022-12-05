import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import cartService from './services/cartService'

    let user
    // Get user from localStorage
    if (typeof window !== 'undefined') {
        user = JSON.parse(localStorage.getItem('user'))
    }

    const initialState = {
        cartProducts:[],
        orderPrice:0,
        isError:false,
        isSuccess:false,
        isLoading:false,
        message:'',
        update:null
    }

    // Get Cart Items
    export const getCartItems = createAsyncThunk('cart/getitem', async (id,thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await cartService.getCartItems(token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    })
    // Set Cart Items
    export const setCartItems = createAsyncThunk('cart/setitem', async (productId,thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await cartService.setCartItems(productId,token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    })
    // Delete Cart Items
    export const deleteCartItems = createAsyncThunk('cart/deleteitem', async (productId,thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await cartService.deleteCartItems(productId,token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    })
    
    export const updateCartItems = createAsyncThunk('cart/updateitem',async (data,thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await cartService.updateCartItems(data,token)

        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
          
            return thunkAPI.rejectWithValue(message)
        }
    })
    

     

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        reset:(state) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = false
                state.message = ''
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(getCartItems.pending,(state) => {
                state.isLoading = true
            })
            .addCase(getCartItems.fulfilled,(state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.cartProducts = action.payload
            })
            .addCase(getCartItems.rejected,(state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(setCartItems.pending,(state) => {
                state.isLoading = true
            })
            .addCase(setCartItems.fulfilled,(state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.cartProducts.push(action.payload)
            })
            .addCase(setCartItems.rejected,(state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteCartItems.pending,(state) => {
                state.isLoading = true
            })
            .addCase(deleteCartItems.fulfilled,(state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.cartProducts = action.payload
            })
            .addCase(deleteCartItems.rejected,(state,action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateCartItems.pending,(state) => {
                state.isLoading = true
            })
            .addCase(updateCartItems.fulfilled,(state,action) => {
                state.isLoading = false
                state.isSuccess = true
                // state.cartProducts = action.payload
            })
            .addCase(updateCartItems.rejected,(state,action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            
    }
});

// Action creators are generated for each case reducer function
export const { reset } = cartSlice.actions

export default cartSlice.reducer