import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import { Movie_Poster_URL } from "../utils/constants";

const AboutMovie = ({ movieID }) => {
  useMovieDetails(movieID);
  const deatils = useSelector((store) => store?.movie?.MovieDetails);
  if (!deatils) return null;
  const {
    backdrop_path,
    original_language,
    overview,
    release_date,
    runtime,
    status,
    title,
    vote_average,
  } = deatils;

  return (
    <div className="text-white">
      <div className="text-3xl font-bold m-2">About Movie</div>
      <div className="border-black rounded-lg bg-gray-800 p-2 m-2">
        <div className="flex justify-center">
          <img alt="logo" src={Movie_Poster_URL + backdrop_path}></img>
        </div>
        <div>
          <div className="flex justify-between p-2">
            <h1 className="text-3xl">{title}</h1>
            <h3 className="text-xl">Original Language : {original_language}</h3>
          </div>
          <p className="p-2 text-xl">
            Overview:
            <h3 className="text-base">{overview}</h3>
          </p>
        </div>
      </div>
      <div className="flex p-2 m-2 border-black rounded-lg bg-gray-800 justify-between">
        <div>
          <h3 className="text-xl">Release Date: {release_date}</h3>
          <h3 className="text-xl">Average Rating: {vote_average}</h3>
        </div>
        <div>
          <h3 className="text-xl">Runtime : {runtime} minutes</h3>
          <h3 className="text-xl">Status : {status}</h3>
        </div>
      </div>
    </div>
  );
};
export default AboutMovie;
