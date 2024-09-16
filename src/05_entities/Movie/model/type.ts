export interface IMovie {
  kinopoiskId: number;
  kinopoiskHDId: string;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  countries: IMovieCountry[];
  genres: IMovieGenre[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}

export interface IMovieGenre {
  genre: string;
}

export interface IMovieCountry {
  country: string;
}

export interface ExternalSourceInterface {
  total: number;
  items: ExternalSource[];
}

export interface ExternalSource {
  url: string;
  platform: string;
  logoUrl: string;
  positiveRating: number;
  negativeRating: number;
  author: string;
  title: string;
  description: string;
}

export interface ImagesInterface {
  total: number;
  totalPages: number;
  items: Image[];
}

export interface Image {
  imageUrl: string;
  previewUrl: string;
}

export interface RelatedMoviesInterface {
  total: number;
  items: Related[];
}

export interface Related {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: string;
}

export interface StaffInterface {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description?: string;
  posterUrl: string;
  professionText: string;
  professionKey: string;
}
