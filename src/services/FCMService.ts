import { fetchTasksAsyncAction } from '@actions/tasksActions';
import { getNavigation } from '@components/AppNavigation/RootNavigation';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { EPushNotificationType } from '@interfaces/pushNotifications';
import messaging from '@react-native-firebase/messaging';
import store from '@store';
import { PermissionsAndroid, Platform } from 'react-native';

export const onStartBackgroundHandler = () => {
  //receiving messages in the background
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('[FCM]', 'Message handled in the background!', remoteMessage);
    if (
      remoteMessage.data?.type === EPushNotificationType.TASK_CREATED ||
      remoteMessage.data?.type === EPushNotificationType.TASK_UPDATED ||
      remoteMessage.data?.type === EPushNotificationType.TASK_DELETED
    ) {
      store.dispatch(fetchTasksAsyncAction());
    }
  });
  onClickNotificationFromBackground();
  onClickNotificationFromQuit();
};

export const unsubscribe = () => {
  //receiving messages in the foreground
  return messaging().onMessage(async remoteMessage => {
    console.log('[FCM]', 'Message handled in the app!', remoteMessage);
  });
};

export const checkPermission = async () => {
  //checking permission to receive notifications
  const enabled = await messaging().hasPermission();
  if (enabled === messaging.AuthorizationStatus.AUTHORIZED) {
    console.log('[FCM]', 'Push notifications permission is enabled!');
  } else {
    console.log('[FCM]', 'Push notifications permission is disabled!');
    await requestPermission();
  }
  return enabled;
};

export const getToken = async () => {
  let fcmToken = await messaging().getToken();
  console.log('[FCM]', 'Firebase Push Notifications Token:', fcmToken);
  return fcmToken;
};

async function requestPermission() {
  //request permission to receive notifications
  try {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    } else if (Platform.OS === 'ios') {
      await messaging().requestPermission();
    }

    await getToken();
  } catch (error) {
    console.log('[FCM]', 'Push notifications permission is rejected');
  }
}

export const onClickToNotification = (remoteMessage: any) => {
  if (remoteMessage) {
    if (
      remoteMessage.data?.taskId &&
      (remoteMessage.data?.type === EPushNotificationType.TASK_CREATED ||
        remoteMessage.data?.type === EPushNotificationType.TASK_UPDATED)
    ) {
      console.log({
        taskId: remoteMessage.data.taskId,
        type: remoteMessage.data.type,
      });
      const navigation = getNavigation();
      navigation.navigate(ERouteNames.TASK_DETAILS, {
        taskId: remoteMessage.data.taskId,
      });
    }
  }
};

export function onClickNotificationFromBackground() {
  //when user click to notification from background state
  messaging().onNotificationOpenedApp(message =>
    onClickToNotification(message),
  );
}

export function onClickNotificationFromQuit() {
  //when user click to notification from quit state
  messaging().getInitialNotification().then(onClickToNotification);
}
