import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieScreen = ({ movieID }) => {
  useMovieTrailer(movieID);
  const trailerID = useSelector((store) => store.movie?.trailerVideo);
  // console.log(trailerID);
  // if(!trailerID) return null;
  return (
    <div className="w-full ">
      <iframe
        width="980"
        height="640"
        src={
          "https://www.youtube.com/embed/" +
          trailerID?.key +
          "?autoplay=1mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieScreen;
