import axiosInstance from './axios';

export const fetchAllTaskApi = async () => {
  const res = await axiosInstance.get('/tasks/all');
  return res.data;
};
