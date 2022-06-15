import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../config/env";
import IUser from "../interfaces/IUser";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "contact",
        }),
        getUserById: builder.query({
            query: (params) =>
                `contact/${params.userId}`,
        }),
        createUser: builder.mutation<IUser, Partial<IUser>>({
            query(body) {
                return {
                    url: `/contact/`,
                    method: 'POST',
                    body: body,
                }
            },
        }),
        deleteUserById: builder.mutation<{ success: boolean; userId: number | string }, number>({
            query: (userId: number | string) => ({
                url: `contact/${userId}`,
                method: 'DELETE',
            })
        }),
        updateUserById: builder.mutation<IUser, { id: number | string; data: Partial<IUser> }>({
            query: ({ id, data }) => ({
                url: `contact/${id}`,
                method: 'PUT',
                body: data,
            }),
        }),
    }),
});

// @ts-ignore
export const { useGetUsersQuery, useGetUserByIdQuery, useUpdateUserByIdMutation, useDeleteUserByIdMutation, useCreateUserMutation} = userApi;