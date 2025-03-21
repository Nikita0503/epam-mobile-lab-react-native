import { ITask } from '@interfaces/general';

export interface ICommonTasksReducerState {
  commonTasks: ITask[];
  error: any;
  loading: boolean;
}
