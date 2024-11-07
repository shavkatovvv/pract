import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/create-bace-query";

export const phoneApi = createApi({
  reducerPath: "phone_api",
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    getPhones: build.query({
      query: () => "/phones",
    }),
  }),
});

export const { useGetPhonesQuery } = phoneApi;
