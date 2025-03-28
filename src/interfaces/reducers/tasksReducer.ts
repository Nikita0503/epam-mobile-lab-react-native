import { ITask } from '@interfaces/general';

export interface ITasksReducerState {
  tasks: ITask[];
  error: any;
  loading: boolean;
}
