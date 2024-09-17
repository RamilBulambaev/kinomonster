export interface PremiersInterface {
  total: number;
  items: PremierMovieIterface[];
}

export interface PremierMovieIterface {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: Country[];
  genres: Genre[];
  duration: number;
  premiereRu: string;
}

export interface Genre {
  genre: string;
}

export interface Country {
  country: string;
}
