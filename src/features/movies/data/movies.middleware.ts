import { AnyAction } from '@reduxjs/toolkit';

import { BASE_API } from '../../../main/constants';
import { apiRequest, API_ACTIONS } from '../../../main/store/api';
import { setNotification } from '../../../main/store/notification';
import { mapMovieByCategory } from '../domain';
import { setLoader } from '../../../main/store/loader';
import { fetchMovies, setMovies, MOVIE_FEATURE, MOVIE_POPULAR, MOVIE_TOP_RATED_FEATURE, MOVIE_UPCOMING } from './movies.actions';

export function middleware() {
    return function (next: any) {
        return function (action: AnyAction) {
            next(action);
            switch (action.type) {
                case fetchMovies.type:
                    next(apiRequest({ body: null, url: `${BASE_API}movie/upcoming`, feature: MOVIE_UPCOMING, method: 'GET' }));
                    next(apiRequest({ body: null, url: `${BASE_API}movie/top_rated`, feature: MOVIE_TOP_RATED_FEATURE, method: 'GET' }));
                    next(apiRequest({ body: null, url: `${BASE_API}movie/popular`, feature: MOVIE_POPULAR, method: 'GET' }));
                    next(setLoader({ state: true, feature: MOVIE_FEATURE }))
                    break;

                case `${MOVIE_TOP_RATED_FEATURE} ${API_ACTIONS.SUCCESS}`:
                    next(setMovies({ query: { top_rated: action.payload.response.map(mapMovieByCategory('top_rated')) } }))
                    next(setLoader({ state: false, feature: MOVIE_FEATURE }));
                    break;

                case `${MOVIE_UPCOMING} ${API_ACTIONS.SUCCESS}`:
                    next(setMovies({ query: { upcoming: action.payload.response.map(mapMovieByCategory('upcoming')) } }))
                    next(setLoader({ state: false, feature: MOVIE_FEATURE }));
                    break;

                case `${MOVIE_POPULAR} ${API_ACTIONS.SUCCESS}`:
                    next(setMovies({ query: { popular: action.payload.response.map(mapMovieByCategory('popular')) } }))
                    next(setLoader({ state: false, feature: MOVIE_FEATURE }));
                    break;

                case `${MOVIE_UPCOMING} ${API_ACTIONS.ERROR}`:
                case `${MOVIE_TOP_RATED_FEATURE} ${API_ACTIONS.ERROR}`:
                case `${MOVIE_POPULAR} ${API_ACTIONS.ERROR}`:
                    next(setNotification({ message: action.payload.message, feature: MOVIE_FEATURE }))
                    next(setLoader({ state: false, feature: MOVIE_FEATURE }));
                    break;
            }
        }
    }
}