import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../libs/cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      //remove item with an id match from cart items array list
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      //get cartItem that matches the payload id
      const itemId = payload;
      //using the find HOF, find the item that matches the payload id
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      //mutate the state prop for the returned item
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      //just as in the icrease action, destructure the payload from the action {}, store in a variable, get item that matches the payload find(callback(id)), the rest is there.
      const itemId = payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount =
        cartItem.amount === 0 ? cartItem.amount : cartItem.amount - 1;
    },
  },
});

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
