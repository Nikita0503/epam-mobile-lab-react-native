import useTask from '@hooks/useTask';
import { ITask } from '@interfaces/general';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface IProps {
  task: ITask;
}

const TaskDetailsScreen = ({ task }: IProps) => {
  return (
    <View style={styles.container}>
      <Text>{task?.title}</Text>
    </View>
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
