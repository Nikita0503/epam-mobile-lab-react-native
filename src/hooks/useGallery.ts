import React from 'react';
import {Platform} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {PERMISSIONS} from 'react-native-permissions';
import usePermission from './usePermission';

const useGallery = () => {
  const [photo, setPhoto] = React.useState<string>();

  const {allowed, checkPermission} = usePermission(
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      : PERMISSIONS.IOS.PHOTO_LIBRARY,
  );

  const fetchGallery = React.useCallback(async (): Promise<
    string | undefined
  > => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
    };
    let galleryResponse = await launchImageLibrary(options);
    if (galleryResponse.assets) {
      return galleryResponse.assets[0].uri;
    }
    return undefined;
  }, []);

  const pickPhoto = React.useCallback(async (): Promise<string | undefined> => {
    let photoUri: string | undefined;

    if (allowed) {
      photoUri = await fetchGallery();
    } else {
      const permissionStatus = await checkPermission();
      if (permissionStatus) {
        photoUri = await fetchGallery();
      }
    }

    if (photoUri) {
      setPhoto(photoUri);
    }
    return photoUri;
  }, [allowed, setPhoto, checkPermission, fetchGallery]);

  return {photo, pickPhoto};
};

export default useGallery;
