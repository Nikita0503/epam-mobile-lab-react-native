import { IUser } from '@interfaces/general';

export interface ICurrentUserReducerState {
  currentUser: IUser | undefined;
  error: any;
  loading: boolean;
}
