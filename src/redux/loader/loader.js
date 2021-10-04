import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  success:false,
  modalActive:false
};

const slice = createSlice({
  name: "[Loader]",
  initialState: initState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      document.querySelector("body").style.overflow = "hidden";
    },
    stopLoading: (state) => {
      state.isLoading = false;
      document.querySelector("body").style = "";
    },
    successStart:(state) => {
      state.success = true
    },
    successEnd:(state) => {
      state.success = false
    },
    setModalActive:(state) => {
      state.modalActive = !state.modalActive
      document.querySelector("body").style = ""
    }
  },
});

export default slice.reducer;
export const { startLoading, stopLoading,successStart,successEnd,setModalActive } = slice.actions;
export const loaderSelector = (state) => state.loader;