import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "./type";

export interface MovieState {
  movie: IMovie | null;
}

const initialState: MovieState = {
  movie: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<IMovie>) => {
      state.movie = action.payload;
    },
  },
});

export const { setMovie } = movieSlice.actions;

export default movieSlice.reducer;
