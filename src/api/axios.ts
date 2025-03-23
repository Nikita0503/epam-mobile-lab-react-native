import {
  setAccessTokenAction,
  setRefreshTokenAction,
} from '@actions/authActions';
import { BASE_URL } from '@constants';
import store from '@store';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { refreshApi } from './authApi';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = store.getState().auth.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config!;
    if (error.response?.status === 401) {
      const refreshToken = store.getState().auth.refreshToken;
      try {
        if (!refreshToken) {
          return Promise.reject(error);
        }
        const res = await refreshApi(refreshToken);
        const newAccessToken = res.tokens.accessToken;
        const newRefreshToken = res.tokens.refreshToken;
        store.dispatch(setAccessTokenAction({ accessToken: newAccessToken }));
        store.dispatch(
          setRefreshTokenAction({ refreshToken: newRefreshToken }),
        );
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        store.dispatch(setAccessTokenAction({ accessToken: undefined }));
        store.dispatch(setRefreshTokenAction({ refreshToken: undefined }));
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
