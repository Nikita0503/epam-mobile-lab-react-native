import { AppStackParamList } from '@interfaces/navigation/routeParams';
import {
  createNavigationContainerRef,
  NavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<AppStackParamList>();

export const getNavigation = (): NavigationContainerRef<AppStackParamList> => {
  if (navigationRef.isReady()) {
    return navigationRef.current!;
  }
  throw new Error('Navigator is not ready!');
};

export const navigate = (route: string, params?: any): void => {
  navigationRef.current?.navigate(route, params);
};
