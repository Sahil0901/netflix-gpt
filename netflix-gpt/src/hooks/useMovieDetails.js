import { useEffect } from "react";
import { API_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";

const useMovieDetails = (movieID) => {
  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieID + "?language=en-US",
      API_options
    );
    const json = await data.json();
    console.log(json);
    dispatch(addMovieDetails(json));
  };
  const MovieDetails = useSelector((store) => store.movie.MovieDetails);
  useEffect(() => {
    getMovieDetails();
  }, []);
};
export default useMovieDetails;
