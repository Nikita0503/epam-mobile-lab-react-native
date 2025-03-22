import { COMMON_TASKS_PER_PAGE } from '@constants';
import axiosInstance from './axios';

export const fetchCommonTaskApi = async (page: number) => {
  const res = await axiosInstance.get(
    `/tasks/common?page=${page}&tasksPerPage=${COMMON_TASKS_PER_PAGE}`,
  );
  return res.data;
};
