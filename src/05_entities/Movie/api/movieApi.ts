import { IMovie } from "@/05_entities/Movie/model/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_MOVIES_BASE_API_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovie: builder.query<IMovie, string>({
      query: (id) => {
        return {
          url: `/${id}`,
          headers: {
            accept: "application/json",
            "X-API-KEY": API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetMovieQuery } = movieApi;
