import { ITask } from '@interfaces/general';

export interface ISetAllTasksAction {
  allTasks: ITask[];
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}
