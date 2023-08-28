import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../libs/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "part",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => console.log(action.payload, action),
  },
});

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
