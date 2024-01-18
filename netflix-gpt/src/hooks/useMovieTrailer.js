import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { API_options } from "../utils/constants";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieID + "/videos?language=en-US",
      API_options
    );
    const json = await data.json();
    // console.log(json);
    const movieData = json.results.filter((video) => video.type === "Trailer");
    const trailer = movieData.length ? movieData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
