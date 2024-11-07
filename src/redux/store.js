import { configureStore } from "@reduxjs/toolkit";
import serviceApi from "./service";
import { serviceReducer } from "./service";
import userReducer from "./reducer/user-reducer";
import { loadState, saveState } from "../config/storege";
import productReducer from "./reducer/product-reducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,

        ...serviceReducer,
    },
    preloadedState: {
        user: loadState("user"),
        product: loadState("product"),
    },

    middleware: (defaultMiddlware) =>
        defaultMiddlware().concat(...serviceApi.map((item) => item.middleware)),
});

store.subscribe(() => {
    saveState("user", store.getState().user);
    saveState("product", store.getState().product);
});
