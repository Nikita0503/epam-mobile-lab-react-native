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
  files?: File[]
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
  }
  const res = await axiosInstance.post(
    '/tasks',
    formData
  );
  return res.data;
};

export const updateTaskApi = async (
  taskId: number,
  title: string,
  description: string,
  files?: File[]
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  if (files) {
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
  }
  const res = await axiosInstance.put(
    `/tasks/${taskId}`,
    formData
  );
  return res.data;
};

export const deleteTaskApi = async (taskId: number) => {
  const res = await axiosInstance.delete(
    `/tasks/${taskId}`
  );
  return res.data;
};
