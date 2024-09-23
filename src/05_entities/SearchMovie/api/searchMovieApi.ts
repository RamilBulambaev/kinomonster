import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISearch } from "../model/type";
import { API_KEY } from "@/06_shared/constants/constants";

export const searchMovieApi = createApi({
  reducerPath: "searchMovieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/v2.1/films/",
  }),
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
