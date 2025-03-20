import Header from '@components/headers/Header';
import TaskFileList from '@components/TaskFileList';
import TextInputWithHint from '@components/TextInputWithHint';
import useTasks from '@hooks/useTasks';
import { IFile } from '@interfaces/general';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles';

const TaskCreatorScreen = () => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [files, setFiles] = React.useState<IFile[]>([]);

  const { createTask } = useTasks();

  const navigation = useNavigation();

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const onCreateTaskPress = React.useCallback(() => {
    createTask(title, description, files, goToTasks);
  }, [title, description, files]);

  const onAddFile = React.useCallback(
    (file: IFile) => {
      setFiles([...files, file]);
    },
    [files],
  );

  const onDeleteFile = React.useCallback(
    (toDeleteFile: IFile) => {
      setFiles(files.filter((file: IFile) => file.name !== toDeleteFile.name));
    },
    [files],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header title="Add new task" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <View style={styles.infoItemContainer}>
              <TextInputWithHint
                hint="Task title"
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <View style={styles.infoItemContainer}>
              <TextInputWithHint
                hint="Task description"
                value={description}
                onChangeText={setDescription}
              />
            </View>
            <View style={styles.infoItemContainer}>
              <TaskFileList
                files={files}
                onAddFile={onAddFile}
                onDeleteFile={onDeleteFile}
              />
            </View>
          </View>
          <Pressable style={styles.button} onPress={onCreateTaskPress}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TaskCreatorScreen;
