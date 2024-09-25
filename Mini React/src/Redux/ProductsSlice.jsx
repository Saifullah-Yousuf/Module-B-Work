import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze(
    {
        SUCCESS: 'SUCCESS',
        ERROR: 'error',
        Loading: 'LOADING'
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        status: STATUSES.SUCCESS,
    },
    reducers: {
        setProducts(state,action){
            state.data = action.payload;
        },

        setStatus(state,action){
            state.status = action.payload;
        }
    }
})

export const {setProducts,setStatus} = productsSlice.actions;
export default productsSlice.reducer;

export function fetchProducts(){
    return async function(dispatch){
        dispatch(setStatus(STATUSES.Loading));
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch(error){
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}
