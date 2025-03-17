import { signInApi, signUpApi } from '@api/authApi';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorResponse } from '@utils/errorHandlers';
import { Alert } from 'react-native';
import {
  ISetAccessTokenAction,
  ISetLoadingAction,
  ISignInAsyncAction,
  ISignUpAsyncAction,
} from '../../interfaces/actions/authActions';

export const setAccessTokenAction = createAction<ISetAccessTokenAction>(
  'auth/setAccessTokenAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'auth/setLoadingAction',
);

export const signInAsyncAction = createAsyncThunk<void, ISignInAsyncAction>(
  'auth/signInAsyncAction',
  async ({ email, password, onSuccess }: ISignInAsyncAction, { dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await signInApi(email.toLowerCase(), password);
      if (res.token) {
        dispatch(setAccessTokenAction({ accessToken: res.token }));
      }
      console.log({ token: res.token });
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('authActions::signInAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  },
);

export const signUpAsyncAction = createAsyncThunk<void, ISignUpAsyncAction>(
  'auth/signUpAsyncAction',
  async (
    {
      email,
      name,
      password,
      repeatPassword,
      avatar,
      onSuccess,
    }: ISignUpAsyncAction,
    { dispatch },
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      if (password !== repeatPassword) {
        Alert.alert('Passwords do not match');
        return;
      }
      const res = await signUpApi(email.toLowerCase(), name, password, avatar);
      if (res.token) {
        dispatch(setAccessTokenAction({ accessToken: res.token }));
      }
      console.log({ token: res.token });
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('authActions::signUpAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  },
);
