import Header from '@components/headers/Header';
import TaskFileList from '@components/TaskFileList';
import useTask from '@hooks/useTask';
import useTasks from '@hooks/useTasks';
import { ITask } from '@interfaces/general';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
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

const TaskDetailsScreen = ({ task }: IProps) => {
  const { deleteTask } = useTasks();

  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const goToTasks = React.useCallback(() => {
    navigation.goBack();
  }, []);

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

  const goToTaskEditor = React.useCallback(() => {
    navigation.goBack();
    navigation.navigate(ERouteNames.TASK_EDITOR, {
      taskId: task.id,
    });
  }, [task]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Header title="Task Details" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.description}>{task.description}</Text>
        <TaskFileList
          files={task.files}
          onAddFile={() => {}}
          onDeleteFile={() => {}}
        />
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={onDeleteTaskPress}>
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={goToTaskEditor}>
          <Text style={styles.buttonText}>Edit</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const TaskDetailsScreenWrapper = () => {
  const {
    params: { taskId },
  } = useRoute<RouteProp<AppStackParamList, ERouteNames.TASK_DETAILS>>();
  const { task, error, loading } = useTask(taskId);

  if (loading) {
    return <View />;
  }

  return <TaskDetailsScreen task={task!} />;
};

export default TaskDetailsScreenWrapper;
