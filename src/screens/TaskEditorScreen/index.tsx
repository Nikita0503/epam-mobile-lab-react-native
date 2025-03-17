import Header from '@components/headers/Header';
import TextInputWithHint from '@components/TextInputWithHint';
import useTask from '@hooks/useTask';
import useTasks from '@hooks/useTasks';
import { ITask } from '@interfaces/general';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles';

interface IProps {
  task: ITask;
}

const TaskEditorScreen = ({ task }: IProps) => {
  const [title, setTitle] = React.useState<string>(task.title);
  const [description, setDescription] = React.useState<string>(
    task.description,
  );

  const { updateTask, deleteTask } = useTasks();

  const navigation = useNavigation();

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, []);

  const onUpdateTaskPress = React.useCallback(() => {
    updateTask(task.id, title, description, [], [], goToTasks);
  }, [task, title, description]);

  const onDeleteTaskPress = React.useCallback(() => {
    Alert.alert('Are you sure?', 'Do you wanna delete the task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteTask(task.id, goToTasks);
        },
      },
    ]);
  }, [task]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header
        title="Edit task"
        actionButton={{ title: 'Delete', onPress: onDeleteTaskPress }}
      />
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
          <Pressable style={styles.button} onPress={onUpdateTaskPress}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const TaskEditorScreenWrapper = () => {
  const {
    params: { taskId },
  } = useRoute<RouteProp<AppStackParamList, ERouteNames.TASK_DETAILS>>();
  const { task, error, loading } = useTask(taskId);

  if (loading) {
    return <View />;
  }

  return <TaskEditorScreen task={task!} />;
};

export default TaskEditorScreenWrapper;
