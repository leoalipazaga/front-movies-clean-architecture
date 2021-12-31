import { useEffect, useState } from "react";

import { getMovies } from '../../../../domain/usecases';
import { moviesAdapter } from '../../../../domain/adapter';

export function useMovies() {
  const [movies, setMovies] = useState({
    topRated: [],
    upcoming: [],
    popular: []
  });

  useEffect(() => {
    getMovies()
      .byTopRated()
      .then((res) => {
        setMovies(acc => ({ ...acc, topRated: res.data.map(moviesAdapter.adapt) }));
      });

    getMovies()
      .byPopular()
      .then((res) => {
        setMovies(acc => ({ ...acc, popular: res.data.map(moviesAdapter.adapt) }));
      });

    getMovies()
      .byUpcoming()
      .then((res) => {
        setMovies(acc => ({ ...acc, upcoming: res.data.map(moviesAdapter.adapt) }));
      });
  }, [setMovies]);

  return movies;
}