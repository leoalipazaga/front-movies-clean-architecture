import { fetchios } from '../../infrastructure/http';
import { BASE_API, TMDB_KEY } from '../../main/constants';
import { moviesAdapter } from '../../domain/adapter';

export enum MovieCategory {
  topRated = 'top_rated',
  popular = 'popular',
  upcoming = 'upcoming'
}

export async function getMoviesByCategory(movieCategory: MovieCategory) {
  const commonHttpRequest = { params: { api_key: TMDB_KEY, page: 1 } };
    try {
      const response = await fetchios.get({httpConfig: commonHttpRequest, url: makeApiUrl(movieCategory)})
      const results = response.data.results;
      return ({ status: response.status, data: results.map(moviesAdapter.adapt) })
    } catch(error: any) {
      // eslint-disable-next-line no-throw-literal
      throw ({ errorMessage: error.request.statusText, status: error.request.status });
    }
}

function makeApiUrl(url: string) {
  return `${BASE_API}movie/${url}`;
}