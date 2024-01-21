import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import Shimmer from "../utils/Shimmer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  // if(!movies) return null;
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" -mt-52 relative z-20 pl-12">
          <MoviesList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MoviesList title="Popular" movies={movies.PopularMovies} />
          <MoviesList title="Upcoming Movies" movies={movies.UpcomingMovies} />
          <MoviesList title="Thriller" movies={movies.nowPlayingMovies} />
          <MoviesList title="Comedy" movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
