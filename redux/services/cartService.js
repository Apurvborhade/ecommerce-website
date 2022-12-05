import axios from "axios";

const API_URL = '/api/cart/'

const getCartItems = async (token) => {

    const config = {
        headers : {
            Authorization:`Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL,config)

    return response.data;
}
const setCartItems = async (productId,token) => {
    const config = {
        headers : {
            Authorization:`Bearer ${token}`
        }
        
    }
    const response = await axios.post(API_URL,{'productId':productId},config)

    return response.data;
}
const deleteCartItems = async (productId,token) => {
    const config = {
        headers : {
            Authorization:`Bearer ${token}`
        }
        
    }
    const response = await axios.delete(API_URL + `${productId}`,config)

    return response.data;
}
const updateCartItems = async (data,token) => {
    const config = {
        headers : {
            Authorization:`Bearer ${token}`
        }
        
    }
    const response = await axios.put(
        API_URL + `${data.id}`,
        {
            totalAmount:data.productAmount,
            totalPrice:data.totalPrice
        },
        config
    )

    return response.data;
}

const cartService = {
    getCartItems,
    setCartItems,
    deleteCartItems,
    updateCartItems,
}

export default cartService