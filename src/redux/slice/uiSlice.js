import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarHovered: false, 
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSidebarHovered: (state, action) => {
      state.isSidebarHovered = action.payload;
    },
  },
});

export const { setSidebarHovered } = uiSlice.actions;

export const selectIsSidebarHovered = (state) => state.ui.isSidebarHovered; 

export default uiSlice.reducer;
