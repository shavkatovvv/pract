import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: "user",
    initialState: {
        accessToken: null,
        user: null,
    },
    reducers: {
        createUser: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        removeUser: () => {
            return {
                accessToken: null,
                user: null,
            };
        },
    },
});

export default userReducer.reducer;
export const { createUser, removeUser } = userReducer.actions;
