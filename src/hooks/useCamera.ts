import React from 'react';
import {Platform} from 'react-native';
import {CameraOptions, launchCamera} from 'react-native-image-picker';
import {PERMISSIONS} from 'react-native-permissions';
import usePermission from './usePermission';

const useCamera = () => {
  const [photo, setPhoto] = React.useState<string>();

  const {allowed, checkPermission} = usePermission(
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA,
  );

  const fetchCamera = React.useCallback(async (): Promise<
    string | undefined
  > => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 1,
    };
    let cameraResponse = await launchCamera(options);
    if (cameraResponse.assets) {
      return cameraResponse.assets[0].uri;
    }
    return undefined;
  }, []);

  const takePhoto = React.useCallback(async (): Promise<string | undefined> => {
    let photoUri: string | undefined;

    if (allowed) {
      photoUri = await fetchCamera();
    } else {
      const permissionStatus = await checkPermission();
      if (permissionStatus) {
        photoUri = await fetchCamera();
      }
    }

    if (photoUri) {
      setPhoto(photoUri);
    }
    return photoUri;
  }, [allowed, setPhoto]);

  return {photo, takePhoto};
};

export default useCamera;
