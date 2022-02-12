import { MovieEntity } from './movie.entity';

export const moviesAdapter = {
  adapt(movie: MovieHttp): Omit<MovieEntity, 'category' | 'isFavorite'> {
    return {
      title: movie.title,
      releaseDate: _formatDateES(movie.release_date),
      poster: movie.poster_path,
      description: movie.overview,
      id: movie.id
    }
  }
}

export function mapMovieByCategory(category: string): (m: MovieHttp) => MovieEntity {
  return (movie: MovieHttp) => ({ ...moviesAdapter.adapt(movie), category, isFavorite: false });
}

function _formatDateES(date: string) {
  const newDate = new Date(date.replace('-', '/'));

  return newDate.toLocaleDateString('es-pe', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
  });
}

interface MovieHttp {
  title: string,
  release_date: string,
  poster_path: string,
  overview: string,
  id: number,
}