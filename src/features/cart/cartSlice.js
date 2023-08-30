import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";
const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

//fetching data in a redux
export const getCartItems = createAsyncThunk("cart/getCartIems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));
});

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
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems?.forEach((item) => {
        amount += item.amount;
        total += amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },

  //asychronous operation actions
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
