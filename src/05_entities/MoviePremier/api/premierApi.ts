import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPremiers } from "../model/type";
import { getDate } from "@/06_shared/helpers/getDate/getDate";
import { API_KEY, BASE_URL } from "@/06_shared/constants/constants";

export const premierApi = createApi({
  reducerPath: "premierApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPremier: builder.query<IPremiers, void>({
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
