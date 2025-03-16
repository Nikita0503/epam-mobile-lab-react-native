import { IFile, ITask } from '@interfaces/general';

export interface ISetTasksAction {
  tasks: ITask[];
}

export interface IAddTaskAction {
  task: ITask;
}

export interface IUpdateTaskAction {
  task: ITask;
}

export interface IRemoveTaskAction {
  task: ITask;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface ICreateTaskAsyncAction {
  title: string;
  description: string;
  files: File[];
  onSuccess?: () => void;
}

export interface IUpdateTaskAsyncAction {
  taskId: number;
  title: string;
  description: string;
  files: File[];
  oldFiles: IFile[];
  onSuccess?: () => void;
}

export interface IDeleteTaskAsyncAction {
  taskId: number;
  onSuccess?: () => void;
}
