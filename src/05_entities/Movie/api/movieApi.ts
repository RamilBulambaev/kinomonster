import {
  ExternalSourceInterface,
  ImagesInterface,
  IMovie,
  RelatedMoviesInterface,
} from "@/05_entities/Movie/model/type";
import { API_KEY, BASE_URL } from "@/06_shared/constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    getmovieExternalSource: builder.query<ExternalSourceInterface, string>({
      query: (id) => {
        return {
          url: `${id}/external_sources`,
          headers: {
            accept: "application/json",
            "X-API-KEY": API_KEY,
          },
        };
      },
    }),
    getMovieImages: builder.query<ImagesInterface, string>({
      query: (id) => {
        return {
          url: `${id}/images`,
          headers: {
            accept: "application/json",
            "X-API-KEY": API_KEY,
          },
        };
      },
    }),
    getRelatedMovies: builder.query<RelatedMoviesInterface, string>({
      query: (id) => {
        return {
          url: `${id}/similars`,
          headers: {
            accept: "application/json",
            "X-API-KEY": API_KEY,
          },
        };
      },
    }),
  }),
});

export const {
  useGetMovieQuery,
  useGetmovieExternalSourceQuery,
  useGetMovieImagesQuery,
  useGetRelatedMoviesQuery,
} = movieApi;
