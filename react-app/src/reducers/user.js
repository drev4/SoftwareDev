import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
};

export const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        applySetUsers(state, action) {
            state.users = action.payload
        },
        addUser(state, action) {
            state.users.push(action.payload)
        }
    }
})

export const { applySetUsers, addUser } = userReducer.actions

export default userReducer.reducer;