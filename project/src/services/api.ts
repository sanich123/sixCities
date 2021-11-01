import axios, { AxiosResponse, AxiosInstance, AxiosError} from 'axios';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

enum HttpCode {
  Unauthorized = 401
}

type UnauthorizedCallback = () => void;

export const createApi = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { response } = error;
      if (response?.status === HttpCode.Unauthorized) {
        return onUnauthorized();
      }
      return Promise.reject(error);
    },
  );

  return api;
};
