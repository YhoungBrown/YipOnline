import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  id: string
  name: string
  price: number
  description: string
  photoUrl: string
}

interface ProductState {
  products: Product[]
}

const initialState: ProductState = {
  products: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload
      )
    },
  },
})

export const { addProduct, removeProduct } = productSlice.actions
export default productSlice.reducer
