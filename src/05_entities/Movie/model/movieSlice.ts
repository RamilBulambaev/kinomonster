import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExternalSource, IMovie, StaffInterface } from "./type";

export interface MovieState {
  movie: IMovie | null;
  externalSource: ExternalSource[] | null;
  staff: StaffInterface[] | null;
}

const initialState: MovieState = {
  movie: null,
  externalSource: null,
  staff: null,
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
    setStaffMovie: (state, action: PayloadAction<StaffInterface[]>) => {
      state.staff = action.payload;
    },
  },
});

export const { setMovie, setExternalSource, setStaffMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
