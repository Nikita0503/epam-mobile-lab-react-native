import { NavigatorScreenParams } from '@react-navigation/native';
import { ERouteNames } from './routeNames';

export type AuthStackParamList = {
  [ERouteNames.SIGN_IN_SCREEN]: undefined;
  [ERouteNames.SIGN_UP_SCREEN]: undefined;
};

export type AppStackParamList = {
  [ERouteNames.TABS_SCREEN]: NavigatorScreenParams<TabsStackParamList>;
  [ERouteNames.ADD_TASK_SCREEN]: undefined;
  [ERouteNames.EDIT_TASK_SCREEN]: {taskId: number};
  [ERouteNames.TASK_DETAILS]: {taskId: number};
};

export type TabsStackParamList = {
  [ERouteNames.TASKS_SCREEN]: undefined;
};
