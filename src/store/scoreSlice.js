import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    score: 0
};

const scoreSlice = createSlice({

    name: "score",
    initialState,
    reducers: {
        addScore: (state, action) => {
            state.score = state.score + 1
        }
    }

})

export const { addScore } = scoreSlice.actions;
export default scoreSlice.reducer;