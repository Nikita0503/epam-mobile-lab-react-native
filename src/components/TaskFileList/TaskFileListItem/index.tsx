import TaskDeleteSvgImage from '@images/icons/TaskDeleteSvgImage';
import { IFile } from '@interfaces/general';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import TaskFileListItemModal from './TaskFileListItemModal';

interface IProps {
  file: File | IFile;
  onDeleteFile?: (file: File | IFile) => void;
}

const TaskFileListItem = ({ file, onDeleteFile }: IProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const fileUrl = React.useMemo<string>(() => {
    if (file instanceof File) {
      return URL.createObjectURL(file).toString();
    }
    return `http://localhost:5000/${file.name}`;
  }, [file]);

  const onDeleteFilePress = React.useCallback(() => {
    if (onDeleteFile) {
      onDeleteFile(file);
    }
  }, [file, onDeleteFile]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setModalVisible(true)}>
      <Image source={{ uri: fileUrl }} style={styles.image} />
      <TaskFileListItemModal
        fileUrl={fileUrl}
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
      {!!onDeleteFile && (
        <TouchableOpacity
          style={styles.actionContainer}
          onPress={onDeleteFilePress}>
          <TaskDeleteSvgImage />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default TaskFileListItem;
