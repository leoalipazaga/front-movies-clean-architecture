export type HttpRequest = {
  url: string;
  method: HttpMethod;
  params?: any;
  body?: any;
  headers?: any;
}

export interface HttpPutMethod extends HttpPostMethod {
}

export interface HttpPostMethod {
  body: any;
  url: string;
  httpConfig?: any;
}

export interface HttpGetMethod {
  url: string;
  httpConfig?: any;
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch';

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode,
  body?: T
}