import { INewFile, IUser } from '@interfaces/general';

export interface ISetCurrentUserAction {
  currentUser: IUser;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface IUpdateCurrentUserAsyncAction {
  name: string;
  avatar: INewFile | string | undefined;
  onSuccess?: () => void;
}
