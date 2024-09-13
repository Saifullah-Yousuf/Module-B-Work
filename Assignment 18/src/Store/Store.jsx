import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../CounterSlice/CounterSlice";

export const store = configureStore({
    reducer:{
        counter: CounterSlice
    }
})