import CustomButton from '@components/CustomButton';
import Header from '@components/headers/Header';
import TaskFileList from '@components/TaskFileList';
import UniversalError from '@components/UniversalError';
import UniversalLoading from '@components/UniversalLoading';
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
        <TaskFileList files={task.files} />
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <CustomButton buttonStyle={styles.button} onPress={onDeleteTaskPress}>
          Delete
        </CustomButton>
        <CustomButton buttonStyle={styles.button} onPress={goToTaskEditor}>
          Edit
        </CustomButton>
      </View>
    </KeyboardAvoidingView>
  );
};

const TaskDetailsScreenWrapper = () => {
  const {
    params: { taskId },
  } = useRoute<RouteProp<AppStackParamList, ERouteNames.TASK_DETAILS>>();
  const { task, error, loading } = useTask(taskId);

  const navigation = useNavigation();

  const goBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  if (error) {
    return (
      <UniversalError
        errorText="Something went wrong. Probably task was not found"
        buttonText="Go to Task List"
        onHandleError={goBack}
      />
    );
  }

  if (loading) {
    return (
      <UniversalLoading
        loadingText="Task is loading..."
        buttonText="Go to Task List"
        onHandleLoading={goBack}
      />
    );
  }

  return <TaskDetailsScreen task={task!} />;
};

export default TaskDetailsScreenWrapper;
