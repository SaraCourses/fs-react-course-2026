import { type PayloadAction, createSlice } from "@reduxjs/toolkit";


type Product = {
    id: number,
    name: string
}

type ProductStateType = {
    products: Product[]
}

const initialState: ProductStateType = {
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        }
    }
})

export const { setProducts, addProduct } = productsSlice.actions

export default productsSlice.reducer

// const action = {
//     type: 'products/setProducts',
//     payload: {}
// }