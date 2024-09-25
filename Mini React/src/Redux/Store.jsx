import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import productReducer from './ProductsSlice';
import CounterSlice from "./CounterSlice";

const Store = configureStore({
    reducer: {
        cart:cartReducer,
        product: productReducer,
        counter: CounterSlice
    }
})

export default Store