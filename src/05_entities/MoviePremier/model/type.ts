export interface IPremiers {
  total: number;
  items: IPremierMovie[];
}

export interface IPremierMovie {
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
