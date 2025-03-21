import { fetchCommonTasksAsyncAction } from '@actions/commonTasksActions';
import { ITask } from '@interfaces/general';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCommonTasks = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const allTasks = useSelector<TRootState, ITask[]>(
    (state: TRootState) => state.commonTasks.commonTasks,
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.commonTasks.error,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.commonTasks.loading,
  );

  const fetchCommonTasks = React.useCallback(() => {
    dispatch(fetchCommonTasksAsyncAction());
  }, []);

  return {
    allTasks,
    error,
    loading,
    fetchCommonTasks,
  };
};

export default useCommonTasks;
