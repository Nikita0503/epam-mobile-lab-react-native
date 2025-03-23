export interface IAuthReducerState {
  accessToken: string | undefined;
  refreshToken: string | undefined;
  loading: boolean;
}
