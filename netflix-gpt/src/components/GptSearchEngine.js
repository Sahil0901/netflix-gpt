import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/GptSlice";

const GptSearchEngine = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTMDBMovies = async (movies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+ movies +"&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    // console.log(json);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      " . Only give me names of 5 movies, comma seperated, like the example given ahead. Example : Golmaal, Don, Dhamaal, Bhool BHulaiya, Sholay.";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    const promiseArray = gptMovies.map((movies) => searchTMDBMovies(movies));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);
    dispatch(addGptMovies({
        movieNames: gptMovies,
        movieResults: tmdbResults,
    }))

  };

  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className=" p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        ></input>
        <button
          className="px-2 py-2 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchEngine;
