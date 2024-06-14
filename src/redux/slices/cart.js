import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state.products, action.payload)
      // STEP1 : Check item already exists inside the cart or not
      // STEP2 : If item already exists, increase its quantity
      // STEP3 : If it's doesn't exists, add item into the cart
    },
    removeFromCart: (state, action) => {},
    clearCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
