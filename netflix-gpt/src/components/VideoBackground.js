import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({movieID}) => {
  const trailerID = useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(movieID);
  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerID?.key + "?autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
