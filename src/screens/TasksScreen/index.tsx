import TaskList from '@components/tasks/TaskList';
import CustomButton from '@components/UI/CustomButton';
import useTasks from '@hooks/useTasks';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const TasksScreen = () => {
  const { tasks, error, loading, fetchTasks } = useTasks();

  React.useEffect(() => {
    fetchTasks();
  }, []);

  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const goToTaskCreator = React.useCallback(() => {
    navigation.navigate(ERouteNames.TASK_CREATOR);
  }, []);

  const goToCurrentUser = React.useCallback(() => {
    navigation.navigate(ERouteNames.CURRENT_USER);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton title="Create Task" onPress={goToTaskCreator} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="Current User" onPress={goToCurrentUser} />
      </View>
      <TaskList
        tasks={tasks}
        error={error}
        loading={loading}
        fetchTasks={fetchTasks}
      />
    </View>
  );
};

export default TasksScreen;
