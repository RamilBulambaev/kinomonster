import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import favoritesReducer from "@/05_entities/favorite/model/favoriteSlice";
import { movieApi } from "@/05_entities/Movie/api/movieApi";
import { staffApi } from "@/05_entities/Movie/api/staffApi";
import movieReducer from "@/05_entities/Movie/model/movieSlice";
import { moviesApi } from "@/05_entities/MovieList/api/moviesApi";
import moviesReducer from "@/05_entities/MovieList/model/moviesSlice";
import { premierApi } from "@/05_entities/MoviePremier/api/premierApi";
import premierReducer from "@/05_entities/MoviePremier/model/premierSlice";
import { searchMovieApi } from "@/05_entities/SearchMovie/api/searchMovieApi";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    movies: moviesReducer,
    premier: premierReducer,
    favorites: favoritesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [staffApi.reducerPath]: staffApi.reducer,
    [premierApi.reducerPath]: premierApi.reducer,
    [searchMovieApi.reducerPath]: searchMovieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(movieApi.middleware)
      .concat(staffApi.middleware)
      .concat(premierApi.middleware)
      .concat(searchMovieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
