import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
};

const cartSlice = createSlice({
    name: 'Cart',
    initialState: getCartFromLocalStorage(),
    reducers: {
        add(state, action) {
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state)); 
        },
        remove(state, action) {
            const updatedCart = state.filter(item => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart; 
        },
        clearCart(state) {
            localStorage.removeItem('cart'); 
            return [];
        }
    }
});

export const { add, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
