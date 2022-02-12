import { MovieEntity } from './movie.entity';

export function toggleFavorite(movie: MovieEntity): MovieEntity {
    return { ...movie, isFavorite: !movie.isFavorite };
}