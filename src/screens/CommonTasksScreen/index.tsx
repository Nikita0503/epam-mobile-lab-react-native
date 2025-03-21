import CommonTaskList from '@components/commonTasks/CommonTaskList';
import Header from '@components/headers/Header';
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
      <CommonTaskList
        tasks={allTasks}
        error={error}
        loading={loading}
        fetchCommonTasks={fetchCommonTasks}
      />
    </View>
  );
};

export default CommonTasksScreen;
