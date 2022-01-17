import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import img from '../../../../assets/img/hero.png'
import { fetchMovies } from '../../../../features/movies/data';

export function useMoviesViewController() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const favoritesMovies = useSelector((state: any) => state.movies.favorites);
  const upcomingMovies = useSelector((state: any) => state.movies.upcoming);
  const popularMovies = useSelector((state: any) => state.movies.popular);
  const topRatedMovies = useSelector((state: any) => state.movies.top_rated);

  return {
    favoritesMovies,
    upcomingMovies,
    popularMovies,
    topRatedMovies,
    img
  };
}