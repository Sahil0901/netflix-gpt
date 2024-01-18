import React from "react";
import GptSearchEngine from "./GptSearchEngine";
import GptSuggestinBox from "./GptSuggestinBox";
import { Netflix_Bkg } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <GptSearchEngine />
      <GptSuggestinBox />
    </div>
  );
};

export default GptSearch;
