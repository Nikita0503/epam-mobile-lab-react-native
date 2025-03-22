import { ICommonTasksReducerState } from '@interfaces/reducers/commonTasksReducer';
import { createReducer } from '@reduxjs/toolkit';
import {
  addCommonTasksAction,
  setCommonTasksAction,
  setCommonTasksPageAction,
  setCommonTasksTotalCount,
  setErrorAction,
  setLoadingAction,
  setMoreCommonTasksError,
  setMoreCommonTasksLoading,
} from '../actions/commonTasksActions';

const initialState: ICommonTasksReducerState = {
  commonTasks: [],
  error: undefined,
  loading: false,
  page: 0,
  totalCount: 0,
  moreCommonTasksError: undefined,
  moreCommonTasksLoading: false,
};

const allTasksReducer = createReducer<ICommonTasksReducerState>(
  initialState,
  builder =>
    builder
      .addCase(setCommonTasksAction, (store, { payload: { tasks } }) => ({
        ...store,
        commonTasks: tasks,
      }))
      .addCase(addCommonTasksAction, (store, { payload: { tasks } }) => ({
        ...store,
        commonTasks: [...store.commonTasks, ...tasks],
      }))
      .addCase(setCommonTasksPageAction, (store, { payload: { page } }) => ({
        ...store,
        page: page,
      }))
      .addCase(
        setCommonTasksTotalCount,
        (store, { payload: { totalCount } }) => ({
          ...store,
          totalCount: totalCount,
        }),
      )
      .addCase(setErrorAction, (store, { payload: { error } }) => ({
        ...store,
        error: error,
      }))
      .addCase(setLoadingAction, (store, { payload: { loading } }) => ({
        ...store,
        loading: loading,
      }))
      .addCase(setMoreCommonTasksError, (store, { payload: { error } }) => ({
        ...store,
        setMoreCommonTasksError: error,
      }))
      .addCase(
        setMoreCommonTasksLoading,
        (store, { payload: { loading } }) => ({
          ...store,
          moreCommonTasksLoading: loading,
        }),
      ),
);

export default allTasksReducer;
