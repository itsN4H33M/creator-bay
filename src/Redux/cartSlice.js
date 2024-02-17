import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (product) =>
          product.productDetails._id === action.payload.productDetails._id &&
          product.size === action.payload.size
      );
      existingProduct
        ? (existingProduct.counter += action.payload.counter)
        : state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter(
        (product) =>
          !(
            product.productDetails._id === action.payload.productDetails._id &&
            product.size === action.payload.size
          )
      );
    },
  },
});

export const { addToCart, removeFromCart, updateCounter } = cartSlice.actions;
export default cartSlice.reducer;
