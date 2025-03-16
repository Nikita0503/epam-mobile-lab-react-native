import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import MMKVStorage from 'react-native-mmkv-storage';
import { persistReducer } from 'redux-persist';
import authReducer from './authReducer';
import tasksReducer from './tasksReducer';

const MMKV = new MMKVStorage.Loader().initialize();

const tasksPersistConfig = {
  key: 'tasks',
  storage: AsyncStorage,
};

const authPersistConfig = {
  key: 'auth',
  storage: {
    setItem: (key: string, value: string) => MMKV.setStringAsync(key, value),
    getItem: (key: string) => MMKV.getStringAsync(key),
    removeItem: (key: string) => MMKV.removeItem(key),
  },
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  tasks: persistReducer(tasksPersistConfig, tasksReducer),
});

export default rootReducer;
