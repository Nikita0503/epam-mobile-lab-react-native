import { INewFile } from '@interfaces/general';
import axiosInstance from './axios';

export const fetchCurrentUserApi = async () => {
  const res = await axiosInstance.get('/users/me');
  return res.data;
};

export const updateCurrentUserApi = async (
  name: string,
  avatar?: INewFile | string | undefined,
) => {
  const formData = new FormData();
  formData.append('name', name);
  if (avatar) {
    formData.append('avatar', avatar);
  }
  const res = await axiosInstance.put('/users', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const deleteCurrentUserAvatarApi = async () => {
  const res = await axiosInstance.delete('/users/avatar');
  return res.data;
};
