import { ITask } from '@interfaces/general';

export interface ISetCommonTasksAction {
  tasks: ITask[];
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}
