import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8088/api/" }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => 'users',
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Users', id })),
                    { type: 'Users', id: 'List' },
                ]
                : [{ type: 'Users', id: 'List' }]

        }),
        addUser: build.mutation({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Users', id: 'List' }]
        }),
        updateUser: build.mutation({
             query:({id, ...rest})=>({
                url: `users/${id}`,
                method: 'PUT',
                body: rest,
             }),
             invalidatesTags: [{ type: 'Users', id: 'List' }]
        }),
        deleteUser: build.mutation({
            query:(id)=>({
                url:`users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Users', id: 'List' }]
        })
    })
});

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation } = userApi;