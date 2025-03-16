import { deleteFileApi } from '@api/filesApi';
import {
  createTaskApi,
  deleteTaskApi,
  fetchTasksApi,
  updateTaskApi,
} from '@api/tasksApi';
import {
  IAddTaskAction,
  ICreateTaskAsyncAction,
  IDeleteTaskAsyncAction,
  IRemoveTaskAction,
  ISetError,
  ISetLoadingAction,
  ISetTasksAction,
  IUpdateTaskAction,
  IUpdateTaskAsyncAction,
} from '@interfaces/actions/tasksActions';
import { ITask } from '@interfaces/general';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { taskInfoSelector } from '@selectors/taskSelectors';
import { TRootState } from '@store';
import { handleErrorResponse } from '@utils/errorHandlers';

export const setTasksAction = createAction<ISetTasksAction>(
  'tasks/setTasksAction'
);

export const addTaskAction = createAction<IAddTaskAction>(
  'tasks/addTaskAction'
);

export const updateTaskAction = createAction<IUpdateTaskAction>(
  'tasks/updateTaskAction'
);

export const removeTaskAction = createAction<IRemoveTaskAction>(
  'tasks/removeTaskAction'
);

export const setErrorAction = createAction<ISetError>('tasks/setErrorAction');

export const setLoadingAction = createAction<ISetLoadingAction>(
  'tasks/setLoadingAction'
);

export const fetchTasksAsyncAction = createAsyncThunk(
  'tasks/fetchTasksAsyncAction',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchTasksApi();
      const tasks = res.tasks.reverse();
      dispatch(setTasksAction({ tasks: tasks }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('tasksActions::fetchTasksAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const createTaskAsyncAction = createAsyncThunk<
  void,
  ICreateTaskAsyncAction
>(
  'tasks/createTaskAsyncAction',
  async (
    {
      title,
      description,
      files,
      onSuccess,
    }: ICreateTaskAsyncAction,
    { dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await createTaskApi(
        title,
        description,
        files
      );
      console.log('Created Task: ', res);
      dispatch(fetchTasksAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('tasksActions::createTaskAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const updateTaskAsyncAction = createAsyncThunk<
  void,
  IUpdateTaskAsyncAction
>(
  'tasks/updateTaskAsyncAction',
  async (
    {
      taskId,
      title,
      description,
      files,
      oldFiles,
      onSuccess,
    }: IUpdateTaskAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const state: TRootState = getState() as TRootState;
      const taskInfo: ITask | undefined = taskInfoSelector(taskId)(state);
      if (taskInfo) {
        const deletedFiles = taskInfo.files.filter(
          (file) => !oldFiles.some((oldFile) => oldFile.name === file.name)
        );
        for (let i = 0; i < deletedFiles.length; i++) {
          await deleteFileApi(deletedFiles[i].id);
        }
      }
      const res = await updateTaskApi(
        taskId,
        title,
        description,
        files
      );
      console.log('Updated Task: ', res);
      dispatch(fetchTasksAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('tasksActions::updateTaskAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);

export const deleteTaskAsyncAction = createAsyncThunk<
  void,
  IDeleteTaskAsyncAction
>(
  'tasks/deleteTaskAsyncAction',
  async (
    { taskId, onSuccess }: IDeleteTaskAsyncAction,
    { dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await deleteTaskApi(taskId);
      console.log('Deleted Task: ', res);
      dispatch(fetchTasksAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('tasksActions::deleteTaskAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
