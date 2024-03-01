import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["clothes"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://donate-backend.vercel.app/api/v1/",
  }),
  endpoints: () => ({}),
});
