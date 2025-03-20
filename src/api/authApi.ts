import { INewFile } from '@interfaces/general';
import axiosInstance from './axios';

export const signInApi = async (email: string, password: string) => {
  const res = await axiosInstance.post('/users/login', {
    email: email,
    password: password,
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
