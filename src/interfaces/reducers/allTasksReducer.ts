import { ITask } from '@interfaces/general';

export interface IAllTasksReducerState {
  allTasks: ITask[];
  error: any;
  loading: boolean;
}
