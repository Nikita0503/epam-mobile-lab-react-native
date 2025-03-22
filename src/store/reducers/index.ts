import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import MMKVStorage from 'react-native-mmkv-storage';
import { persistReducer } from 'redux-persist';
import authReducer from './authReducer';
import commonTasksReducer from './commonTasksReducer';
import currentUserReducer from './currentUserReducer';
import tasksReducer from './tasksReducer';

const MMKV = new MMKVStorage.Loader().initialize();

const authPersistConfig = {
  key: 'auth',
  storage: {
    setItem: (key: string, value: string) => MMKV.setStringAsync(key, value),
    getItem: (key: string) => MMKV.getStringAsync(key),
    removeItem: (key: string) => MMKV.removeItem(key),
  },
};

const currentUserPersistConfig = {
  key: 'currentUser',
  storage: AsyncStorage,
};

const tasksPersistConfig = {
  key: 'tasks',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  commonTasks: commonTasksReducer,
  currentUser: persistReducer(currentUserPersistConfig, currentUserReducer),
  tasks: persistReducer(tasksPersistConfig, tasksReducer),
});

export default rootReducer;
