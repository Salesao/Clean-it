import { createSlice } from "@reduxjs/toolkit";


const profileState = {
    firstName:"",
    lastName:"",
    phone:"",
    mail:"",
    initials:"",
    password:""
}

const slice = createSlice({
    name:"[Profile]",
    initialState:profileState,
    reducers: {
        getProfile: (state, {payload}) => {
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.phone = payload.phone;
            state.initials = payload.initials;
            state.mail = payload.mail;
        },
        setPassword: (state, {payload}) => {
            state.password = payload.password
        }
    }
})

export default slice.reducer;
export const {getProfile,setPassword} = slice.actions;
export const profileSelector = state => state.profile