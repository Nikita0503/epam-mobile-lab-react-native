import { fetchCommonTaskApi } from '@api/commonTasksApi';
import {
  ISetCommonTasksAction,
  ISetError,
  ISetLoadingAction,
} from '@interfaces/actions/commonTasksActions';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setCommonTasksAction = createAction<ISetCommonTasksAction>(
  'commonTasks/setCommonTasksAction',
);

export const setErrorAction = createAction<ISetError>(
  'commonTasks/setErrorAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'commonTasks/setLoadingAction',
);

export const fetchCommonTasksAsyncAction = createAsyncThunk(
  'commonTasks/fetchCommonTasksAsyncAction',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchCommonTaskApi();
      const tasks = res.tasks;
      dispatch(setCommonTasksAction({ tasks: tasks }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('commonTasks::fetchCommonTasksAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  },
);
