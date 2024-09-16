import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { StaffInterface } from "../model/type";

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

export const staffApi = createApi({
  reducerPath: "staffApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/v1/",
  }),
  endpoints: (builder) => ({
    getStaffMovie: builder.query<StaffInterface[], string>({
      query: (id) => {
        return {
          url: "staff",
          headers: {
            accept: "application/json",
            "X-API-KEY": API_KEY,
          },
          params: {
            filmId: id,
          },
        };
      },
    }),
  }),
});

export const { useGetStaffMovieQuery } = staffApi;
