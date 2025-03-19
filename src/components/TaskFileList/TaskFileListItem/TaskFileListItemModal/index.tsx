import { IFile } from '@interfaces/general';
import React from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import styles from './styles';

interface IProps {
  file: IFile;
  visible: boolean;
  closeModal: () => void;
}

const TaskFileListItemModal = ({ file, visible, closeModal }: IProps) => {
  console.log('http://localhost:5000/' + file.name);
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={{ uri: 'http://localhost:5000/' + file.name }}
            style={styles.image}
          />
          <Pressable style={styles.button} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default TaskFileListItemModal;
