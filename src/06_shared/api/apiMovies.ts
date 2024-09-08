import axios from "axios";

const BASE_URL = import.meta.env.VITE_MOVIES_BASE_API_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

const options = {
  method: "GET",
  url: `${BASE_URL}collections`,

  params: { page: "1", limit: "1", type: "TOP_250_MOVIES" },
  headers: {
    accept: "application/json",
    "X-API-KEY": API_KEY,
  },
};

export const getMovies = async () => {
  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
