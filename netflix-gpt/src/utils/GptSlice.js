import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    GptSearchVal: false,
    movieName: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.GptSearchVal = !state.GptSearchVal;
    },
    addGptMovies: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieName = movieName;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearch, addGptMovies } = GptSlice.actions;

export default GptSlice.reducer;
