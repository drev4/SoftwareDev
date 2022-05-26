import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
};

export const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        applySetUsers(state, action) {
            state.users = action.payload
        }
    }
})

export const { applySetUsers } = userReducer.actions

export default userReducer.reducer;