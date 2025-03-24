import { INewFile } from '@interfaces/general';
import axiosInstance from './axios';

export const fetchTaskApi = async (taskId: number) => {
  const res = await axiosInstance.get(`/tasks/${taskId}`);
  return res.data;
};

export const fetchTasksApi = async () => {
  const res = await axiosInstance.get('/tasks');
  return res.data;
};

export const createTaskApi = async (
  title: string,
  description: string,
  files?: INewFile[],
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
  }
  const res = await axiosInstance.post('/tasks', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const updateTaskApi = async (
  taskId: number,
  title: string,
  description: string,
  files?: INewFile[],
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
  }
  const res = await axiosInstance.put(`/tasks/${taskId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const deleteTaskApi = async (taskId: number) => {
  const res = await axiosInstance.delete(`/tasks/${taskId}`);
  return res.data;
};
