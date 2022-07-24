﻿import { AxiosError } from 'axios';
import {
  IErrorResponse,
  IHttpClient,
  IHttpConfig,
  IResponse,
} from '../types/http.types';
import { ErrorMessage } from '../constants/http.constants';

export class HttpService implements IHttpClient {
  constructor(
    private fetchingService: IHttpClient,
    private baseUrl = process.env.NEXT_PUBLIC_BASE_URL,
  ) {}

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${url}`;
  }

  public async get<T>(url: string, config?: IHttpConfig) {
    return this.fetchingService
      .get<IResponse<T>>(this.getFullApiUrl(url), config)
      .then((result) => {
        if (result) {
          this.checkResponseStatus(result);
          return result.data;
        }
      })
      .catch(this.errorHandler);
  }

  public async post<T, D>(url: string, data: D, config?: IHttpConfig) {
    return this.fetchingService
      .post<IResponse<T>, D>(this.getFullApiUrl(url), data, config)
      .then((result) => {
        if (result) {
          this.checkResponseStatus(result);
          return result.data;
        }
      })
      .catch(this.errorHandler);
  }

  public async put<T, D>(url: string, data: D, config?: IHttpConfig) {
    return this.fetchingService
      .put<IResponse<T>, D>(this.getFullApiUrl(url), data, config)
      .then((result) => {
        if (result) {
          this.checkResponseStatus(result);
          return result.data;
        }
      })
      .catch(this.errorHandler);
  }

  public async delete<T>(url: string, config?: IHttpConfig) {
    return this.fetchingService
      .delete<IResponse<T>>(this.getFullApiUrl(url), config)
      .then((result) => {
        if (result) {
          this.checkResponseStatus(result);
          return result.data;
        }
      })
      .catch(this.errorHandler);
  }

  private errorHandler(error: AxiosError<IErrorResponse>) {
    const errorResponse = error.response;

    const errorData: IErrorResponse = {
      statusCode: errorResponse?.data.statusCode || 404,
      message: errorResponse?.data.message || ErrorMessage.DEFAULT,
    };

    const event = new CustomEvent('http-error', { detail: errorData });
    document.dispatchEvent(event);
  }

  private checkResponseStatus<T>(result: IResponse<T>) {
    if (result.status >= 400 && result.status < 600) {
      const errorData = {
        response: {
          status: result.status,
          data: result.data,
        },
      };

      throw new Error(JSON.stringify(errorData));
    }
  }
}
