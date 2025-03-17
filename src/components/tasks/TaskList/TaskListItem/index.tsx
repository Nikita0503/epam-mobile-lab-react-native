import { ITask } from '@interfaces/general';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface IProps {
  task: ITask;
}

const TaskListItem = ({task}: IProps) => {

  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const goToTaskDetails = React.useCallback(() => {
    navigation.navigate(ERouteNames.TASK_DETAILS, {taskId: task.id});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task]);

  return (
    <TouchableOpacity onPress={goToTaskDetails} style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
    </TouchableOpacity>
  );
};

export default TaskListItem;
