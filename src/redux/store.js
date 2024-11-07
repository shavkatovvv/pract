import { configureStore } from "@reduxjs/toolkit";
import serviceApi from "./service";
import { serviceReducer } from "./service";
import userReducer from "./reducer/user-reducer";
import { loadState, saveState } from "../config/storege";

export const store = configureStore({
    reducer: {
        user: userReducer,

        ...serviceReducer,
    },
    preloadedState: {
        user: loadState("user"),
    },

    middleware: (defaultMiddlware) =>
        defaultMiddlware().concat(...serviceApi.map((item) => item.middleware)),
});

store.subscribe(() => {
    saveState("user", store.getState().user);
});
