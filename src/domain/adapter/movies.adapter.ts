export const moviesAdapter = {
  adapt(movie: MovieHttp): MovieModel {
    return {
      title: movie.title,
      releaseDate: movie.release_date,
      poster: movie.poster_path,
      description: movie.overview,
      id: movie.id
    }
  }
}

interface MovieHttp {
  title: string,
  release_date: string,
  poster_path: string,
  overview: string,
  id: number,
}

interface MovieModel {
  title: string,
  releaseDate: string,
  poster: string,
  description: string,
  id: number
}