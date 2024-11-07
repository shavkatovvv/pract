import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/create-bace-query";

export const loginApi = createApi({
    reducerPath: "login_api",
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        getLogin: build.mutation({
            query: (data) => {
                return {
                    url: "/login",
                    method: "POST",
                    body: data,
                };
            },
        }),
    }),
});

export const { useGetLoginMutation } = loginApi;
