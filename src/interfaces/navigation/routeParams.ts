import {NavigatorScreenParams} from '@react-navigation/native';
import {ERouteNames} from './routeNames';

export type AuthStackParamList = {
  [ERouteNames.LOGIN_SCREEN]: undefined;
};

export type AppStackParamList = {
  [ERouteNames.TABS_SCREEN]: NavigatorScreenParams<TabsStackParamList>;
  [ERouteNames.ADD_TASK_SCREEN]: undefined;
  [ERouteNames.EDIT_TASK_SCREEN]: {taskId: string};
  [ERouteNames.RANDOM_TASKS_SCREEN]: {taskNumber: number};
};

export type TabsStackParamList = {
  [ERouteNames.TASKS_SCREEN]: undefined;
  [ERouteNames.MAP_SCREEN]: undefined;
  [ERouteNames.GENERATOR_SCREEN]: undefined;
};
