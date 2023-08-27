import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import todoReducer from "../features/cart/todoSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    todo: todoReducer,
  },
});

export default store;
