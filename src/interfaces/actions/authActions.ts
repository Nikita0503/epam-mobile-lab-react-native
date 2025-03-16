export interface ISetAccessTokenAction {
  accessToken: string | undefined;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface ISignInAsyncAction {
  email: string;
  password: string;
  onSuccess?: () => void;
  onError?: () => void;
}

export interface ISignUpAsyncAction {
  email: string;
  name: string;
  password: string;
  repeatPassword: string;
  avatar?: File;
  onSuccess?: () => void;
  onError?: () => void;
}
