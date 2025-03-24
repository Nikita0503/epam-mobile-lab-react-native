import { BASE_URL } from '@constants';
import { INewFile } from '@interfaces/general';
import axios from 'axios';
import axiosInstance from './axios';

export const signInApi = async (email: string, password: string) => {
  const res = await axiosInstance.post('/users/login', {
    email: email,
    password: password,
    accessTokenExpiresIn: '15m',
    refreshTokenExpiresIn: '1h',
  });
  return res.data;
};

export const refreshApi = async (refreshToken: string) => {
  const res = await axios.post(`${BASE_URL}/users/refresh`, {
    refreshToken: refreshToken,
    accessTokenExpiresIn: '15m',
    refreshTokenExpiresIn: '1h',
  });
  return res.data;
};

export const logoutApi = async (refreshToken: string) => {
  const res = await axios.post(`${BASE_URL}/users/logout`, {
    refreshToken: refreshToken,
  });
  return res.data;
};

export const signUpApi = async (
  email: string,
  name: string,
  password: string,
  avatar?: INewFile,
) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('name', name);
  formData.append('password', password);
  if (avatar) {
    formData.append('avatar', avatar);
  }
  const res = await axiosInstance.post('/users/registration', formData);
  return res.data;
};
