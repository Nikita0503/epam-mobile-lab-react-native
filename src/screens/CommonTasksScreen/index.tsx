import Header from '@components/headers/Header';
import TaskList from '@components/tasks/TaskList';
import useCommonTasks from '@hooks/useCommonTasks';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const CommonTasksScreen = () => {
  const { allTasks, error, loading, fetchCommonTasks } = useCommonTasks();

  React.useEffect(() => {
    fetchCommonTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Common Tasks" hideBackButton={true} />
      <TaskList
        tasks={allTasks}
        error={error}
        loading={loading}
        fetchTasks={fetchCommonTasks}
      />
    </View>
  );
};

export default CommonTasksScreen;
