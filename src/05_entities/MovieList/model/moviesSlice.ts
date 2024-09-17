import { Item } from "@/03_widgets/movies/model/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MoviesState {
  movies: Item[];
  partMovies: Item[];
}

const initialState: MoviesState = {
  movies: [],
  partMovies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Item[]>) => {
      state.movies = action.payload;
    },
    setPartMovies: (state, action: PayloadAction<Item[]>) => {
      state.partMovies = action.payload.slice(0, 8);
    },
  },
});

export const { setMovies, setPartMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
