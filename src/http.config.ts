import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const Http = axios.create();

class HttpConfig {
  static getData = getData;
  static Http = Http;

  public static setRequestInterceptors(
    onFulfilled: (
      request: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>,
    onRejected?: (error: any) => any
  ) {
    Http.interceptors.request.use(onFulfilled, onRejected);
  }

  public static setResponseInterceptors(
    onFulfilled: <T>(
      response: AxiosResponse<T>
    ) => AxiosResponse<T> | Promise<AxiosResponse<T>>,
    onRejected?: (error: any) => any
  ) {
    Http.interceptors.response.use(onFulfilled, onRejected);
  }
  
}

function getData<T>(response: AxiosResponse<T>) {
  return response.data;
}

Http.defaults.baseURL = 'https://viacep.com.br/ws'

export default HttpConfig;
