import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MoviesCard posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;