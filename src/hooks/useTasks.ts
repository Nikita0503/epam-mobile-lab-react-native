import {
  createTaskAsyncAction,
  deleteTaskAsyncAction,
  fetchTasksAsyncAction,
  patchTaskAsyncAction,
  updateTaskAsyncAction,
} from '@actions/tasksActions';
import { IFile, INewFile, ITask } from '@interfaces/general';
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
      files: INewFile[],
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
      done: boolean,
      files: INewFile[],
      oldFiles: IFile[],
      onSuccess?: () => void,
    ) => {
      dispatch(
        updateTaskAsyncAction({
          taskId: taskId,
          title: title,
          description: description,
          done: done,
          files: files,
          oldFiles: oldFiles,
          onSuccess: onSuccess,
        }),
      );
    },
    [],
  );

  const patchTask = React.useCallback(
    (
      taskId: number,
      title: string | undefined,
      description: string | undefined,
      done: boolean | undefined,
      files: INewFile[],
      oldFiles: IFile[],
      onSuccess?: () => void,
    ) => {
      dispatch(
        patchTaskAsyncAction({
          taskId: taskId,
          title: title,
          description: description,
          done: done,
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
    patchTask,
    deleteTask,
  };
};

export default useTasks;
