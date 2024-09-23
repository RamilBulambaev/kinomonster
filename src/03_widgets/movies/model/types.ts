export interface IItems {
  total: number;
  totalPages: number;
  items: IItem[];
}

export interface IItem {
  kinopoiskId: number;
  imdbId?: string;
  nameRu: string;
  nameEn?: string | null;
  nameOriginal: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl?: string;
  description: string;
  ratingAgeLimits: string;
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
}
