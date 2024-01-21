import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPLayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useDispatch, useSelector } from "react-redux";
import { removeGptMovies } from "../utils/GptSlice";


const Browse = () => {
  const showGptSearch = useSelector((state) => state.gpt.GptSearchVal);
  const dispatch = useDispatch();
  if(showGptSearch){
    dispatch(removeGptMovies());
  }
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
          <GptSearch />
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
