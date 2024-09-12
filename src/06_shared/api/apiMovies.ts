import axios from "axios";
import { getDate } from "../getDate/getDate";

const BASE_URL = import.meta.env.VITE_MOVIES_BASE_API_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

const optionsPopularMovies = {
  method: "GET",
  url: `${BASE_URL}collections`,

  params: { page: "1", limit: "1", type: "TOP_250_MOVIES" },
  headers: {
    accept: "application/json",
    "X-API-KEY": API_KEY,
  },
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.request(optionsPopularMovies);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const optionsPremieres = {
  method: "GET",
  url: `${BASE_URL}premieres`,

  params: {
    year: getDate().year,
    month: getDate().mounth,
  },
  headers: {
    accept: "application/json",
    "X-API-KEY": API_KEY,
  },
};

export const getPremieres = async () => {
  try {
    const response = await axios.request(optionsPremieres);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (id: string) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: `${BASE_URL}/${id}`,
      headers: {
        accept: "application/json",
        "X-API-KEY": API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
