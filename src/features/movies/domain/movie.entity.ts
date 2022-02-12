export interface MovieEntity {
    title: string;
    poster: string;
    releaseDate: string;
    category: string;
    description: string;
    isFavorite: boolean;
    id: number;
}

export interface MoviesEntity {
    favorites: MovieEntity[];
    top_rated: MovieEntity[];
    upcoming: MovieEntity[];
    popular: MovieEntity[];
    selectedMovie: MovieEntity;
}