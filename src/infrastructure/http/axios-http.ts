import { HttpPostMethod, HttpPutMethod, HttpGetMethod } from '../../protocols/http';

import axios, { AxiosRequestConfig } from 'axios';
import { TMDB_KEY } from '../../main/constants';

export function configHttpRequest(mainConfig: any = {}): AxiosRequestConfig {
  return {
    params: { api_key: TMDB_KEY },
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${(mainConfig.headers && mainConfig.headers.token) || ''}`,
    },
    ...mainConfig
  }
}

export const fetchios: any = {
  put({ url, body, httpConfig }: HttpPutMethod) {
    return axios.put(url, body, configHttpRequest(httpConfig));
  },
  post({ url, body, httpConfig }: HttpPostMethod) {
    return axios.post(url, body, configHttpRequest(httpConfig));
  },
  get({ url, httpConfig }: HttpGetMethod) {
    return axios.get(url, configHttpRequest(httpConfig));
  }
}