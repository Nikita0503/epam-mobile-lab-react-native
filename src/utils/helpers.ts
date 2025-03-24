import { AuthorizationStatus } from '@react-native-firebase/messaging';
import * as FCMService from '@services/FCMService';
import RNFS from 'react-native-fs';

export const uriToFile = async (uri: string): Promise<File> => {
  const fileName = uri.split('/').pop();
  const mimeType = 'image/jpeg';
  const fileData = await RNFS.readFile(uri, 'base64');
  const blob = await fetch(`data:${mimeType};base64,${fileData}`).then(res =>
    res.blob(),
  );
  const file = new File([blob], fileName, { type: mimeType });
  return file;
};

export const getFCMToken = async (): Promise<string | undefined> => {
  const permissions = await FCMService.checkPermission();
  let fcmToken: string | undefined;
  if (permissions === AuthorizationStatus.AUTHORIZED) {
    fcmToken = await FCMService.getToken();
  }
  return fcmToken;
};
