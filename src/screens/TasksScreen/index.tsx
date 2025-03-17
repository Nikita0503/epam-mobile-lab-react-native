import TaskListHeader from '@components/headers/TaskListHeader';
import TaskList from '@components/tasks/TaskList';
import useTasks from '@hooks/useTasks';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const TasksScreen = () => {
  const { tasks, error, loading, fetchTasks } = useTasks();

  React.useEffect(() => {
    fetchTasks();
  }, []);

  console.log({ tasks });

  return (
    <View style={styles.container}>
      <TaskListHeader taskCount={tasks.length} />
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
