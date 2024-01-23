import React from "react";
import MoviesCard from "./MoviesCard";
import { Link } from "react-router-dom";

const MoviesList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6">
      <h1 className="md:text-3xl text-xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (<Link key={movie.id} to={"/browse/"+ movie.id}>
            <MoviesCard posterPath={movie.poster_path} />
            </Link>))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
