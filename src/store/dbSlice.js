import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    class: null,
    topic: null
}

const dbSlice = createSlice({
    name: "classtopic",
    initialState,
    reducers: {
        selectclass: (state, action) => {
            state.class = action.payload;
        },
        selecttopic: (state, action) => {
            state.topic = action.payload;
        },
        removeclasstopic: (state, action) => {
            state.topic = null;
            state.class = null;
        }
    }
})


export const { selectclass, selecttopic, removeclasstopic } = dbSlice.actions;
export default dbSlice.reducer;