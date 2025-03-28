import UniversalError from '@components/UniversalError';
import { ITask } from '@interfaces/general';
import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import TaskListItem from './TaskListItem';
import TaskListSeparator from './TaskListSeparator';
import styles from './styles';

interface IProps {
  tasks: ITask[];
  error: any;
  loading: boolean;
  fetchTasks: () => void;
}

const TaskList = ({ tasks, error, loading, fetchTasks }: IProps) => {
  if (error) {
    return (
      <UniversalError
        errorText="Something went wrong"
        buttonText="Update Task List"
        onHandleError={fetchTasks}
      />
    );
  }
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchTasks} />
      }
      data={tasks}
      ItemSeparatorComponent={TaskListSeparator}
      keyExtractor={(item: ITask) => item.id.toString()}
      renderItem={({ item }) => <TaskListItem task={item} />}
    />
  );
};

export default TaskList;
