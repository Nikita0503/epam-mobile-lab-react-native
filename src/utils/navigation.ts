import { ERouteNames } from '@interfaces/navigation/routeNames';

export const linking: any = {
  prefixes: ['https://epam-react-native-lab.web.app'],
  config: {
    screens: {
      [ERouteNames.TASK_DETAILS]: 'task/:taskId',
      [ERouteNames.TABS_SCREEN]: {
        screens: {
          [ERouteNames.CURRENT_USER]: 'profile',
        },
      },
    },
  },
};
