import CommonTaskList from '@components/commonTasks/CommonTaskList';
import Header from '@components/headers/Header';
import useCommonTasks from '@hooks/useCommonTasks';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const CommonTasksScreen = () => {
  const {
    allTasks,
    error,
    loading,
    moreCommonTasksError,
    moreCommonTasksLoading,
    fetchCommonTasks,
    fetchMoreCommonTasks,
  } = useCommonTasks();

  React.useEffect(() => {
    fetchCommonTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Common Tasks" hideBackButton={true} />
      <CommonTaskList
        tasks={allTasks}
        error={error}
        loading={loading}
        moreCommonTasksError={moreCommonTasksError}
        moreCommonTasksLoading={moreCommonTasksLoading}
        fetchCommonTasks={fetchCommonTasks}
        fetchMoreCommonTasks={fetchMoreCommonTasks}
      />
    </View>
  );
};

export default CommonTasksScreen;
