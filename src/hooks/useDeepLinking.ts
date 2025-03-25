import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import queryString from 'query-string';
import { useEffect } from 'react';
import { Linking } from 'react-native';

const useDeepLinking = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  useEffect(() => {
    const handleDeepLink = (event: { url: string }) => {
      const { url } = event;
      if (!url) {
        return;
      }

      const { screenName, taskId } = queryString.parseUrl(url).query;

      if (screenName === 'taskDetails' && taskId) {
        navigation.navigate(ERouteNames.TASK_DETAILS, {
          taskId: Number(taskId),
        });
      } else if (screenName === 'profile') {
        navigation.navigate(ERouteNames.TABS_SCREEN, {
          screen: ERouteNames.CURRENT_USER,
        });
      }
    };

    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink({ url });
      }
    });

    const subscription = Linking.addEventListener('url', handleDeepLink);

    return () => subscription.remove();
  }, [navigation]);
};

export default useDeepLinking;
