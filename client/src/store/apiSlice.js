import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base URL for API requests
const baseURL = "http://localhost:8000";

// Create an API slice with the specified base query and endpoints
export const apiSlice = createApi({
  // Set up the base query with the base URL
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

  // Define API endpoints
  endpoints: (builder) => ({
    // Define a query endpoint to fetch categories
    getCategories: builder.query({
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),

    // Define a query endpoint to fetch labels
    getLabels: builder.query({
      query: () => "/api/labels",
      providesTags: ["transactions"],
    }),

    // Define a mutation endpoint to add new transactions
    addTransactions: builder.mutation({
      query: (initialTransaction) => ({
        url: "api/transactions",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transactions"],
    }),

    // Define a mutation endpoint to delete a transaction by ID
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: "/api/transactions",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transactions"],
    }),
  }),
});

export default apiSlice;
