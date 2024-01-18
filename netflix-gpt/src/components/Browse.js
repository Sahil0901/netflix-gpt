import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPLayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { Netflix_Bkg } from "../utils/constants";

const Browse = () => {
  const showGptSearch = useSelector((state) => state.gpt.GptSearchVal);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div className="bg-black">
      <Header />
      {showGptSearch ? (
        <div className="bg-gray-800">
          <GptSearch />
        </div>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
