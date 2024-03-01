import { baseAPi } from "../../baseApi";

const clothApi = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    createCloth: builder.mutation({
      query: (data) => (
        console.log(data),
        {
          url: "create-cloth",
          method: "POST",
          body: data,
        }
      ),
    }),
    userBuyCloth: builder.mutation({
      query: (data) => ({
        url: "buy-cloth",
        method: "POST",
        body: data,
      }),
    }),
    allClothes: builder.query({
      query: () => ({
        url: "all-clothes",
        method: "GET",
      }),
      providesTags: ["clothes"],
    }),
    deleteCloth: builder.mutation({
      query: (id) => ({
        url: `delete-cloth/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clothes"],
    }),
    upCloth: builder.mutation({
      query: ({ id, data }) => (
        console.log(data, id),
        {
          url: `up-cloth/${id}`,
          method: "PUT",
          body: data,
        }
      ),
    }),
    detailsCloth: builder.query({
      query: ({ id }) => ({
        url: `cloth/${id}`,
        method: "GET",
      }),
    }),
    topDonorCreator: builder.query({
      query: () => ({
        url: `top-donor-creator`,
        method: "GET",
      }),
    }),
    getAllComment: builder.query({
      query: () => ({
        url: `comments`,
        method: "GET",
      }),
    }),
    commentDonor: builder.mutation({
      query: (data) => ({
        url: `comment`,
        method: "POST",
        body: data,
      }),
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `/review`,
        method: "POST",
        body: data,
      }),
    }),
    getReview: builder.query({
      query: () => ({
        url: `reviews`,
        method: "GET",
      }),
    }),
    createVolunteer: builder.mutation({
      query: (data) => ({
        url: `/volunteer`,
        method: "POST",
        body: data,
      }),
    }),
    getAllVolunteer: builder.query({
      query: () => ({
        url: `volunteers`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateClothMutation,
  useAllClothesQuery,
  useDeleteClothMutation,
  useUpClothMutation,
  useUserBuyClothMutation,
  useDetailsClothQuery,
  useTopDonorCreatorQuery,
  useCommentDonorMutation,
  useCreateReviewMutation,
  useGetReviewQuery,
  useCreateVolunteerMutation,
  useGetAllVolunteerQuery,
} = clothApi;
