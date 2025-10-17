import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    authStatus: false,
    username: null
}

const authSlice = createSlice({
    name: "userState",
    initialState,
    reducers: {
        login: (state, action) => {
            state.authStatus = true;
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.authStatus = false;
            state.username = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
