import React from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import styles from './styles';

interface IProps {
  fileUrl: string;
  visible: boolean;
  closeModal: () => void;
}

const TaskFileListItemModal = ({ fileUrl, visible, closeModal }: IProps) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image source={{ uri: fileUrl }} style={styles.image} />
          <Pressable style={styles.button} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default TaskFileListItemModal;
