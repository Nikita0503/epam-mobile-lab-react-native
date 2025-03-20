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
  console.log({ avatar });
  const formData = new FormData();
  formData.append('name', name);
  if (avatar === undefined) {
    await axiosInstance.delete('/users/avatar');
  } else if (
    typeof avatar !== 'string' &&
    'type' in avatar &&
    'uri' in avatar
  ) {
    formData.append('avatar', avatar);
  }
  const res = await axiosInstance.put('/users', formData);
  return res.data;
};

export const deleteCurrentUserAvatarApi = async () => {
  const res = await axiosInstance.delete('/users/avatar');
  return res.data;
};
