import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PremiersInterface } from "../model/type";
import { getDate } from "@/06_shared/getDate/getDate";

const BASE_URL = import.meta.env.VITE_MOVIES_BASE_API_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

export const premierApi = createApi({
  reducerPath: "premierApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPremier: builder.query<PremiersInterface, void>({
      query: () => {
        return {
          url: `premieres`,
          headers: {
            accept: "application/json",
            "X-API-KEY": API_KEY,
          },
          params: {
            year: getDate().year,
            month: getDate().mounth,
          },
        };
      },
    }),
  }),
});

export const { useGetPremierQuery } = premierApi;
