import { ECollections, IItems } from "@/03_widgets/movies/model/types";
import { API_KEY, BASE_URL } from "@/06_shared/constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<IItems, { type: string; page: number }>({
      query: ({ type = ECollections.TOP_250_MOVIES, page = 1 }) => {
        return {
          url: "collections",
          headers: {
            accept: "application/json",
            "X-API-KEY": API_KEY,
          },
          params: {
            page: page,
            type: type,
          },
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
