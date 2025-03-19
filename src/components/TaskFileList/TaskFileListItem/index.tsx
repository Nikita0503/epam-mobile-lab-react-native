import { IFile } from '@interfaces/general';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import TaskFileListItemModal from './TaskFileListItemModal';

interface IProps {
  file: File | IFile;
}

const TaskFileListItem = ({ file }: IProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const fileUrl = React.useMemo<string>(() => {
    if (file instanceof File) {
      return URL.createObjectURL(file).toString();
    }
    return `http://localhost:5000/${file.name}`;
  }, [file]);

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image source={{ uri: fileUrl }} style={styles.image} />
      <TaskFileListItemModal
        fileUrl={fileUrl}
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
    </TouchableOpacity>
  );
};

export default TaskFileListItem;
