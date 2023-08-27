import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../libs/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {},
});

// console.log(cartSlice);
export default cartSlice.reducer;
