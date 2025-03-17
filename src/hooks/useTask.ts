import { fetchTaskApi } from '@api/tasksApi';
import { ITask } from '@interfaces/general';
import React from 'react';

const useTask = (taskId: number) => {
  const [task, setTask] = React.useState<ITask | undefined>(undefined);
  const [error, setError] = React.useState<any>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchTaskData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchTaskApi(taskId);
      if (response.task) {
        setTask(response.task);
        setError(undefined);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [taskId]);

  React.useEffect(() => {
    fetchTaskData();
  }, [taskId]);

  return { task, error, loading };
};

export default useTask;
