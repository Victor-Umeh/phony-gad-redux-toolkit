import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: () => {
      state.isOpen = true;
    },
    closeModal: () => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
