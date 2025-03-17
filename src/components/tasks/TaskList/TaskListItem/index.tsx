import CustomButton from '@components/UI/CustomButton';
import useTasks from '@hooks/useTasks';
import { ITask } from '@interfaces/general';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface IProps {
  task: ITask;
}

const TaskListItem = ({ task }: IProps) => {
  const { deleteTask } = useTasks();

  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const goToTaskDetails = React.useCallback(() => {
    navigation.navigate(ERouteNames.TASK_DETAILS, { taskId: task.id });
  }, [task]);

  const goToTaskEditor = React.useCallback(() => {
    navigation.navigate(ERouteNames.TASK_EDITOR, { taskId: task.id });
  }, [task]);

  const onDeleteTaskPress = React.useCallback(() => {
    deleteTask(task.id);
  }, [task]);

  return (
    <TouchableOpacity onPress={goToTaskDetails} style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.actionsContainer}>
        <View style={styles.actionContainer}>
          <CustomButton onPress={goToTaskEditor} title="Edit" />
        </View>
        <View style={styles.actionContainer}>
          <CustomButton onPress={onDeleteTaskPress} title="Delete" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskListItem;
