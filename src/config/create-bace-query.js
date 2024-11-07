import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loadState } from "./storege";

export const createBaseQuery = () => {
    const user = loadState("user");
    const token = user?.accessToken;

    return fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        prepareHeaders: (headers) => {
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    });
};
