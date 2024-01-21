import React from "react";
import GptSearchEngine from "./GptSearchEngine";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Netflix_Bkg } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img className="h-screen w-screen object-cover md:none" src={Netflix_Bkg} alt="logo" />
      </div>
      <div>
        <GptSearchEngine />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
