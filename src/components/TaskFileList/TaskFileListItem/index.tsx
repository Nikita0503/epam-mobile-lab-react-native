import { IFile } from '@interfaces/general';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import TaskFileListItemModal from './TaskFileListItemModal';

interface IProps {
  file: IFile;
}

const TaskFileListItem = ({ file }: IProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  console.log('http://localhost:5000/' + file.name);
  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        source={{ uri: 'http://localhost:5000/' + file.name }}
        style={styles.image}
      />
      <TaskFileListItemModal
        file={file}
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
    </TouchableOpacity>
  );
};

export default TaskFileListItem;
