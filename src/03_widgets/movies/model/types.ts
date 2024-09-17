export interface ItemInterface {
  total: number;
  totalPages: number;
  items: Item[];
}

export interface Item {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  ratingImbd: number;
  year: string;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
}

export interface Genre {
  genre: string;
}

export interface Country {
  country: string;
}

export enum ECollections {
  TOP_POPULAR_ALL = "TOP_POPULAR_ALL",
  TOP_POPULAR_MOVIES = "TOP_POPULAR_MOVIES",
  TOP_250_TV_SHOWS = "TOP_250_TV_SHOWS",
  TOP_250_MOVIES = "TOP_250_MOVIES",
  VAMPIRE_THEME = "VAMPIRE_THEME",
  COMICS_THEME = "COMICS_THEME",
  CLOSES_RELEASES = "CLOSES_RELEASES",
  FAMILY = "FAMILY",
  OSKAR_WINNERS_2021 = "OSKAR_WINNERS_2021",
  LOVE_THEME = "LOVE_THEME",
  ZOMBIE_THEME = "ZOMBIE_THEME",
  CATASTROPHE_THEME = "CATASTROPHE_THEME",
  KIDS_ANIMATION_THEME = "KIDS_ANIMATION_THEME",
  POPULAR_SERIES = "POPULAR_SERIES",
}
