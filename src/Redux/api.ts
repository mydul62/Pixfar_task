import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<[],string>({
      query: () => '/products',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi; 
export default productsApi;
