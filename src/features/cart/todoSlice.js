import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isCompleted: false,
  pending: true,
};

const todoSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {},
});

// console.log(cartSlice);
export default todoSlice.reducer; 
