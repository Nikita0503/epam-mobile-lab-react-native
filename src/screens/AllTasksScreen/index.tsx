import Header from '@components/headers/Header';
import TaskList from '@components/tasks/TaskList';
import useAllTasks from '@hooks/useAllTasks';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const AllTasksScreen = () => {
  const { allTasks, error, loading, fetchAllTasks } = useAllTasks();

  React.useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="All Tasks" hideBackButton={true} />
      <TaskList
        tasks={allTasks}
        error={error}
        loading={loading}
        fetchTasks={fetchAllTasks}
      />
    </View>
  );
};

export default AllTasksScreen;
