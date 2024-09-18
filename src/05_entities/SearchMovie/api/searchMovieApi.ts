import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISearch } from "../model/type";

const BASE_URL = "https://kinopoiskapiunofficial.tech/api/v2.1/films/";
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

export const searchMovieApi = createApi({
  reducerPath: "searchMovieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSearchMovie: builder.query<ISearch, string>({
      query: (keyword) => {
        return {
          url: `/search-by-keyword`,
          headers: {
            accept: "application/json",
            "X-API-KEY": API_KEY,
          },
          params: {
            keyword,
            page: 1,
          },
        };
      },
    }),
  }),
});

export const { useGetSearchMovieQuery } = searchMovieApi;
