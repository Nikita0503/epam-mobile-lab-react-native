import { ICommonTasksReducerState } from '@interfaces/reducers/commonTasksReducer';
import { createReducer } from '@reduxjs/toolkit';
import {
  setCommonTasksAction,
  setErrorAction,
  setLoadingAction,
} from '../actions/commonTasksActions';

const initialState: ICommonTasksReducerState = {
  commonTasks: [],
  error: undefined,
  loading: false,
};

const allTasksReducer = createReducer<ICommonTasksReducerState>(
  initialState,
  builder =>
    builder
      .addCase(setCommonTasksAction, (store, { payload: { tasks } }) => ({
        ...store,
        commonTasks: tasks,
      }))
      .addCase(setErrorAction, (store, { payload: { error } }) => ({
        ...store,
        error: error,
      }))
      .addCase(setLoadingAction, (store, { payload: { loading } }) => ({
        ...store,
        loading: loading,
      })),
);

export default allTasksReducer;
