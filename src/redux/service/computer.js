import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/create-bace-query";

export const compApi = createApi({
    reducerPath: "comp_api",
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        getComps: build.query({
            query: (data) => {
                return {
                    url: "/computer",
                    method: "GET",
                    body: data,
                };
            },
        }),
    }),
});

export const { useGetCompsQuery } = compApi;
