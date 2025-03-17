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
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [taskId]);

  React.useEffect(() => {
    fetchTaskData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskId]);

  return { task, error, loading };
};

export default useTask;
