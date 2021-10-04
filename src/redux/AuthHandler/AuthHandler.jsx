import { createSlice } from "@reduxjs/toolkit";


const initState = {
    authHandler: null
}
const slice = createSlice({
    name:"[AuthHandler]",
    initialState:initState,
    reducers:{
        AuthSignUp: (state, {payload}) => {
            state.authHandler = payload.auth
        },
        AuthSignOut: (state) => {
            state.authHandler = null
        }
    }
})

export default slice.reducer;
export const {AuthSignOut, AuthSignUp} = slice.actions;
export const AuthSelector = (state) => state.auth