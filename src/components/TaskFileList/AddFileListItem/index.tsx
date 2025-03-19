import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

interface IProps {
  onAddFile: (file: File) => void;
}

const AddFileListItem = ({ onAddFile }: IProps) => {
  const onAddFilePress = React.useCallback(() => {
    onAddFile(new File());
  }, []);

  return (
    <Pressable style={styles.button} onPress={onAddFilePress}>
      <Text style={styles.buttonText}>Add Photo</Text>
    </Pressable>
  );
};

export default AddFileListItem;
