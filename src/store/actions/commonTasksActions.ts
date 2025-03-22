import { fetchCommonTaskApi } from '@api/commonTasksApi';
import {
  IAddCommonTasksAction,
  ISetCommonTasksAction,
  ISetCommonTasksPageAction,
  ISetCommonTasksTotalCount,
  ISetError,
  ISetLoadingAction,
  ISetMoreCommonTasksError,
  ISetMoreCommonTasksLoading,
} from '@interfaces/actions/commonTasksActions';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { TRootState } from '@store';

export const setCommonTasksAction = createAction<ISetCommonTasksAction>(
  'commonTasks/setCommonTasksAction',
);

export const addCommonTasksAction = createAction<IAddCommonTasksAction>(
  'commonTasks/addCommonTasksAction',
);

export const setCommonTasksPageAction = createAction<ISetCommonTasksPageAction>(
  'commonTasks/setCommonTasksPageAction',
);

export const setCommonTasksTotalCount = createAction<ISetCommonTasksTotalCount>(
  'commonTasks/setCommonTasksTotalCount',
);

export const setErrorAction = createAction<ISetError>(
  'commonTasks/setErrorAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'commonTasks/setLoadingAction',
);

export const setMoreCommonTasksError = createAction<ISetMoreCommonTasksError>(
  'commonTasks/setMoreCommonTasksError',
);

export const setMoreCommonTasksLoading =
  createAction<ISetMoreCommonTasksLoading>(
    'commonTasks/setMoreCommonTasksLoading',
  );

export const fetchCommonTasksAsyncAction = createAsyncThunk(
  'commonTasks/fetchCommonTasksAsyncAction',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchCommonTaskApi(1);
      const tasks = res.tasks;
      const totalCount = res.taskTotalCount;
      dispatch(setCommonTasksAction({ tasks: tasks }));
      dispatch(setCommonTasksTotalCount({ totalCount: totalCount }));
      dispatch(setErrorAction({ error: undefined }));
      dispatch(setCommonTasksPageAction({ page: 2 }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('commonTasks::fetchCommonTasksAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  },
);

export const fetchMoreCommonTasksAsyncAction = createAsyncThunk<
  void,
  void,
  { state: TRootState }
>(
  'commonTasks/fetchMoreCommonTasksAsyncAction',
  async (_, { getState, dispatch }) => {
    try {
      const commonTasksCount = getState().commonTasks.commonTasks.length;
      const totalCount = getState().commonTasks.totalCount;
      if (commonTasksCount >= totalCount) {
        return;
      }
      const page = getState().commonTasks.page;
      dispatch(setMoreCommonTasksLoading({ loading: true }));
      const res = await fetchCommonTaskApi(page);
      const tasks = res.tasks;
      dispatch(addCommonTasksAction({ tasks: tasks }));
      dispatch(setMoreCommonTasksError({ error: undefined }));
      dispatch(setCommonTasksPageAction({ page: page + 1 }));
    } catch (e: any) {
      dispatch(setMoreCommonTasksError({ error: e }));
      console.log('commonTasks::fetchMoreCommonTasksAsyncAction error:', e);
    } finally {
      dispatch(setMoreCommonTasksLoading({ loading: false }));
    }
  },
);
