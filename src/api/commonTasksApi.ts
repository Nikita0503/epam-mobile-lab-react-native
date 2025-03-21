import axiosInstance from './axios';

export const fetchCommonTaskApi = async () => {
  const res = await axiosInstance.get('/tasks/common');
  return res.data;
};
