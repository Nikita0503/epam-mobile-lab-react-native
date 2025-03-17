import Header from '@components/headers/Header';
import TextInputWithHint from '@components/TextInputWithHint';
import useTasks from '@hooks/useTasks';
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

  const { createTask } = useTasks();

  const navigation = useNavigation();

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const onCreateTaskPress = React.useCallback(() => {
    createTask(title, description, [], goToTasks);
  }, [title, description]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header title="Add new task" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.taskAddPhotoContainer}>
          {/* <TaskAddPhoto photo={taskPhoto} setPhoto={setTaskPhoto} /> */}
        </View>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <TextInputWithHint
              hint="Task title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInputWithHint
              hint="Task description"
              value={description}
              onChangeText={setDescription}
            />
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
