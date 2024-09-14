import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExternalSource, IMovie } from "./type";

export interface MovieState {
  movie: IMovie | null;
  externalSource: ExternalSource[] | null;
}

const initialState: MovieState = {
  movie: null,
  externalSource: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<IMovie>) => {
      state.movie = action.payload;
    },
    setExternalSource: (state, action: PayloadAction<ExternalSource[]>) => {
      state.externalSource = action.payload;
    },
  },
});

export const { setMovie, setExternalSource } = movieSlice.actions;

export default movieSlice.reducer;
