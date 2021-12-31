import { fetchios } from '../../infrastructure/http';
import { BASE_API, TMDB_KEY } from '../../main/constants';


export function getMovies() {
  const commonHttpRequest = { params: { api_key: TMDB_KEY, page: 1 } };
  
  return {
    byTopRated() {
      return fetchios.get({httpConfig: commonHttpRequest, url: makeApiUrl('top_rated')})
        .then(response => ({ status: response.status, data: response.data.results }))
        .catch(error => ({ status: error.status, data: null }));
    },
    byPopular() {
      return fetchios.get({httpConfig: commonHttpRequest, url: makeApiUrl('popular')})
        .then(response => ({ status: response.status, data: response.data.results }))
        .catch(error => ({ status: error.status, data: null }));
    },
    byUpcoming() {
      return fetchios.get({httpConfig: commonHttpRequest, url: makeApiUrl('upcoming')})
        .then(response => ({ status: response.status, data: response.data.results }))
        .catch(error => ({ status: error.status, data: null }));
    }
  }
}

function makeApiUrl(url: string) {
  return `${BASE_API}movie/${url}`;
}