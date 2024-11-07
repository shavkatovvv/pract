import { createSlice } from "@reduxjs/toolkit";

const prodReducer = createSlice({
    name: "product",
    initialState: {
        products_list: [],
    },
    reducers: {
        addProd: (state, action) => {
            const oldproduct = state.products_list.find(
                (item) => item.id === action.payload.id
            );
            if (!oldproduct) {
                state.products_list.push(action.payload);
            }
        },
    },
});

export default prodReducer.reducer;

export const { addProd } = prodReducer.actions;
