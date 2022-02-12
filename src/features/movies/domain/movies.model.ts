import { MovieEntity, MoviesEntity } from './movie.entity';
import { toggleFavorite } from './movie.model';

type CategoriesType = Omit<MoviesEntity, 'selectedMovie'>;

// FIX: remove and add favorite with same id

export function setMovies(movies: MoviesEntity): MoviesEntity {
  return {
    ...movies
  }
}

export function removeFavorite(movies: MoviesEntity): MoviesEntity {
  const selectedMovie = movies.selectedMovie;

  return {
    ...movies,
    favorites: movies.favorites.filter((movie: MovieEntity) => movie.id !== selectedMovie.id),
    [selectedMovie.category]: toggleFavoriteMovies(movies)
  };
}

export function addFavorite(movies: MoviesEntity): MoviesEntity {
  const selectedMovie = movies.selectedMovie;

  return {
    ...movies,
    favorites: movies.favorites.concat(toggleFavorite(selectedMovie)),
    [selectedMovie.category]: toggleFavoriteMovies(movies)
  };
}

function toggleFavoriteMovies(movies: MoviesEntity) {
  const selectedMovie = movies.selectedMovie;

  return movies[selectedMovie.category as keyof CategoriesType].map((movie: MovieEntity) =>
    movie.id === selectedMovie.id
      ? toggleFavorite(movie)
      : movie
  )
}