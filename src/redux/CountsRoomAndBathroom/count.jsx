import { createSlice } from "@reduxjs/toolkit"

const init = {
    count1:1,
    count2:1,
}

const slice = createSlice({
    name:"[count]",
    initialState:init,
    reducers:{
        incrementCount1:(state) => {
            state.count1++
        },
        decrementCount1:(state) => {
            state.count1--
        },
        incrementCount2:(state) => {
            state.count2++
        },
        decrementCount2:(state) => {
            state.count2--
        },
        defaultChet:(state) => {
            state.count1 = 1;
            state.count2 = 1;
        }
    },
    
})

export default slice.reducer
export const {defaultChet,incrementCount1,incrementCount2,decrementCount1,decrementCount2} = slice.actions
export const countSelector = state => state.count