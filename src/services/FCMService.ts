import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid, Platform } from 'react-native';

export const onStartBackgroundHandler = () => {
  //receiving messages in the background
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('[FCM]', 'Message handled in the background!', remoteMessage);
  });
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
