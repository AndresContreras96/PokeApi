import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_API = "https://pokeapi.co/api/v2/";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API }),
  tagTypes: [],
  endpoints: () => ({}),
});
