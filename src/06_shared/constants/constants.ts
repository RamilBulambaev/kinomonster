import { ECollections } from "@/03_widgets/movies/model/types";

export const COLLECTIONS_TITLE_ARRAY = [
  "Популярные новинки",
  "Популярные фильмы",
  "Топ 250 сериалов",
  "Топ 250 фильмов",
  "Фильмы про вампиров",
  "Фильмы по комиксам",
];

export const COLLECTIONS_VALUE_ARRAY = [
  ECollections.TOP_POPULAR_ALL,
  ECollections.TOP_POPULAR_MOVIES,
  ECollections.TOP_250_TV_SHOWS,
  ECollections.TOP_250_MOVIES,
  ECollections.VAMPIRE_THEME,
  ECollections.COMICS_THEME,
];


export const BASE_URL = import.meta.env.VITE_MOVIES_BASE_API_URL;
export const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;