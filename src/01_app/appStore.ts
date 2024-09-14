import { movieApi } from "@/05_entities/Movie/api/movieApi";
import movieReducer from "@/05_entities/Movie/model/movieSlice";
import { moviesApi } from "@/05_entities/MovieList/api/moviesApi";
import moviesReducer from "@/05_entities/MovieList/model/moviesSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    movies: moviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
