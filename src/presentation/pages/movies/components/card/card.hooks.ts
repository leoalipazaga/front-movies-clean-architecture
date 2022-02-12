import { MoviesStore } from '../../../../../features/movies/repository';
import { toggleFavoriteMovieUseCase } from '../../../../../features/movies/usecase';
import { useState } from 'react';

export function useCard(store: MoviesStore) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    function openModal(movie: any) {
        store.selectMovie({ movie });
        setIsOpenModal(true);
    };

    function closeModal() {
        setIsOpenModal(false);
    }

    function handleFavorite() {
        toggleFavoriteMovieUseCase(store);
        closeModal();
    }

    return {
        openModal,
        closeModal,
        handleFavorite,
        isOpenModal
    }
}