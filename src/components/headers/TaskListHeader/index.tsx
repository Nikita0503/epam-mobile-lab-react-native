import CustomButton from '@components/CustomButton';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface IProps {
  taskCount: number;
}

const TaskListHeader = ({ taskCount }: IProps) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const taskCountText = React.useMemo(() => {
    if (taskCount === 1) {
      return 'task';
    } else {
      return 'tasks';
    }
  }, [taskCount]);

  const goToAddTaskScreen = React.useCallback(() => {
    navigation.navigate(ERouteNames.TASK_CREATOR);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.addTaskContainer}>
        <Text style={styles.addTaskTitle}>Hello, there</Text>
        <CustomButton
          buttonTextStyle={styles.addTaskButtonText}
          buttonStyle={styles.addTaskButton}
          onPress={goToAddTaskScreen}>
          + Add task
        </CustomButton>
      </View>
      <View style={styles.taskCountContainer}>
        <Text style={styles.taskCountText}>
          You have {'\n'}
          {taskCount} {taskCountText} here
        </Text>
      </View>
    </View>
  );
};

export default TaskListHeader;
