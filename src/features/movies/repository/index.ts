import { MoviesEntity } from "../domain";


export interface MoviesStore extends MoviesEntity {
    // actions
    loadMovies(): void;
    setMovies(movies: MoviesEntity): void;
    selectMovie(movie: any): void;
    addFavorite(movie: any): void;
    removeFavorite(movie: any): void;
}
export type MoviesStoreState = Omit<MoviesStore, 'loadMovies' | 'selectMovie' | 'addFavorite' | 'removeFavorite'>;