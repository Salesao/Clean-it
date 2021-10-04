import { createSlice } from "@reduxjs/toolkit";

const initState = {
  activePage: "regularly",
};

const slice = createSlice({
  name: "[Carusel]",
  initialState: initState,
  reducers: {
    changePageCarusel: (state, { payload }) => {
      state.activePage = payload.page;
    },
  },
});

export default slice.reducer;
export const { changePageCarusel } = slice.actions;
export const caruselSelector = (state) => state.carusel;
