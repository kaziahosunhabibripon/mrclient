import baseApi from "../baseApi/baseApi";

const adminUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAminUsers: builder.query({
      query: () => "/adminUsers",
      providesTags: ["Base"],
    }),
    getAdminUserById: builder.query({
      query: (id) => `/adminUsers/${id}`,
      providesTags: ["Base"],
    }),
    postAdminUser: builder.mutation({
      query: (data) => ({
        url: "/adminUsers",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Base"]
    })
  }),
});

export const { useGetAminUsersQuery, useGetAdminUserByIdQuery, usePostAdminUserMutation } = adminUserApi;
