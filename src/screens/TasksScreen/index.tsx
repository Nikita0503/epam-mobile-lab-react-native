import TaskList from '@components/tasks/TaskList';
import CustomButton from '@components/UI/CustomButton';
import useAuth from '@hooks/useAuth';
import useTasks from '@hooks/useTasks';
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

  return (

    <View style={styles.container}>
      <CustomButton title="Logout" onPress={logout}/>
      <TaskList tasks={tasks} error={error} loading={loading} fetchTasks={fetchTasks}/>
    </View>
  );
};

export default TasksScreen;
