import { createSlice } from "@reduxjs/toolkit"


const init = {
    selectClean:"Regularly cleaning"
}

const slice = createSlice({
    name:"[select]",
    initialState:init,
    reducers:{
        setSelect:(state,{payload}) => {
            state.selectClean = payload.select
        }
    }
})

export default slice.reducer
export const {setSelect} = slice.actions
export const SelectSelector = state => state.select