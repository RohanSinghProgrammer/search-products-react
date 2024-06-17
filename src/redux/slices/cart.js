import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //! console.log(state.products, action.payload)
      // STEP1 : Check item already exists inside the cart or not
      let prodIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      // STEP2 : If item already exists, increase its quantity
      if (prodIndex !== -1) {
        // TODO: Increment Qty
        let allProds = [...state.products];
        let updatedProd = {...state.products[prodIndex], qty: state.products[prodIndex].qty + 1}
        allProds[prodIndex] = updatedProd;
        return {
          ...state,
          products: allProds
        }
      }
      // STEP3 : If it's doesn't exists, add item into the cart
      else {
        // TODO: Add item into cart
        toast.success("Product added successfully!")
        return {
          ...state,
          products: [{ ...action.payload, qty: 1 }],
        };
      }
    },
    removeFromCart: (state, action) => {},
    clearCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
