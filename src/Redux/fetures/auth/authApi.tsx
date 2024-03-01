import { baseAPi } from "../../baseApi";

const authApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "registers",
        method: "GET",
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetAllUserQuery,
} = authApi;
