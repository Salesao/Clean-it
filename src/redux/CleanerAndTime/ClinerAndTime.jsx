import { createSlice } from "@reduxjs/toolkit";

const init = {
    name: "",
    expert:"",
    img:"",
    time:null,
    day:`${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`,
}

const slice = createSlice({
    name:"[ORDER]",
    initialState:init,
    reducers:{
        setCleaner: (state,{payload}) => {
            state.expert = payload.expert;
            state.name = payload.name;
            state.img = payload.img;
        },
        setTime:(state,{payload}) => {
            state.time = payload.time
        },
        setDate: (state,{payload}) => {
            state.day = payload.day;
        },
        clearOrder: (state) => {
            state.expert = "";
            state.name = "";
            state.time = null;
            state.img = ""
        }
    }
})

export default slice.reducer;
export const {setCleaner,clearOrder,setDate,setTime} = slice.actions;
export const orderSelector = state => state.order