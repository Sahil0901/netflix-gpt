import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    GptSearchVal: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.GptSearchVal = !state.GptSearchVal;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    removeGptMovies: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const { toggleGptSearch, addGptMovies, removeGptMovies } = GptSlice.actions;

export default GptSlice.reducer;
