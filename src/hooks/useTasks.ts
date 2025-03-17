import {
  createTaskAsyncAction,
  deleteTaskAsyncAction,
  fetchTasksAsyncAction,
  updateTaskAsyncAction,
} from '@actions/tasksActions';
import { IFile, ITask } from '@interfaces/general';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useTasks = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const tasks = useSelector<TRootState, ITask[]>(
    (state: TRootState) => state.tasks.tasks,
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.tasks.error,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.tasks.loading,
  );

  const fetchTasks = React.useCallback(() => {
    dispatch(fetchTasksAsyncAction());
  }, []);

  const createTask = React.useCallback(
    (
      title: string,
      description: string,
      files: File[],
      onSuccess?: () => void,
    ) => {
      dispatch(
        createTaskAsyncAction({
          title: title,
          description: description,
          files: files,
          onSuccess: onSuccess,
        }),
      );
    },

    [],
  );

  const updateTask = React.useCallback(
    (
      taskId: number,
      title: string,
      description: string,
      files: File[],
      oldFiles: IFile[],
      onSuccess?: () => void,
    ) => {
      dispatch(
        updateTaskAsyncAction({
          taskId: taskId,
          title: title,
          description: description,
          files: files,
          oldFiles: oldFiles,
          onSuccess: onSuccess,
        }),
      );
    },

    [],
  );

  const deleteTask = React.useCallback(
    (taskId: number, onSuccess?: () => void) => {
      dispatch(
        deleteTaskAsyncAction({
          taskId: taskId,
          onSuccess: onSuccess,
        }),
      );
    },

    [],
  );

  return {
    tasks,
    error,
    loading,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
