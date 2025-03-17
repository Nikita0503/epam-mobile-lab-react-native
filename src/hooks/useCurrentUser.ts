import { fetchCurrentUserApi, updateCurrentUserApi } from '@api/currentUserApi';
import { IUser } from '@interfaces/general';
import React from 'react';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = React.useState<IUser | undefined>(
    undefined,
  );
  const [error, setError] = React.useState<any>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchCurrentUser = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchCurrentUserApi();
      if (response.user) {
        setCurrentUser(response.user);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateCurrentUser = React.useCallback(
    async (name: string, avatar?: File | string | undefined) => {
      setLoading(true);
      try {
        await updateCurrentUserApi(name, avatar);
        fetchCurrentUser();
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    currentUser,
    error,
    loading,
    fetchCurrentUser,
    updateCurrentUser,
  };
};

export default useCurrentUser;
