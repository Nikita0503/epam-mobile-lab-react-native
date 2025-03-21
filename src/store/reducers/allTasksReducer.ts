import { IAllTasksReducerState } from '@interfaces/reducers/allTasksReducer';
import { createReducer } from '@reduxjs/toolkit';
import {
  setAllTasksAction,
  setErrorAction,
  setLoadingAction,
} from '../actions/allTasksActions';

const initialState: IAllTasksReducerState = {
  allTasks: [],
  error: undefined,
  loading: false,
};

const allTasksReducer = createReducer<IAllTasksReducerState>(
  initialState,
  builder =>
    builder
      .addCase(setAllTasksAction, (store, { payload: { allTasks } }) => ({
        ...store,
        allTasks: allTasks,
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
