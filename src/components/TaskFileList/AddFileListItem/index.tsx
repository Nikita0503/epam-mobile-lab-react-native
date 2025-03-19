import useCamera from '@hooks/useCamera';
import useGallery from '@hooks/useGallery';
import { uriToFile } from '@utils/helpers';
import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

interface IProps {
  onAddFile: (file: File) => void;
}

const AddFileListItem = ({ onAddFile }: IProps) => {
  const { pickPhoto } = useGallery();
  const { takePhoto } = useCamera();

  const onAddFilePress = React.useCallback(async () => {
    const photo = await pickPhoto();
    const file = await uriToFile(photo!);
    onAddFile(file);
  }, []);

  return (
    <Pressable style={styles.button} onPress={onAddFilePress}>
      <Text style={styles.buttonText}>Add Photo</Text>
    </Pressable>
  );
};

export default AddFileListItem;
