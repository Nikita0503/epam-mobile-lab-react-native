import {
  setAccessTokenAction,
  signInAsyncAction,
  signUpAsyncAction,
} from '@actions/authActions';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useAuth = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const accessToken = useSelector<TRootState, string | undefined>(
    (state: TRootState) => state.auth.accessToken,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.auth.loading,
  );

  const signIn = React.useCallback((email: string, password: string) => {
    dispatch(signInAsyncAction({ email: email, password: password }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signUp = React.useCallback(
    (
      email: string,
      name: string,
      password: string,
      repeatPassword: string,
      avatar: File | undefined,
    ) => {
      dispatch(
        signUpAsyncAction({
          email: email,
          name: name,
          password: password,
          repeatPassword: repeatPassword,
          avatar: avatar,
        }),
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [],
  );

  const logout = React.useCallback(() => {
    dispatch(setAccessTokenAction({ accessToken: undefined }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    accessToken,
    loading,
    signIn,
    signUp,
    logout,
  };
};

export default useAuth;
