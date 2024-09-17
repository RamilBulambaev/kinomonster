import { ItemInterface } from "@/03_widgets/movies/model/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_MOVIES_BASE_API_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<ItemInterface, string>({
      query: (type) => {
        return {
          url: "collections",
          headers: {
            accept: "application/json",
            "X-API-KEY": API_KEY,
          },
          params: {
            page: "1",
            limit: "8",
            type: type,
          },
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
