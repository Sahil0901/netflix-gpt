import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        PopularMovies: null,
        UpcomingMovies: null,
        MovieDetails: null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer: (state, action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.PopularMovies = action.payload;
        },
        addUpcomingMovies: (state,action)=>{
            state.UpcomingMovies = action.payload;
        },
        addMovieDetails: (state, action)=>{
            state.MovieDetails = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addUpcomingMovies, addMovieDetails} = moviesSlice.actions;

export default moviesSlice.reducer;