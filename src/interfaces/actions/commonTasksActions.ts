import { ITask } from '@interfaces/general';

export interface ISetCommonTasksAction {
  tasks: ITask[];
}

export interface IAddCommonTasksAction {
  tasks: ITask[];
}

export interface ISetCommonTasksPageAction {
  page: number;
}

export interface ISetCommonTasksTotalCount {
  totalCount: number;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface ISetMoreCommonTasksError {
  error: any;
}

export interface ISetMoreCommonTasksLoading {
  loading: boolean;
}
