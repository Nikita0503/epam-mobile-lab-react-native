import { fetchAllTasksAsyncAction } from '@actions/allTasksActions';
import { ITask } from '@interfaces/general';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useAllTasks = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const allTasks = useSelector<TRootState, ITask[]>(
    (state: TRootState) => state.allTasks.allTasks,
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.tasks.error,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.tasks.loading,
  );

  const fetchAllTasks = React.useCallback(() => {
    dispatch(fetchAllTasksAsyncAction());
  }, []);

  return {
    allTasks,
    error,
    loading,
    fetchAllTasks,
  };
};

export default useAllTasks;
