import { ERouteNames } from '@interfaces/navigation/routeNames';
import { LinkingOptions } from '@react-navigation/native';
import { Linking } from 'react-native';

export const linking: LinkingOptions<any> = {
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
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    return url;
  },
  subscribe(listener) {
    const onReceiveURL = ({ url }: { url: string }) => listener(url);
    Linking.addEventListener('url', onReceiveURL);
    return () => Linking.removeAllListeners('url');
  },
};
