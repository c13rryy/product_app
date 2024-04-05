import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { LocalProduct } from "../../types"

export const localApi = createApi({
  reducerPath: "localApi",
  tagTypes: ["ProductLocal"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_LOCAL_API }),
  endpoints: builder => ({
    getLocalProducts: builder.query<LocalProduct[], null>({
      query: () => "/",
      providesTags: () => [
        {
          type: "ProductLocal",
        },
      ],
    }),
    getLocalProduct: builder.query<LocalProduct, string>({
      query: id => `/${id}`,
      providesTags: () => [
        {
          type: "ProductLocal",
        },
      ],
    }),
    createLocalProduct: builder.mutation({
      query: product => ({
        body: product,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "ProductLocal",
        },
      ],
    }),
    deleteLocalProduct: builder.mutation({
      query: productId => ({
        url: `/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: () => [
        {
          type: "ProductLocal",
        },
      ],
    }),
    editLocalProduct: builder.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `/${id}`,
          method: "PUT",
          body: body.formData,
        }
      },
      invalidatesTags: () => [
        {
          type: "ProductLocal",
        },
      ],
    }),
  }),
})

export const {
  useCreateLocalProductMutation,
  useGetLocalProductQuery,
  useGetLocalProductsQuery,
  useEditLocalProductMutation,
  useDeleteLocalProductMutation,
} = localApi
