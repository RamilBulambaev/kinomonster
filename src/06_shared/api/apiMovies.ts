import axios from "axios";
import { getDate } from "../getDate/getDate";

const BASE_URL = import.meta.env.VITE_MOVIES_BASE_API_URL;
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

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
