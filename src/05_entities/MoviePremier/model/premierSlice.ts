import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PremierMovieIterface } from "./type";

export interface PremireState {
  premier: PremierMovieIterface[] | null;
}

const initialState: PremireState = {
  premier: null,
};

export const premierSlice = createSlice({
  name: "premier",
  initialState,
  reducers: {
    setPremier: (state, action: PayloadAction<PremierMovieIterface[]>) => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      state.premier = action.payload
        .filter((movie) => {
          const premierDate = new Date(movie.premiereRu);
          return (
            premierDate.getMonth() === currentMonth &&
            movie.year === currentYear
          );
        })
        .slice(0, 10);
    },
  },
});

export const { setPremier } = premierSlice.actions;

export default premierSlice.reducer;
