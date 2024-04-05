import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Product } from "../../types"

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_FAKE_API }),
  endpoints: builder => ({
    getProducts: builder.query<Product[], null>({
      query: () => "/products",
      providesTags: () => [
        {
          type: "Product",
        },
      ],
    }),
    getProduct: builder.query<Product, string>({
      query: id => `/products/${id}`,
    }),
    createProduct: builder.mutation({
      query: product => ({
        body: product,
        url: "/products",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "Product",
        },
      ],
    }),
    deleteProduct: builder.mutation({
      query: productId => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
    }),
    editProduct: builder.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `products/${id}`,
          method: "PUT",
          body: body.formData,
        }
      },
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = api
