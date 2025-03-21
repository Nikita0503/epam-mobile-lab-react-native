import { fetchAllTaskApi } from '@api/allTasksApi';
import {
  ISetAllTasksAction,
  ISetError,
  ISetLoadingAction,
} from '@interfaces/actions/allTasksActions';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setAllTasksAction = createAction<ISetAllTasksAction>(
  'allTasks/setAllTasksAction',
);

export const setErrorAction = createAction<ISetError>(
  'allTasks/setErrorAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'allTasks/setLoadingAction',
);

export const fetchAllTasksAsyncAction = createAsyncThunk(
  'allTasks/fetchAllTasksAsyncAction',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchAllTaskApi();
      const tasks = res.tasks.reverse();
      dispatch(setAllTasksAction({ allTasks: tasks }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('allTasksActions::fetchAllTasksAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  },
);
