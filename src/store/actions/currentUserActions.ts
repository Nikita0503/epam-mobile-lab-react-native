import {
  deleteCurrentUserAvatarApi,
  fetchCurrentUserApi,
  updateCurrentUserApi,
} from '@api/currentUserApi';
import {
  ISetCurrentUserAction,
  ISetError,
  ISetLoadingAction,
  IUpdateCurrentUserAsyncAction,
} from '@interfaces/actions/currentUserActions';
import { INewFile } from '@interfaces/general';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorResponse } from '@utils/errorHandlers';

export const setCurrentUserAction = createAction<ISetCurrentUserAction>(
  'currentUser/setCurrentUserAction',
);

export const setErrorAction = createAction<ISetError>(
  'currentUser/setErrorAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'currentUser/setLoadingAction',
);

export const fetchCurrentUserAsyncAction = createAsyncThunk(
  'currentUser/fetchCurrentUserAsyncAction',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchCurrentUserApi();
      const currentUser = res.user;
      dispatch(setCurrentUserAction({ currentUser: currentUser }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('currentUserActions::fetchCurrentUserAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  },
);

export const updateCurrentUserAsyncAction = createAsyncThunk<
  void,
  IUpdateCurrentUserAsyncAction
>(
  'currentUser/updateCurrentUserAsyncAction',
  async (
    { name, avatar, onSuccess }: IUpdateCurrentUserAsyncAction,
    { dispatch },
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      let newAvatar: INewFile | undefined;
      if (avatar === undefined) {
        await deleteCurrentUserAvatarApi();
      } else if (
        typeof avatar !== 'string' &&
        'type' in avatar &&
        'uri' in avatar
      ) {
        newAvatar = avatar;
      }
      const res = await updateCurrentUserApi(name, newAvatar);
      console.log('Updated User: ', res);
      dispatch(fetchCurrentUserAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('tasksActions::updateTaskAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  },
);
