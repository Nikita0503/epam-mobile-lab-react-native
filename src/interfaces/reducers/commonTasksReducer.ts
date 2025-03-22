import { ITask } from '@interfaces/general';

export interface ICommonTasksReducerState {
  commonTasks: ITask[];
  page: number;
  totalCount: number;
  error: any;
  loading: boolean;
  moreCommonTasksError: any;
  moreCommonTasksLoading: boolean;
}
