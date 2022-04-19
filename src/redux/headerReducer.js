import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

export const headerSlice = createSlice({
  name: "headerMenu",
  initialState,
  reducers: {
    menuToggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { menuToggle } = headerSlice.actions;

export default headerSlice.reducer;
