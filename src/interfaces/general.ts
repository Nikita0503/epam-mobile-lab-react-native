export type TUserRole = 'ADMIN' | 'USER';

export interface IFile {
  id: number;
  taskId?: number;
  name: string;
}

export interface INewFile {
  name: string;
  type: string;
  uri: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: TUserRole;
  avatar?: string;
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  files: IFile[];
  done: boolean;
}
