import baseApi from "../baseApi/baseApi";

const gigsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGigs: builder.query({
      query: () => "/gigs",
      providesTags: ["Base"],
    }),
    getGigsById: builder.query({
      query: (id) => `/gigs/${id}`,
      providesTags: ["Base"],
    }),
    createGig: builder.mutation({
      query: (body) => ({
        url: `/gigs`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Base"],
    }),
    updateGig: builder.mutation({
      query: ({ id, body }) => ({
        url: `/gigs/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Base"],
    }),
    deleteGig: builder.mutation({
      query: (id) => ({
        url: `/gigs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Base"],
    }),
  }),
});

export const {
  useGetGigsQuery,
  useGetGigsByIdQuery,
  useCreateGigMutation,
  useDeleteGigMutation,
  useUpdateGigMutation,
} = gigsApi;
