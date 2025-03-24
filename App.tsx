import AppNavigation from '@components/AppNavigation';
import * as FCMService from '@services/FCMService';
import store, { persistor } from '@store';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styles from './styles';

const App = () => {
  React.useEffect(() => {
    FCMService.checkPermission();
    const unsubscribe = FCMService.unsubscribe();
    return unsubscribe;
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
