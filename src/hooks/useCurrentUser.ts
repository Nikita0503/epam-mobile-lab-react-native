import {
  fetchCurrentUserAsyncAction,
  updateCurrentUserAsyncAction,
} from '@actions/currentUserActions';
import { INewFile, IUser } from '@interfaces/general';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCurrentUser = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const currentUser = useSelector<TRootState, IUser | undefined>(
    (state: TRootState) => state.currentUser.currentUser,
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.currentUser.error,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.currentUser.loading,
  );

  const fetchCurrentUser = React.useCallback(async () => {
    dispatch(fetchCurrentUserAsyncAction());
  }, []);

  const updateCurrentUser = React.useCallback(
    async (
      name: string,
      avatar: INewFile | string | undefined,
      onSuccess: () => void,
    ) => {
      dispatch(
        updateCurrentUserAsyncAction({
          name: name,
          avatar: avatar,
          onSuccess: onSuccess,
        }),
      );
    },
    [],
  );

  return {
    currentUser,
    error,
    loading,
    fetchCurrentUser,
    updateCurrentUser,
  };
};

export default useCurrentUser;
