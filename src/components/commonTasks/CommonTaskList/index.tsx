import { ITask } from '@interfaces/general';
import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import CommonTaskListItem from './CommonTaskListItem';
import CommonTaskListSeparator from './CommonTaskListSeparator';
import styles from './styles';

interface IProps {
  tasks: ITask[];
  error: any;
  loading: boolean;
  fetchCommonTasks: () => void;
  fetchMoreCommonTasks: () => void;
}

const CommonTaskList = ({
  tasks,
  error,
  loading,
  fetchCommonTasks,
  fetchMoreCommonTasks,
}: IProps) => {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchCommonTasks} />
      }
      data={tasks}
      ItemSeparatorComponent={CommonTaskListSeparator}
      keyExtractor={(item: ITask) => item.id.toString()}
      renderItem={({ item }) => <CommonTaskListItem task={item} />}
      onEndReached={fetchMoreCommonTasks}
      onEndReachedThreshold={0.2}
    />
  );
};

export default CommonTaskList;
