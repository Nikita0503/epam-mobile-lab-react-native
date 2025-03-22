import { IMAGE_BASE_URL } from '@constants';
import TaskDeleteSvgImage from '@images/icons/TaskDeleteSvgImage';
import { IFile, INewFile } from '@interfaces/general';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import TaskFileListItemModal from './TaskFileListItemModal';

interface IProps {
  file: IFile | INewFile;
  onDeleteFile?: (file: IFile | INewFile) => void;
}

const TaskFileListItem = ({ file, onDeleteFile }: IProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const fileUrl = React.useMemo<string>(() => {
    if ('type' in file && 'uri' in file) {
      return file.uri;
    }
    return `${IMAGE_BASE_URL}/${file.name}`;
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
