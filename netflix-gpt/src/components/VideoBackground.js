import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  useMovieTrailer(movieID);
  const trailerID = useSelector((store) => store.movie?.trailerVideo);
  // console.log(trailerID);
  // if(!trailerID) return null;
  return (
    <div className="w-full ">
      <iframe
        className="w-screen h-screen"
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

export default VideoBackground;
