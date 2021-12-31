import { HttpRequest, HttpPostMethod, HttpPutMethod, HttpGetMethod } from '../../protocols/http';

import axios, { AxiosRequestConfig } from 'axios';

export function configHttpRequest(mainConfig: HttpRequest): AxiosRequestConfig {
  return {
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${(mainConfig.headers && mainConfig.headers.token) || ''}`,
    },
    ...mainConfig
  }
}

export const fetchios = {
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