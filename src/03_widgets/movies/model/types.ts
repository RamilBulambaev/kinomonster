export interface RootInterface {
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
