import useTasks from '@hooks/useTasks';
import TaskActiveSvgImage from '@images/icons/TaskActiveSvgImage';
import TaskCompletedSvgImage from '@images/icons/TaskCompletedSvgImage';
import TaskDeleteSvgImage from '@images/icons/TaskDeleteSvgImage';
import TaskEditSvgImage from '@images/icons/TaskEditSvgImage';
import { ITask } from '@interfaces/general';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface IProps {
  task: ITask;
}

const TaskListItem = ({ task }: IProps) => {
  const { deleteTask, patchTask } = useTasks();

  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const onMakeAsDonePress = React.useCallback(() => {
    patchTask(task.id, undefined, undefined, !task.done, [], []);
  }, [task]);

  const goToTaskDetails = React.useCallback(() => {
    navigation.navigate(ERouteNames.TASK_DETAILS, { taskId: task.id });
  }, [task]);

  const goToTaskEditor = React.useCallback(() => {
    navigation.navigate(ERouteNames.TASK_EDITOR, { taskId: task.id });
  }, [task]);

  const onDeleteTaskPress = React.useCallback(() => {
    Alert.alert('Are you sure?', 'Do you wanna delete the task?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteTask(task.id);
        },
      },
    ]);
  }, [task]);

  return (
    <TouchableOpacity onPress={goToTaskDetails} style={styles.container}>
      <Pressable style={styles.taskStatusContainer} onPress={onMakeAsDonePress}>
        {task.done ? <TaskCompletedSvgImage /> : <TaskActiveSvgImage />}
      </Pressable>
      <View style={styles.content}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.titleText, task.done && styles.titleTextThrough]}>
          {task.title}
        </Text>

        <View style={styles.actionsContainer}>
          <Pressable style={styles.actionContainer} onPress={onDeleteTaskPress}>
            <TaskDeleteSvgImage />
          </Pressable>
          <Pressable style={styles.actionContainer} onPress={goToTaskEditor}>
            <TaskEditSvgImage />
          </Pressable>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskListItem;
