export interface ISearch {
  keyword: string;
  pagesCount: number;
  films: ISearchFilm[];
  searchFilmsCountResult: number;
}

export interface ISearchFilm {
  filmId: number;
  nameRu: string;
  nameEn?: string;
  type: string;
  year: string;
  description?: string;
  filmLength?: string;
  countries: Country[];
  genres: Genre[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface Genre {
  genre: string;
}

export interface Country {
  country: string;
}
