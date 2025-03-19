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
