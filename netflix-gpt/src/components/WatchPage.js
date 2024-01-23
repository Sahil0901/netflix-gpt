import React from "react";
import { useParams } from "react-router-dom";
import AboutMovie from "./AboutMovie";
import { useSelector } from "react-redux";
import MovieScreen from "./MovieScreen";

const WatchPage = () => {
  const { id } = useParams();
  const movie = useSelector((store) => store.movie.trailerVideo);
  return (
    <div className="bg-black flex">
      <div className="p-2 m-2 ">
        <MovieScreen movieID={id} />
      </div>
      <div>
        <AboutMovie movieID={id} />
      </div>
    </div>
  );
};

export default WatchPage;
