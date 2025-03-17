import TaskList from '@components/tasks/TaskList';
import CustomButton from '@components/UI/CustomButton';
import useAuth from '@hooks/useAuth';
import useTasks from '@hooks/useTasks';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { AppStackParamList } from '@interfaces/navigation/routeParams';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const TasksScreen = () => {

  const {logout} = useAuth();

  const {tasks, error, loading, fetchTasks} = useTasks();

  React.useEffect(() => {
    fetchTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const goToTaskCreator = React.useCallback(() => {
    navigation.navigate(ERouteNames.TASK_CREATOR);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <View style={styles.container}>
      <CustomButton title="Create Task" onPress={goToTaskCreator}/>
      <CustomButton title="Logout" onPress={logout}/>
      <TaskList tasks={tasks} error={error} loading={loading} fetchTasks={fetchTasks}/>
    </View>
  );
};

export default TasksScreen;
